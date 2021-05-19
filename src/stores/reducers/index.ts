import {combineReducers} from "redux";
import theme from "./theme";

// redux 에 새로고침만 해도 사라지는것을
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";
import {HYDRATE} from "next-redux-wrapper";

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["theme"]
};

const defaultReducer = (combineReducers({
    theme : theme
}));
// @ts-ignore
function rootReducer(state,action){
    switch (action.type){
        case HYDRATE:
            console.log("HYDRATE", action)
            return action.payload;
        default :{
            return defaultReducer(state,action)
        }
    }
}

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>
// export default rootReducer
export default persistReducer(persistConfig, rootReducer)

