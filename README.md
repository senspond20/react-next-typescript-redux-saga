# React-Next-TypeScript-Redux-Sage 
+ 설정방법 정리

현재폴더에 next앱 
+ npm init next-app .

+ 2021/05/07 최신버전

```json
{
  "name": "react-next-typescript-redux-saga",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.2.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  }
}
```

+ npm i --dev typescript 
+ npm i --save-dev @types/react @types/node

```json
{
  "name": "react-next-typescript-redux-saga",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.2.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "typescript": "^4.2.4"
  },
  "devDependencies" :{
    "@types/node": "^15.0.2",
    "@types/react": "^17.0.5",
  }
}
```

+ tsconfig.json 파일 생성

```
> vscode 재시작
> npm run dev
```
그러면 next-env.d.ts와 tsconfig.json이 기본설정으로 세팅된다.

+ next-env.d.ts

```json
/// <reference types="next" />
/// <reference types="next/types/global" />
```
+ tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths":{
      "@public/*" : ["public/*"]
    }
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "**/*.ts",
    "**/*.tsx"
  ]
}
```


```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths":{
      "@public/*" : ["public/*"],
    }
}
```
```js
// import '../public/css/globals.css'
import '@public/css/globals.css'
```

폴더구조 변경
> (styles -> public/css )

> robots.txt 추가

> index.js -> index.ts
> _app.js -> _app.tsx

+ _app.js

```js
// import '../public/css/globals.css'
import '@public/css/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
````

+ _app.tsx

```js
import { AppProps } from 'next/app'
import '@public/css/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
```


```
npm i --sav-dev dotenv
```
+ .env 파일 생성

```
REACT_APP_SERVICE_VERSION=1.0.0
```

+ next.config.js
(webpack 설정을 여기서 할 수 있다)

```
require('dotenv').config();
module.exports = ({
    env: {
        VERSION : process.env.REACT_APP_SERVICE_VERSION,
    },
});
```


```
npm i --save-dev babel-plugin-styled-components
```

```js
{
    "presets": ["next/babel"],
    "plugins": ["babel-plugin-styled-components"]
}
```

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