import {
  ZkPayrollError,
  ContractExecutionError,
  ContractErrorCode,
} from "./errors";

/**
 * Backward compatibility class alias.
 * @deprecated Use `ZkPayrollError` instead.
 */
export class PayrollError extends ZkPayrollError {
  constructor(message: string, code: any, context: Record<string, any> = {}) {
    let sanitizedCode = code;
    if (typeof code === "number" && code < 2000) {
      sanitizedCode = String(code);
    }
    super(message, sanitizedCode, context);
    this.name = "PayrollError";
  }
}

// Error codes for PayrollService validation/orchestration failures
export const PayrollServiceErrorCode = {
  PROOF_GENERATION_FAILED: 2001,
  INVALID_RECIPIENT: 2002,
  INVALID_AMOUNT: 2003,
  INVALID_ASSET: 2004,
} as const;

export type PayrollServiceErrorCode =
  (typeof PayrollServiceErrorCode)[keyof typeof PayrollServiceErrorCode];

export function mapRpcError(error: any, context: Record<string, any> = {}): ContractExecutionError {
  if (error instanceof ContractExecutionError) return error;
  // ... (reuse from errors.ts or re-export)
}

/** @deprecated Use structured error logging instead. */
export function handleApiError(error: unknown): void {
  console.error("API Error:", error);
}