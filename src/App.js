
import './App.css';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import {Home, Home2, Page1, Page10, Page11, Page12, Page13, Page14, Page15, Page16, Page17, Page18, Page19, Page2, Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27, Page28, Page29, Page3, Page30, Page31, Page4, Page5, Page6, Page7, Page8, Page9} from './pages'



//import Rota from './Rota'

function App() {
  return (
    <div className="App" class='container'>
    <div class='row'>
      <div class='two-thirds column'>
      <BrowserRouter>
        <div class='questions_box' > 
         <Routes>
             <Route path= "/" element={<Home/>}/>     
             <Route path= "/Home2" element={<Home2/>}/>     
             <Route path= "/Page1" element={<Page1/>}/>     
             <Route path= "/Page2" element={<Page2/>}/>   
             <Route path='/Page3' element={<Page3/>}/>  
             <Route path='/Page4' element={<Page4/>}/>
             <Route path='/Page5' element={<Page5/>}/>
             <Route path='/Page6' element={<Page6/>}/>
             <Route path='/Page7' element={<Page7/>}/>
             <Route path='/Page8' element={<Page8/>}/>
             <Route path='/Page9' element={<Page9/>}/>
             <Route path='/Page10' element={<Page10/>}/>
             <Route path='/Page11' element={<Page11/>}/>
             <Route path='/Page12' element={<Page12/>}/>
             <Route path='/Page13' element={<Page13/>}/>
             <Route path='/Page14' element={<Page14/>}/>
             <Route path='/Page15' element={<Page15/>}/>
             <Route path='/Page16' element={<Page16/>}/>
             <Route path='/Page17' element={<Page17/>}/>
             <Route path='/Page18' element={<Page18/>}/>
             <Route path='/Page19' element={<Page19/>}/>
             <Route path='/Page20' element={<Page20/>}/>
             <Route path='/Page21' element={<Page21/>}/>
             <Route path='/Page22' element={<Page22/>}/>
             <Route path='/Page23' element={<Page23/>}/>
             <Route path='/Page24' element={<Page24/>}/>
             <Route path='/Page25' element={<Page25/>}/>
             <Route path='/Page26' element={<Page26/>}/>
             <Route path='/Page27' element={<Page27/>}/>
             <Route path='/Page28' element={<Page28/>}/>
             <Route path='/Page29' element={<Page29/>}/>
             <Route path='/Page30' element={<Page30/>}/>
             <Route path='/Page31' element={<Page31/>}/>
             
         </Routes>
         </div>
       </BrowserRouter>
      </div>
    </div>
    </div>
  );
}

export default App;
