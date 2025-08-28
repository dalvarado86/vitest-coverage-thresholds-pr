export function add(a: number, b: number): number {
    return a + b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export function sumArray(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}