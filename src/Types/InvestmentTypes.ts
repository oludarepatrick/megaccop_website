export type ProgramDef = {
  id: "nhs" | "mrif";
  label: string;
  minPercent: number; // e.g. 0.025
  maxPercent: number; // e.g. 0.30
};


export type CalculationError = { error: string };
export type CalculationResult = {
  programLabel: string;
  initialDeposit: number;
  interestRatePercent: number;
  monthlyPayment: number;
  monthsRequired: number;
  paymentDurationFormatted: string;
  totalInterest: number;
  totalPayable: number;
  balance: number;
  minAllowed: number;
  maxAllowed: number;
};
export type ValidCalculation = CalculationResult | CalculationError;

export type QualificationResult = {
  qualified: boolean;
  reason?: string;
  maxMonthsAllowed?: number;
};