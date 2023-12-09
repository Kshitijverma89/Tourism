import './App.css';
import {BrowserRouter} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
