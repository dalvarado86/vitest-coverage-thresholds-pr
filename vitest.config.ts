import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        reporters: ['default', 'github-actions'],
        coverage: {
            provider: "v8", // provider
            reporter: ["text", "json", "json-summary", "html"], // reportes
            reportOnFailure: true, // report coverage even if fails
            include: ['src/**'], 
            exclude: [
                '**/types/**',
                '**/constants/**',
            ],
            /*thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80,
            },*/
        },
    },
});