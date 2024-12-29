export interface APIResponse<Data> {
  code: number;
  message: string;
  data: Data;
}
