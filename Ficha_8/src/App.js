import "./assets/styles/App.css";

import {
  Header,
  Footer,
  ControlPanel,
  GamePanel
} from "./components/";

function App() {
  return (
    <div id="container">
      <Header></Header>
      <ControlPanel></ControlPanel>
      <GamePanel></GamePanel>
      <Footer></Footer>
    </div>
  );
}
  
export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
