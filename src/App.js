import './App.css';
import HomePage from './Pages/HomePage';
import { Provider } from 'react-redux';
import Store from './App/Store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './Pages/DashBoard'


function App() {
  return (        
     <Provider store={Store}> 
    <Router>
     <Routes>
    
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashBoard />} />
          
       </Routes>
    </Router>
     </Provider>
  )
 
  
}

export default App;
