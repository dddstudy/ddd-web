import { setupWorker } from "msw/browser";
import mockHandlers from "@/mocks/handler";

export const worker = setupWorker(...mockHandlers);
