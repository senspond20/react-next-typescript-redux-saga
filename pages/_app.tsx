import React, {FC} from 'react';
import {AppProps} from 'next/app';
// import {wrapper} from '../src/stores';
import NextSeo from '@components/Seo';
import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

// import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import counterApp from '@reducers/count';

const store = createStore(counterApp);

import { INCREMENT, DECREMENT,RESET, SET_DIFF } from '@action/count'; 
// import { AnyAction, combineReducers } from 'redux'; 

const counterInitialState = { value: 0, diff: 1 }; 
const counter = (state = counterInitialState, action : AnyAction) => { 
    switch(action.type) { 
        case INCREMENT: 
            return Object.assign({}, state, { 
                value: state.value + state.diff 
            }); 
        case DECREMENT: 
            return Object.assign({}, state, { 
                value: state.value - state.diff 
            }); 
        case RESET : 
            return Object.assign({}, state, { 
                value: 0
            }); 
        case SET_DIFF: 
            return Object.assign({}, state, {
                 diff: action.diff 
            }); 
        default: return state; 
    } } 
 // create a makeStore function
const makeStore = (context: Context) => createStore(counter);

// export an assembled wrapper
export const wrapper = createWrapper<{}>(makeStore, {debug: true});
   
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    // <Provider store={store}> 
    <>
        <NextSeo/>
        <Component {...pageProps} />
    {/* // </Provider> */}
    </>
);

export default wrapper.withRedux(WrappedApp);