import { describe, it, expect } from "vitest";
import { add, divide, sumArray } from "../src/math";

describe("math", () => {
    describe("add", () => {
        it.each([
            [0, 0, 0],
            [1, 2, 3],
            [-1, 1, 0],
            [2.5, 0.5, 3.0],
        ])("add(%p, %p) -> %p", (a, b, expected) => {
            expect(add(a as number, b as number)).toBeCloseTo(expected as number);
        });
    });

    describe("divide", () => {
        it("divides positive numbers", () => {
            expect(divide(6, 3)).toBe(2);
        });

        it("supports decimals", () => {
            expect(divide(1, 4)).toBe(0.25);
        });

        // 👇 Comment this test to not cover the error branch (b === 0). 
        // You will see a gap in Branches.
        //it("throws when dividing by zero", () => {
         //   expect(() => divide(1, 0)).toThrow(/divide by zero/i);
        //});
    });

    describe("sumArray", () => {
        it("sums a non-empty array", () => {
            expect(sumArray([1, 2, 3, 4])).toBe(10);
        });

        // 👇 Comment this test to not cover the empty array branch. 
        // You will see a gap in Branches/Statements.
        //it("returns 0 for empty array", () => {
         //   expect(sumArray([])).toBe(0);
        //});
    });
});