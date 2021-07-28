import Header from "./components/Header";
import Board from "./container/Board";
import Wrapper from "./components/Wrapper";
import columns from "./data";
import { loadFromStorage } from "./utility";
import "./App.css";

function App() {
  const cols = loadFromStorage("COLUMNS") || columns;

  // i choosed to not use context
  return (
    <Wrapper>
      <Header> Trello </Header>
      <Board cols={cols} />
    </Wrapper>
  );
}

export default App;
