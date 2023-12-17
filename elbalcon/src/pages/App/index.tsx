import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from "../Home"
import Costs from '../Costs'
import Balance from '../Balance';
import Profits from '../Profits';
import Navbar from '../../components/Navbar';
import Sales from '../Sales';
import Menu from '../Menu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {  path: '/', element: <Home />},
    { path: '/balance', element: <Balance/>},
    { path:'/profits', element: <Profits/>},
    { path: '/costs', element:<Costs/> },
    { path:'./sales', element:<Sales/>},
    { path: '/menu', element:<Menu/>}

  ]);

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>

    </BrowserRouter>
  );
}

export default App;
