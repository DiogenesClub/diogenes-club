import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
  Navigate
} from "react-router-dom";
import About from './pages/about';
import Home from './pages/home';
import { Navbar } from './components/navbar';
import Publications from './pages/publication';
import Academy from './pages/academy';
import DevBlog from './pages/dev-blog';
import Events from './pages/event';

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/publications", element: <Publications/>},
    {path: "/academy", element:<Academy/>},
    {path: "/devblog", element: <DevBlog/>},
    {path: "/events", element:<Events/>},
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
