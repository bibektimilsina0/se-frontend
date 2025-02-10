import './App.css';
import Campaign from './components/Box';
import Credential from './components/Credential'
import CampaignHello from './components/CampaignHello'
import Homepage from './components/Homepage';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import IntroCard from './components/IntroCard';
import AdminPanel from './components/AdminPanel';
import RecoverAccount from './components/RecoverAccount';
import ResetBox from './components/ResetBox';
import SignIn from './components/SignIn';
import FundDescription from './components/FundDescription';
import WorkingProcess from './components/WorkingProcess';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Homepage />
              <Campaign />
            </>
          } />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaignhello" element={<CampaignHello />} />
          <Route path="/credential" element={<Credential />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/ourintro" element={<IntroCard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/recover" element={<>
            <Navbar />
            <RecoverAccount />
          </>
          } />
          <Route path="/campaigndesc" element={<FundDescription />} />
          <Route path="/crowdfunding" element={<WorkingProcess />}/>

          <Route path="/reset" element={<>
            <Navbar />
            <ResetBox />
          </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
