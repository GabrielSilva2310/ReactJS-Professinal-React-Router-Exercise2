
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody'
import Promotion from './routes/Home/Promotion';
import NotFound from './routes/Home/NotFound';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<Home/>}> 
         <Route index element={<HomeBody/>}/>
         <Route path='/promotion' element={<Promotion/>} />
         <Route path="*" element={<NotFound />} />
         </Route>
     </Routes>
    </BrowserRouter>
  )
}


