import Login from '../src/components/Login/Login.js';
import NavBar from '../src/components/NavBar/NavBar.js';
import SignUp from '../src/components/SignUp/SignUp.js';
import MainPage from '../src/components/MainPage/MainPage.js';
import HowToSyncFitbit from '../src/components/HowToSyncFitbit/HowToSyncFitbit.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../src/components/About/About.js';
import ManualEntry from '../src/components/ManualEntry/ManualEntry.js';
import JourneyMap from '../src/components/JourneyMap/JourneyMap.js';
import MyCollection from '../src/components/MyCollection/MyCollection.js';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/MainPage" element={<MainPage />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/HowToSyncFitbit" element={<HowToSyncFitbit />} />
                  <Route path="/About" element={<About />} />
                  
                  <Route path="/MyCollection" element={<MyCollection />} />
                  <Route path="/JourneyMap" element={<JourneyMap />} />

                  <Route path="/ManualEntry" element={<ManualEntry />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
