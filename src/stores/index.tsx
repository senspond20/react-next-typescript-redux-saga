import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

// export interface State {
//     tick: string;
// }
export interface State {
    server: any;
    client: any;
}
// create your reducer
const reducer =(state: State, action: AnyAction)  => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.server
                }
            }
        case 'SERVER_ACTION':
            return {
                ...state,
                server: {
                    ...state.server,
                    tick: action.payload
                }
            };
        case 'CLIENT_ACTION':
            return {
                ...state,
                client: {
                    ...state.client,
                    tick: action.payload
                }
            };
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});