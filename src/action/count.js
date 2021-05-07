export const INCREMENT = 'INCREMENT'; 
export const DECREMENT = 'DECREMENT'; 
export const SET_DIFF = 'SET_DIFF'; 
export const RESET = 'RESET'; 
export function increment() { 
    return { type: INCREMENT }; 
} 

export function decrement() { 
    return { type: DECREMENT }; 
} 
export function reset() { 
    return { type: RESET }; 
} 
export function setDiff(value) {
     return { type: SET_DIFF, diff: value }; 
}

