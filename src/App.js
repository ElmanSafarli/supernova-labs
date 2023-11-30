import './App.css';
import Navigate from './components/navigate/Navigate';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navigate />
    </BrowserRouter>
  );
}

export default App;
