import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './components/main-nav';
import useDarkMode from "./components/mode-switch.js";
import { Toggle } from "./components/ui/toggle";
import Dashboard from './pages/dashboard/page';
import Orders from './pages/orders/page';
import Products from './pages/products/page';

function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
       <div className='flex-col md:flex'>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {colorTheme === "light" ? (
                <Toggle onClick={() => setTheme("light")}><MoonIcon /></Toggle>
              ) : (
                <Toggle onClick={() => setTheme("dark")}><SunIcon /></Toggle>
              )}
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          {/* ... add more routes for Orders, Products, etc. */}
        </Routes>
     </BrowserRouter>
    </>
    
  );
}

export default App;
