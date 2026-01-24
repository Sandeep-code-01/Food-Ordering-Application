// Ignore React Router Future Flag warnings in Jest tests
const originalWarn = console.warn;
beforeAll(() => {
  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("React Router Future Flag") ||
       args[0].includes("Relative route resolution within Splat routes"))
    ) {
      return; // Ignore these specific warnings
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
});
