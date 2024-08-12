/*
## Psuedo Simd

A later optimization may be to utilize WebAssembly to make this process more expedient (I am not sure how that would work server side.) For now I will simulate simd to increase readability.
*/

import { Point, Vector } from "./types";

/**
 * Adds the values of **a** to the values of **b**. The array returned will be the same length as **a**
 * @param { number[] } a  
 * @param { number[] } b 
 * @returns { number[] }
 */
export const add = <T extends number[]>(a: number[], b: number[]): T => a.map((v,i)=>v+(b[i] ?? 0)) as T;

/**
 * Subtracts the values of array **b** from the values of **a**. The array returned will be the same length as **a**.
 * @param { number[] } a 
 * @param { number[] } b 
 * @returns { number[] }
 */
export const subtract = <T extends number[]>(a: number[], b: number[]): T => a.map((v, i)=>v-(b[i] ?? 0)) as T;

/**
 * Multiplies the values of **a** by the values of **b**. The array returned will be the same length as **a**.
 * @param { number[] } a 
 * @param { number[] } b 
 * @returns { number[] }
 */
export const multiply = <T extends number[]>(a: number[], b: number[]): T => a.map((v,i)=>v*(b[i] ?? 1)) as T;

/**
 * Divides the values of **a** by the values of **b**. The array returned will be the same length as **a**.
 * @param { number[] } a 
 * @param { number[] } b 
 * @returns { number[] }
 */
export const divide = <T extends number[]>(a: number[], b: number[]): T => a.map((v,i)=>v/(b[i] ?? 1)) as T;

//Ray casting in 2d

export const ray = (
	radius: number, 
	angle: number, 
	[x, 
		y, 
		a=0
	]:Point | Vector = [0,0,0]
): Vector => [
	radius * Math.sin(a+angle) + x,
	radius * Math.cos(a+angle) + y,
	angle
];

export const getAngle = (a: Point | Vector, b: Point | Vector) => {
	const [x, y] = subtract(b, a);
	return Math.atan2(x, y); //inverting the coordinate system so it plays nice.
}

// Scalars

export const multiplyScalar = <T extends number[]>(a: number[], s: number): T => a.map(v=>v*s) as T;


