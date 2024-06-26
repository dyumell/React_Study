import React from 'react';
import logo from './logo.svg';
import './App.css';
import './HeaderContent'
import HeaderContent from "./HeaderContent";


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
        <HeaderContent/>
      </div>
  );
}
export default App;
