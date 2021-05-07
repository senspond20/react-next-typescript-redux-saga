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

> index.js -> index.tsx
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