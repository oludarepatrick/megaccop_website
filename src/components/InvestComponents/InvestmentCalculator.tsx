import React, { useMemo, useState, type JSX } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  
} from "@/components/ui/dialog";
import calculatorImage from "@/assets/housingCalculator-image.png";
import modalImage from "@/assets/house-contribution-modal-image.png";

type Program = {
  id: string;
  label: string;
  percent: number; // fraction (e.g. 0.025)
};

const PROGRAMS: Program[] = [
  { id: "nhs", label: "NHS (National Housing Scheme) - 2.5%", percent: 0.025 },
  { id: "shs", label: "SHS (State Housing Scheme) - 5%", percent: 0.05 },
];

const SAVING_PERIODS = [
  "6 months",
  "9 months",
  "12 months",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
];

function formatCurrency(n: number) {
  if (Number.isNaN(n) || !isFinite(n)) return "₦0";
  // simple formatting for Naira
  return "₦" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });
}

export default function HousingContributionCalculator(): JSX.Element {
  // form state
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [targetValue, setTargetValue] = useState<string>("");
  const [program, setProgram] = useState<string | undefined>(undefined);
  const [period, setPeriod] = useState<string | undefined>(undefined);

  // dialog open state
  const [open, setOpen] = useState(false);

  // derived valid flags
  const monthlyIncomeNum = Number(monthlyIncome.replace(/[^0-9.-]/g, ""));
  const targetValueNum = Number(targetValue.replace(/[^0-9.-]/g, ""));
  const programObj = PROGRAMS.find((p) => p.id === program);

  const isFormValid =
    !Number.isNaN(monthlyIncomeNum) &&
    monthlyIncomeNum > 0 &&
    !Number.isNaN(targetValueNum) &&
    targetValueNum > 0 &&
    !!programObj &&
    !!period;

  // calculation memo (recomputed when inputs change)
  const calculation = useMemo(() => {
    if (!isFormValid || !programObj) return null;

    const initialDeposit = Math.round(targetValueNum * 0.3); // 30% deposit
    const balance = Math.round(targetValueNum - initialDeposit); // remaining
    const interest = Math.round(balance * 0.1); // 10% interest on balance
    const balanceWithInterest = balance + interest; // amount to be collected via contributions

    // monthly payment from salary based on selected program percentage
    const monthlyPayment = Math.max(1, Math.floor(monthlyIncomeNum * programObj.percent));

    // months required to clear balanceWithInterest using monthlyPayment
    const monthsRequired = Math.ceil(balanceWithInterest / monthlyPayment);

    // convert months to years + months if needed
    const years = Math.floor(monthsRequired / 12);
    const monthsRemainder = monthsRequired % 12;

    const paymentDurationFormatted =
      monthsRequired <= 12
        ? `${monthsRequired} month${monthsRequired > 1 ? "s" : ""}`
        : `${years} year${years > 1 ? "s" : ""}${monthsRemainder > 0 ? `, ${monthsRemainder} month${monthsRemainder > 1 ? "s" : ""}` : ""}`;

    const totalPayable = Math.round(initialDeposit + balanceWithInterest); // deposit + balance+interest

    return {
      initialDeposit,
      balance,
      interest,
      balanceWithInterest,
      monthlyPayment,
      monthsRequired,
      paymentDurationFormatted,
      totalPayable,
      programLabel: programObj.label,
    };
  }, [monthlyIncomeNum, targetValueNum, isFormValid, programObj]);

  function onCalculate(e?: React.FormEvent) {
    e?.preventDefault();
    if (!isFormValid) return;
    setOpen(true);
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Top illustration and title */}
      <div className="flex flex-col items-center text-center mb-8">
        {/* <img
          src="/images/housing-illustration-top.png" // replace with your figma export path
          alt="Housing Illustration"
          className="w-48 h-auto mb-4"
        /> */}
        <div className="flex-1 flex justify-center p-0 pt-5">
                        <img
                            src={calculatorImage}
                            alt="Pooled Investment Illustration"
                            className="w-64 md:w-full  bg-center object-cover p-0 m-0"
                        />
                    </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600">Housing Contribution Calculator</h2>
        <p className="text-muted-foreground mt-2">Calculate Your Contributions</p>
      </div>

      <form onSubmit={onCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
        {/* Monthly Income */}
        <div>
          <Label className="text-sm text-green-600 ">Monthly Income (₦)</Label>
          <Input
            placeholder="Enter monthly income"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            inputMode="numeric"
            className="mt-2"
          />
        </div>

        {/* Target Property Value */}
        <div>
          <Label className="text-sm text-green-600">Target Property Value (₦)</Label>
          <Input
            placeholder="Desired property value"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            inputMode="numeric"
            className="mt-2"
          />
        </div>

        {/* Program Select */}
        <div>
          <Label className="text-sm text-green-600 mb-2">Program</Label>
          <Select onValueChange={(v) => setProgram(v)} value={program} defaultValue={undefined}>
            <SelectTrigger className="w-full">
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

        {/* Savings Period Select */}
        <div>
          <Label className="text-sm text-green-600 mb-2">Savings Period (Months)</Label>
          <Select onValueChange={(v) => setPeriod(v)} value={period} defaultValue={undefined}>
            <SelectTrigger className="w-full">
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

        {/* Empty slot to align button full width on the right */}
        <div className="md:ml-6 md:col-span-2 flex justify-center md:justify-end">
          <Button
            type="submit"
            className="w-full md:w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white "
            disabled={!isFormValid}
          >
            <Check className="mr-2 h-4 w-4" />
            Calculate
          </Button>
        </div>
      </form>

      {/* Result Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-w-xl rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-emerald-600">Housing Contributions</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Review your calculated contributions
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left image */}
            <div className="flex items-center justify-center">
              <img
                src={modalImage} 
                alt="Result Illustration"
                className="w-46 md:w-86 h-auto"
              />
            </div>

            {/* Right content */}
            <div className="space-y-3 text-left">
              {calculation ? (
                <>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Program name:</p>
                    <p className="font-semibold text-emerald-600">{calculation.programLabel.split(" - ")[0]}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Initial Deposit:</p>
                    <p className="font-semibold">{formatCurrency(calculation.initialDeposit)}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Interest rate:</p>
                    <p className="font-semibold">10%</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Monthly payment:</p>
                    <p className="font-semibold">{formatCurrency(calculation.monthlyPayment)}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Payment Duration:</p>
                    <p className="font-semibold">{calculation.paymentDurationFormatted}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Total Payable:</p>
                    <p className="font-semibold">{formatCurrency(calculation.totalPayable)}</p>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">No calculation available—please fill the form and calculate.</p>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">You can copy or save this plan.</div>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button
                onClick={() => {
                  // future: export or save
                  setOpen(false);
                }}
              >
                Confirm
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
