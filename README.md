# JavaScript Loose Equality (==) Pitfall with null and undefined

This repository demonstrates a common JavaScript error related to the loose equality operator (==) when dealing with null and undefined values.

## The Bug
The `foo` function intends to return 0 when the input `x` is null. However, it unexpectedly returns NaN when `x` is undefined due to how loose equality works.

## The Solution
The solution replaces the loose equality check (==) with a strict equality check (===) to correctly handle null and undefined separately.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it in your JavaScript environment (e.g., Node.js, browser's console).
3. Observe the unexpected NaN result when calling foo(undefined). 
4. Open `bugSolution.js` to see the corrected version.

## Key Learning
Always use strict equality (===) when checking for null or undefined to avoid unexpected behavior and improve code clarity and maintainability.