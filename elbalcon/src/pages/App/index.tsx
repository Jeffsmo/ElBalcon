import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from "../Home"
import Costs from '../Costs'
import Balance from '../Balance'
import Profits from '../Profits'
import Navbar from '../../components/Navbar'
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {  path: '/', element: <Home />},
    { path: '/balance', element: <Balance/>},
    { path:'/profits', element: <Profits/>},
    { path: '/costs', element:<Costs/> }

  ]);

  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
