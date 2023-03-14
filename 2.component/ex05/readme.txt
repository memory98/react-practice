ex05 : Component - Lifecycle

01. Class Component
    01) Lifecycle I : Mount
        - 1. constructor
        - 2. getDerivedStateFromProps
        - 3. render ***
        - 4. componentDidMount ***
    02) Lifecycle II : update
        - 1. getDerivedStateFromProps
        - 2. shouldComponentUpdate **

    03) Lifecycle III : Unmout

02. Functional Compoenent : Alternative(대체) - useEffect

================================================
1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
        $ npm i react react-dom prop-types styled-components react-addons-update

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
    $ npm run debug src=(01|02|03|04)