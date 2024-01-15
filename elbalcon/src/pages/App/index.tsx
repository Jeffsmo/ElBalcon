import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import {  CostsProvider, MenuProvider, SalesProvider, CostsHistorialProvider,  RecordCostProvider, RecordSaleProvider, SalesHistorialProvider } from '../../context';
import Home from "../Home";
import Costs from '../Costs';
import BalanceCostHistory from '../Balance/BalanceCostHistory';
import BalanceSaleHistory from "../Balance/BalanceSaleHistory"
import Profits from '../Profits';
import Navbar from '../../components/Navbar';
import Sales from '../Sales';
import Menu from '../Menu';
import { AnimatePresence } from 'framer-motion';
import './App.css';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/balance-cost' element={<BalanceCostHistory />} />
        <Route path='/balance-sale' element={<BalanceSaleHistory />} />
        <Route path='/profits' element={<Profits />} />
        <Route path='/balance/costs' element={<Costs />} />
        <Route path='/balance/sales' element={<Sales />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <RecordCostProvider>
      <RecordSaleProvider>
      <SalesHistorialProvider>
      <CostsHistorialProvider>
        <MenuProvider>
            <SalesProvider>
              <CostsProvider>
                    <BrowserRouter>
                      <AppRoutes />
                      <Navbar />
                    </BrowserRouter>
                </CostsProvider>        
            </SalesProvider>      
          </MenuProvider>
      </CostsHistorialProvider>
      </SalesHistorialProvider>
      </RecordSaleProvider>
    </RecordCostProvider>
  );
}

export default App;
