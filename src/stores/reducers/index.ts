import { combineReducers } from "redux";
import counter from "./count";
import search from "./search";
import theme from "@stores/reducers/theme";
const rootReducer = combineReducers({
    counter: counter,
    search: search,
    theme : theme
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>