export interface HttpError {
  query?: string;
  parameters?: string[];
  driverError?: HttpError;
  length: number;
  severity: string;
  code: string;
  detail: string;
  schema: string;
  table: string;
  constraint: string;
  file: string;
  line: string;
  routine: string;
  name?: string;
}
