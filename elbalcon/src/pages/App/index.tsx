import { useRoutes, BrowserRouter } from 'react-router-dom';
import { MenuProvider} from '../../context';
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
    <MenuProvider>
      <BrowserRouter>
          <AppRoutes />
          <Navbar/>
      </BrowserRouter>
    </MenuProvider>

  );
}

export default App;
