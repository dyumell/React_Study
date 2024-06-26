import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.tsx 는 프로젝트의 진입점이다.

const root = ReactDOM.createRoot(
    // DOM 객체가 만들어진 후 클라이언트 랜더링을 할 수 있다.
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*  Strict Mode : 개발단계에서 좀 더 엄격하게 문법을 판단하게 하는데, 배포 단계에서도 약간 그러한 경향이 있음으로 없에는걸 권장 */}
    <App />
  {/*    App 을 사용하기위해 태그로 불러온 것. 이러한 커스텀 태그 떄문에 tsX 이다 */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
