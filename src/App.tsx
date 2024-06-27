import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HeaderContent'
import HeaderContent from "./components/HeaderContent";
import MyComponent from "./components/MyComponent";
import ButtonStyled from "./components/ButtonStyled"; // 이거 IDE의 CodeLintr 가 태그만 넣어도 자동으로 임포트해줬다. 짱이다


// function App() { // 이 함수 객체가 React App 페이지를 채우고 있다.
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
      <div className="App">
          <MyComponent/>
          <ButtonStyled>일반 버튼</ButtonStyled>
          <ButtonStyled primary>primary</ButtonStyled>
        {/*<HeaderContent/>*/}
      </div>
  );
}
export default App;
