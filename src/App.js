import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import "./styles/app.scss";

function App() {
  return (
    <MainScreen>
      <Routes></Routes>
    </MainScreen>
  );
}

export default App;
