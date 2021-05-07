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

+ npm i --dev typescript @types/react @types/node

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
    "@types/node": "^15.0.2",
    "@types/react": "^17.0.5",
    "next": "10.2.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "typescript": "^4.2.4"
  }
}
```

+ tsconfig.json 파일 생성

```
> vscode 재시작
> npm run dev
```

그러면 tsconfig.json이 기본설정으로 세팅된다.

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








