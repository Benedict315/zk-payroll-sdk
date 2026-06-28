/**
 * ZK Payroll SDK — Main entry point.
 *
 * Architecture layers:
 *   api/      — Public-facing classes and interfaces
 *   core/     — Business logic (ZK proofs, payroll, caching)
 *   adapters/ — Low-level blockchain/Soroban wrappers
 */

// ── API Layer ───────────────────────────────────────────────────────────────
export * from "./api";

// ── Core Layer ──────────────────────────────────────────────────────────────
export * from "./core";

// ── Backward-compat error aliases (not in the core layer) ───────────────────
export { PayrollError, PayrollServiceErrorCode, handleApiError } from "./errors";

// ── Adapters Layer ──────────────────────────────────────────────────────────
export * from "./adapters";

// ── Logging ─────────────────────────────────────────────────────────────────
export * from "./logging";

// ── Batch Utilities ─────────────────────────────────────────────────────────
export * from "./batch";

// ── Testing Utilities ───────────────────────────────────────────────────────
export * from "./testing";

// ── Events ──────────────────────────────────────────────────────────────────
export { TransactionWatcher } from "./events";
export type { ConfirmationOptions, ConfirmationResult } from "./events";

// ── Event Stream Parser ──────────────────────────────────────────────────────
export {
  parseContractEvent,
  parseContractEvents,
  EventParsingError,
} from "./event-parser";
export type {
  RawContractEvent,
  TypedContractEvent,
  RegisteredEvent,
  RegistryUpdatedEvent,
  RegistryDeactivatedEvent,
  CommittedEvent,
  SalaryRevealedEvent,
  PaymentExecutedEvent,
  PaymentScheduledEvent,
  PaymentCancelledEvent,
} from "./event-parser";

// ── Typed Contract Clients ───────────────────────────────────────────────────
export * from "./clients";

// ── Contract Metadata ────────────────────────────────────────────────────────
export * from "./metadata";
