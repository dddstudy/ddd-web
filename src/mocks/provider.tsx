"use client";

import initMocks from "@/mocks/initMock";
import { PropsWithChildren } from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMocks();
}

const MockProviders = ({ children }: PropsWithChildren) => {
  return children;
};

export default MockProviders;
