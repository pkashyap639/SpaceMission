import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import CreateMission from './CreateMission';
import Outcome from './Outcome';
import Resource from './Resource';
import NewOutcome from './NewOutcome';
import EditMission from './EditMission';

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/create' element={<CreateMission/>}></Route>
                    <Route path='/edit/:id' element={<EditMission/>}></Route>
                    <Route path='/outcome/:id' element={<Outcome />}></Route> 
                    <Route path='/resources' element={<Resource />}></Route>
                    <Route path='/newoutcome/:id' element={<NewOutcome />}></Route> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;