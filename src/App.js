// In your App.js or wherever your routes are defined
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import DataReleasePage from './pages/DataReleasePage';
import PublicationsPage from './pages/PublicationsPage';
import TeamPage from './pages/TeamPage';
import RestrictedArea from './pages/RestrictedArea';
import MSPSRPIDetailsPage from './pages/MSPSRPIDetailsPage';
import MSPSRPI2DetailsPage from './pages/MSPSRPI2DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test-deploy" element={<Homepage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/data-release" element={<DataReleasePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/restricted-area" element={<RestrictedArea />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects/mspsrpi-details" element={<MSPSRPIDetailsPage />} />
        <Route path="/projects/mspsrpi2-details" element={<MSPSRPI2DetailsPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;