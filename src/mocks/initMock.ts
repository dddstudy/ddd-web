const initMocks = async () => {
  if (typeof window !== "undefined") {
    const { worker } = await import("@/mocks/browser");

    worker.start({ onUnhandledRequest: "bypass" });
  }
};

export default initMocks;
