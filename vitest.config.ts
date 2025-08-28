import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        reporters: ['default'],
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "json-summary", "html"],
            include: ['src/**'],
            exclude: [
                '**/types/**',
                '**/constants/**',
            ],
            thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80,
            },
        },
    },
});