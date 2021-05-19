## Redux 란?
>가장 사용률이 높은 상태관리 라이브러리이다. 컴포넌트들의 상태 관련 로직들을 다른 파일로 분리시켜서 효율적으로 관리할 수 있고, 컴포넌트끼리 상태를 공유할 때 여러 컴포넌트를 거치지 않고도 손쉽게 상태 값을 전달 할 수 있게 해준다.

```
npm install redux react-redux
```

그외 Next에서 react를 연결하기 위해서는 next-redux-wrapper가 필요하다

```
npm install next-redux-wrapper
```

edux를 사용할 때 유용한 redux devtools를 사용하기 위해 redux-devtools-extension을 설치해준다.

```
npm install -D redux-devtools-extension
```

예전방식으로 설정을 하면 컴파일 오류가 난다.
> You are using legacy implementaion. Please update your code: use createWrapper() and wrapper.withRedux().

+ _app.tsx

```js
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../src/stores';
import NextSeo from '@components/Seo';

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <NextSeo/>
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(WrappedApp);
```

+ stores/index.ts

```js

import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export interface State {
    tick: string;
}

// create your reducer
const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case 'TICK':
            return {...state, tick: action.payload};
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});
```
ref : https://github.com/kirill-konshin/next-redux-wrapper
ref : https://jktech.tistory.com/47
// https://simsimjae.medium.com/next-redux-wrapper%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0-5d0176209d14