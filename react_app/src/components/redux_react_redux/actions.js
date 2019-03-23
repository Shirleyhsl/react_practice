import { INCREMENT, DECREMENT } from "./action-types";

/**
 * 包含所有的action creator
 */
export const incrementCreator = (number)=>({type:INCREMENT,data:number});
export const decrementCreator = (number)=>({type:DECREMENT,data:number});