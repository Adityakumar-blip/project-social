  
 
 
 

 
import './App.css';
 import Work from './components/our-work/work';
 import './components/our-work/work.css';
 import Footer from './components/Footer';
 import Navbar from './components/Navbar';
 import Influencer from './components/Influencer/influencer.jsx';
 import Brands from './components/Brands/brands.jsx';
 import Tools from './components/Tools/tools.jsx';
 import Home from './components/Home/home.jsx';
 import TestimonialProfile from './components/Testimonial-profile';
 import ContactUs from './components/contactUs';
 import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';
import LetsTalk from './components/LetsTalk';
function App() {  
  return (
    <>

   
    <Router>
         <Navbar/>
             <Routes>
             <Route path='/' exact element={<Home/>}/>
             <Route path='/ourwork' element={<Work/>}/>
             <Route path='/contactus' element={<ContactUs/>}/>
             <Route path='/influencer' element={<Influencer/>}/>
             <Route path='/brands' element={<Brands/>}/>
             <Route path='/tools' element={<Tools/>}/>
             <Route path='/ourwork/testimonial' element={<TestimonialProfile/>}/>
             </Routes>
             
        <LetsTalk/>
        <Footer/>
    
        </Router>
    
    </>
  );
}

export default App;
