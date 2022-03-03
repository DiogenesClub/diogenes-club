import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
  Navigate
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import { Navbar } from './components/navbar';

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path:"*", element: <Navigate to="/"/>}
  ]);
  return routes;
};

function App() {
  return (
    <Router>
        <Navbar/>
          <Routes/>
    </Router>
  );
}

export default App;
