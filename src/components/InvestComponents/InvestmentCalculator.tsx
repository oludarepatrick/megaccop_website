import React, { useMemo, useState, useEffect, type JSX } from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import calculatorImage from "@/assets/housingCalculator-image.png";
import modalImage from "@/assets/house-contribution-modal-image.png";
import type { ProgramDef, QualificationResult } from "@/Types/InvestmentTypes";
import { SAVING_PERIODS } from "@/common/utils";

const PROGRAMS: ProgramDef[] = [
  { id: "nhs", label: "NHS (National Housing Scheme)", minPercent: 0.025, maxPercent: 0.3 },
  { id: "mrif", label: "MRIF (Mortgage Refinancing Initiative Fund)", minPercent: 0.095, maxPercent: 0.3 },
];

const INTEREST_RATE = 0.095; // 9.5% yearly
const MIN_EQUITY_RATIO = 0.3; // 30%
const MIN_AGE = 18;
const MAX_AGE = 60;

function formatCurrency(n?: number | null) {
  if (typeof n !== "number" || !isFinite(n) || Number.isNaN(n)) return "₦0";
  return "₦" + Math.round(n).toLocaleString("en-NG");
}

export default function HousingContributionCalculator(): JSX.Element {
  // inputs
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [programId, setProgramId] = useState<ProgramDef["id"] | "">("");
  const [period, setPeriod] = useState<string | undefined>(undefined);
  const [targetValue, setTargetValue] = useState<string>("");
  const [equity, setEquity] = useState<string>(""); // naira
  const [age, setAge] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // slider state (percentage of salary or absolute amount)
  const [deductionPercent, setDeductionPercent] = useState<number | null>(null); // fraction e.g. 0.025
  const [sliderEnabled, setSliderEnabled] = useState(false);

  // dialogs
  const [resultOpen, setResultOpen] = useState(false);
  const [disqualOpen, setDisqualOpen] = useState(false);

  // derived numbers
  const monthlyIncomeNum = Number(String(monthlyIncome).replace(/[^0-9.]/g, "")) || 0;
  const targetValueNum = Number(String(targetValue).replace(/[^0-9.]/g, "")) || 0;
  const equityNum = Number(String(equity).replace(/[^0-9.]/g, "")) || 0;
  const ageNum = Number(String(age).replace(/[^0-9.]/g, "")) || 0;

  const programObj = PROGRAMS.find((p) => p.id === programId) ?? null;

  // slider min/max in absolute naira, recomputed when salary or program changes
  const sliderRange = useMemo(() => {
    if (!programObj || monthlyIncomeNum <= 0) return null;
    const min = Math.round(monthlyIncomeNum * programObj.minPercent);
    const max = Math.round(monthlyIncomeNum * programObj.maxPercent);
    return { min, max, minPercent: programObj.minPercent, maxPercent: programObj.maxPercent };
  }, [programObj, monthlyIncomeNum]);

  // Enable slider only when salary > 0 and program chosen
  useEffect(() => {
    setSliderEnabled(Boolean(sliderRange));
    // reset deduction percent when program or salary changes
    setDeductionPercent(null);
  }, [sliderRange]);

  // When target value changes, auto-set equity to MIN_EQUITY_RATIO * property if equity is empty or less than min
  useEffect(() => {
    if (targetValueNum > 0) {
      const minEquity = Math.round(targetValueNum * MIN_EQUITY_RATIO);
      // only auto-set if user hasn't typed equity or current equity is less than min
      if (!equity || equityNum < minEquity) {
        setEquity(String(minEquity));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValueNum]); // intentionally only when target changes

  // Validate equity input on change to ensure between min and targetValue
  function onEquityChange(value: string) {
    const cleaned = value.replace(/[^0-9.]/g, "");
    const v = Number(cleaned || 0);
    const min = Math.round(targetValueNum * MIN_EQUITY_RATIO);
    if (targetValueNum > 0 && v < min && v !== 0) {
      // don't allow smaller than min - clamp
      setEquity(String(min));
      return;
    }
    if (targetValueNum > 0 && v > targetValueNum) {
      setEquity(String(targetValueNum));
      return;
    }
    setEquity(cleaned);
  }

  // Visible monthly deduction amount (based on slider percent or null)
  const monthlyDeduction = useMemo(() => {
    if (!deductionPercent || monthlyIncomeNum <= 0) return 0;
    return Math.round(monthlyIncomeNum * deductionPercent);
  }, [deductionPercent, monthlyIncomeNum]);

  // Form valid: salary>0, target>0, program selected, equity >= 30% and <=target, age between MIN_AGE and MAX_AGE, deduction chosen
  const isFormValid =
    monthlyIncomeNum > 0 &&
    targetValueNum > 0 &&
    !!programObj &&
    equityNum >= Math.round(targetValueNum * MIN_EQUITY_RATIO) &&
    equityNum <= targetValueNum &&
    ageNum >= MIN_AGE &&
    ageNum < MAX_AGE &&
    deductionPercent !== null &&
    monthlyDeduction > 0 && 
    period;

  // Calculation logic (returns null if invalid)
  const calculation = useMemo(() => {
    if (!isFormValid || !programObj) return null;

    // Equity chosen by user = initial deposit
    const initialDeposit = Math.round(equityNum);

    // balance to finance
    const balance = Math.round(targetValueNum - initialDeposit);
    if (balance <= 0) {
      // fully covered by equity
      return {
        programLabel: programObj.label,
        initialDeposit,
        interestRatePercent: INTEREST_RATE * 100,
        monthlyPayment: monthlyDeduction,
        monthsRequired: 0,
        paymentDurationFormatted: "Paid from equity",
        totalPayable: initialDeposit,
      };
    }

    const A = balance;
    const m = monthlyDeduction; // monthly payment from salary deduction
    const r = INTEREST_RATE;

    // Check if deduction is >= program minimum (percentage check)
    const minAllowed = Math.round(monthlyIncomeNum * programObj.minPercent);
    const maxAllowed = Math.round(monthlyIncomeNum * programObj.maxPercent);
    if (m < minAllowed) {
      // Not allowed — user must pick at least min percent
      return { error: `Monthly deduction must be at least ${formatCurrency(minAllowed)} (${programObj.minPercent * 100}%)` };
    }
    if (m > maxAllowed) {
      // clamp? We'll allow but warn; however slider won't allow above max
    }

    // Solve for months using the algebraic formula:
    // months = (A/m) / (1 - (A * r) / (12 * m))
    // denominator must be > 0 to have finite months
    const denom = 1 - (A * r) / (12 * m);

    if (denom <= 0) {
      // impossible to repay with given monthly payment (interest >= payment growth)
      return { error: "Monthly deduction too small to ever repay the loan within a reasonable time. Increase monthly contribution." };
    }

    const monthsExact = (A / m) / denom;
    const monthsRequired = Math.ceil(monthsExact);
    const years = Math.floor(monthsRequired / 12);
    const monthsRemainder = monthsRequired % 12;

    const paymentDurationFormatted =
      monthsRequired === 0
        ? "Paid from equity"
        : monthsRequired < 12
        ? `${monthsRequired} month${monthsRequired > 1 ? "s" : ""}`
        : `${years} year${years > 1 ? "s" : ""}${monthsRemainder > 0 ? `, ${monthsRemainder} month${monthsRemainder > 1 ? "s" : ""}` : ""}`;

    // total interest paid over the period = A * r * (monthsRequired/12)
    const totalInterest = A * r * (monthsRequired / 12);
    const totalPayable = Math.round(initialDeposit + A + totalInterest);

    return {
      programLabel: programObj.label,
      initialDeposit,
      interestRatePercent: r * 100,
      monthlyPayment: m,
      monthsRequired,
      paymentDurationFormatted,
      totalInterest: Math.round(totalInterest),
      totalPayable,
      balance,
      minAllowed,
      maxAllowed,
    };
  }, [isFormValid, programObj, equityNum, targetValueNum, monthlyDeduction, monthlyIncomeNum]);

  // Check qualification against age-based max years
  const qualification: QualificationResult = useMemo(() => {
    if (!calculation || "error" in calculation) return { qualified: false, reason: "" };
    const maxYears = MAX_AGE - ageNum; // years allowed
    if (maxYears <= 0) {
      return { qualified: false, reason: "You must be younger than 60 to qualify." };
    }
    const maxMonthsAllowed = maxYears * 12;

    // monthsRequired may be undefined on some calculation shapes; guard before comparing
    // const monthsRequired = typeof (calculation as any).monthsRequired === "number" ? (calculation as any).monthsRequired : undefined;
    const monthsRequired = typeof calculation?.monthsRequired === "number" ? calculation?.monthsRequired : undefined;

    if (monthsRequired === 0) return { qualified: true };
    if (typeof monthsRequired === "number" && monthsRequired > maxMonthsAllowed) {
      return {
        qualified: false,
        reason: `Required repayment duration (${calculation.paymentDurationFormatted}) exceeds your allowed maximum of ${maxYears} years (${maxMonthsAllowed} months). Increase monthly deduction.`,
        maxMonthsAllowed,
      };
    }
    return { qualified: true };
  }, [calculation, ageNum]);

  // handle calculate click
  function handleCalculate(e?: React.FormEvent) {
    e?.preventDefault();
    console.log("isFormValid", isFormValid);
    console.log("calculation", calculation);
    if (!isFormValid || !calculation) return;
    // if ((calculation as any).error) {
    //   setAlertMessage((calculation as any).error);
    //   return;
    // }
    if (("error" in calculation)) {
      setAlertMessage(calculation.error ?? "An error occurred");
      return;
    }
    if (!qualification.qualified) {
      setDisqualOpen(true);
      return;
    }
    setResultOpen(true);
    console.log("calculation", calculation);
  }

  // slider value change handler (slider will provide absolute Naira value)
  function onSliderChange(value: number) {
    if (!sliderRange) return;
    // set deduction percent as fraction of salary
    const frac = value / monthlyIncomeNum;
    setDeductionPercent(frac);
  }

  // internal helper to get slider position (percent of salary)
  const sliderValue = useMemo(() => {
    if (!sliderRange || deductionPercent === null) return sliderRange?.min ?? 0;
    return Math.round(monthlyIncomeNum * deductionPercent);
  }, [sliderRange, deductionPercent, monthlyIncomeNum]);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <img src={calculatorImage} alt="calculator" className="w-56 md:w-72 mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600">Housing Contribution Calculator</h2>
        <p className="text-muted-foreground mt-2">Calculate your contributions</p>
      </div>

      <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Monthly Income */}
        <div>
          <Label className="text-sm text-emerald-600">Monthly Income (₦)</Label>
          <Input
            placeholder="Enter monthly income"
            value={monthlyIncome}
            onChange={(e) => {
              setMonthlyIncome(e.target.value);
              // reset slider percent when salary changes
              setDeductionPercent(null);
            }}
            inputMode="numeric"
            className="mt-2"
          />
        </div>

        {/* Target Property Value */}
        <div>
          <Label className="text-sm text-emerald-600">Target Property Value (₦)</Label>
          <Input
            placeholder="Desired property value"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            inputMode="numeric"
            className="mt-2"
          />
        </div>

        {/* Equity */}
        <div>
          <Label className="text-sm text-emerald-600">Equity (₦)</Label>
          <Input
            placeholder={targetValueNum > 0 ? `Min ${formatCurrency(Math.round(targetValueNum * MIN_EQUITY_RATIO))}` : "Enter equity amount"}
            value={equity}
            onChange={(e) => onEquityChange(e.target.value)}
            inputMode="numeric"
            className="mt-2"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Minimum {Math.round(MIN_EQUITY_RATIO * 100)}% of property value. You can increase equity to reduce repayment duration.
          </p>
        </div>

        {/* Age */}
        <div>
          <Label className="text-sm text-emerald-600">Age (Years)</Label>
          <Input
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            inputMode="numeric"
            className="mt-2"
          />
          <p className="text-xs text-muted-foreground mt-1">Max repayment age is {MAX_AGE} years.</p>
        </div>

        {/* Program */}
        <div>
          <Label className="text-sm text-emerald-600">Program</Label>
          <Select
            value={programId}
            onValueChange={(v) => {
              setProgramId(v as ProgramDef["id"]);
              // reset slider percent when program changes
              setDeductionPercent(null);
            }}
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select Program" />
            </SelectTrigger>
            <SelectContent>
              {PROGRAMS.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Savings period (not used in main calc but required field) */}
        <div>
          <Label className="text-sm text-emerald-600">Savings Period</Label>
          <Select
            value={period}
            onValueChange={(v) => {
              /* not used in advanced calc, but kept for UI completeness */
              setPeriod(v);
            }}
            defaultValue={undefined}
          >
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Select period (min 6 months)" />
            </SelectTrigger>
            <SelectContent>
              {SAVING_PERIODS.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Slider area across both columns */}
        <div className="md:col-span-2">
          <Label className="text-sm text-emerald-600">Monthly Deduction (From Salary)</Label>

          {/* Disabled state hint */}
          {!sliderEnabled && (
            <p className="text-xs text-muted-foreground mt-1">
              Enter salary and choose a program to enable deduction range (NHS: 2.5%–30%, MRIF: 9.5%–30%).
            </p>
          )}

          {/* Slider */}
          <div className={`mt-3 p-3 rounded-lg border ${sliderEnabled ? "border-emerald-100" : "border-gray-100"} bg-white`}>
            {sliderRange ? (
              <>
                <div className="flex items-center justify-between mb-2 gap-0 sm:gap-4">
                  <div className="text-xs text-muted-foreground w-1/2 flex flex-col flex-wrap">
                    Range: {formatCurrency(sliderRange.min)} — {formatCurrency(sliderRange.max)} ({(sliderRange.minPercent * 100).toFixed(2)}% —{" "}
                    {(sliderRange.maxPercent * 100).toFixed(0)}% of salary)
                  </div>
                  <div className="text-sm font-semibold text-emerald-600 w-1/2 sm:w-fit">
                    Selected: {formatCurrency(sliderValue)} ({((sliderValue / Math.max(1, monthlyIncomeNum)) * 100).toFixed(2)}%)
                  </div>
                </div>

                <input
                  type="range"
                  min={sliderRange.min}
                  max={sliderRange.max}
                  step={Math.max(1, Math.round((sliderRange.max - sliderRange.min) / 100))}
                  value={sliderValue}
                  disabled={!sliderEnabled}
                  onChange={(e) => onSliderChange(Number(e.target.value))}
                  className="w-full appearance-none h-2 bg-emerald-100 rounded-lg accent-emerald-600"
                />
                {/* quick percent buttons */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {[sliderRange.minPercent, programObj?.id === "nhs" ? 0.05 : 0.1, 0.15, sliderRange.maxPercent].map((pct) => {
                    const val = Math.round(monthlyIncomeNum * pct);
                    return (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => {
                          setDeductionPercent(pct);
                        }}
                        disabled={!sliderEnabled}
                        className="text-xs px-2 py-1 rounded-md border border-emerald-200 hover:bg-emerald-50"
                      >
                        {Math.round(pct * 100 * 100) / 100}% — {formatCurrency(val)}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-xs text-muted-foreground">Salary & program required to enable range</div>
            )}
          </div>
        </div>

        {/* Calculate button */}
        <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
          <Button
            type="submit"
            className="w-full md:w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2"
            disabled={!isFormValid}
            onClick={handleCalculate}
          >
            <Check className="w-4 h-4" />
            Calculate
          </Button>
        </div>
      </form>

      {/* Disqualification Modal */}
      <Dialog open={disqualOpen} onOpenChange={setDisqualOpen}>
        <DialogContent className="sm:max-w-2xl max-w-lg rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-emerald-600 text-lg">Not Qualified — Increase Contribution</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Based on your inputs, repayment duration exceeds the allowed maximum. Increase your monthly deduction to repay within your allowed years.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 text-sm text-gray-700">
            {!calculation ? (
              <p>Invalid calculation. Please adjust inputs.</p>
            ) : (
              <>
                <p>
                  Required Duration: <strong>{calculation.paymentDurationFormatted}</strong>
                </p>
                <p>
                  Your allowed maximum (until age {MAX_AGE}): <strong>{MAX_AGE - ageNum} years</strong>
                </p>
                <p className="mt-3">
                  Suggested minimum monthly deduction to qualify:{" "}
                  <strong>
                    {(() => {
                      // compute minimum m such that monthsRequired <= maxMonthsAllowed
                      const A = typeof calculation.balance === "number" ? calculation.balance : 0;
                      if (!A || A <= 0) {
                        return "Increase more";
                      }
                      const r = INTEREST_RATE;
                      const maxMonthsAllowed = Math.max(0, (MAX_AGE - ageNum) * 12);
                      // Solve for m numerically:
                      // months = (A/m) / (1 - (A*r)/(12*m)) <= maxMonthsAllowed
                      // We'll find m by simple iteration starting from current monthlyDeduction + 1
                      const start = Math.max(1, monthlyDeduction || 1);
                      let found: number | null = null;
                      const step = Math.max(1, Math.round(A / 200));
                      for (let tryM = start; tryM <= A; tryM += step) {
                        const denom = 1 - (A * r) / (12 * tryM);
                        if (denom <= 0) continue;
                        const months = Math.ceil((A / tryM) / denom);
                        if (months <= maxMonthsAllowed) {
                          found = tryM;
                          break;
                        }
                      }
                      return found ? formatCurrency(found) : "Increase more";
                    })()}
                  </strong>
                </p>
              </>
            )}
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setDisqualOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setDisqualOpen(false)}>Ok</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Result Modal */}
      <Dialog open={resultOpen} onOpenChange={setResultOpen}>   
         <DialogContent className=" sm:max-w-3xl max-w-xl rounded-2xl p-6">
            <DialogClose asChild>
                  <Button
                   //   data-dialog-close
                  //   onClick={() => setOpen(false)}
                     className="absolute right-2 top-2 w-8 h-8 bg-emerald-600 z-10 text-white rounded-full p-2 hover:bg-emerald-700 transition-transform hover:scale-105"
                  >
                      ✕
                  </Button>
            </DialogClose>

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-emerald-600 text-center">
              Housing Contributions
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground text-center">
              Review your calculated contributions
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center justify-center">
              <img src={modalImage} alt="result" className="w-44 md:w-56" />
            </div>

            <div className="space-y-3 text-left">
               {calculation ? (
                <>
                  <div className="flex items-center"> 
                    <p className="text-sm text-gray-600 w-1/2">Program name:</p>
                    <p className="font-semibold text-emerald-600">{calculation.programLabel?.split("(")[0] ?? ""}</p>
                   </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Initial Deposit (Equity):</p>
                    <p className="font-semibold text-emerald-600">{formatCurrency(calculation.initialDeposit)}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Interest rate (annual):</p>
                    <p className="font-semibold text-emerald-600">{calculation.interestRatePercent}%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Monthly payment:</p>
                    <p className="font-semibold text-emerald-600">{formatCurrency(calculation.monthlyPayment)}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Payment Duration:</p>
                    <p className="font-semibold text-emerald-600">{calculation.paymentDurationFormatted}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Total Interest (estimated):</p>
                    <p className="font-semibold text-emerald-600">{formatCurrency(calculation.totalInterest)}</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 w-1/2">Total Payable:</p>
                    <p className="font-semibold text-emerald-600">{formatCurrency(calculation.totalPayable)}</p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">No calculation available—please fill the form.</p>
              )}
            </div>
          </div>

           <DialogFooter className="mt-6 flex justify-center items-center">
            <div className="text-sm text-muted-foreground text-center">Note: This is just a rough estimate contact us for more detailed analysis.</div>
            <div className="flex gap-2">
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {alertMessage && (
  <Alert className="absolute top-2/3 right-4 bg-red-50 border-red-200 text-red-800 rounded-xl w-fit mx-auto">
    <Info className="h-5 w-5 text-red-400 bg-red-50" />
    <AlertTitle >Notice</AlertTitle>
    <AlertDescription>{alertMessage}</AlertDescription>
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-2 right-2 text-red-600 hover:bg-red-100"
      onClick={() => setAlertMessage(null)}
    >
      ✕
    </Button>
  </Alert>
)}

    </section>
  );
}
