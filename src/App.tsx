// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SubMenu1Page from './pages/SubMenu1';
import SubMenu1DetailPage from './pages/SubMenu1Detail';
import SubMenu2Page from './pages/SubMenu2';
import SubMenu2DetailPage from './pages/SubMenu2Detail';
import SubMenu3Page from './pages/SubMenu3';
import SubMenu3DetailPage from './pages/SubMenu3Detail';
import SubMenu4Page from './pages/SubMenu4';
import SubMenu4DetailPage from './pages/SubMenu4Detail';
import SubMenu5Page from './pages/SubMenu5';
import SubMenu5DetailPage from './pages/SubMenu5Detail';
import ScromPage from './pages/ScromPage';
import ScromTypePage from './pages/ScromTypePage';
import UploadScromPage from './pages/UploadScromPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sub-menu-1" element={<SubMenu1Page />} />
          <Route path="/sub-menu-1/detail-edit" element={<SubMenu1DetailPage />} />
          <Route path="/sub-menu-1/detail-view" element={<SubMenu1DetailPage />} />
          <Route path="/sub-menu-2" element={<SubMenu2Page />} />
          <Route path="/sub-menu-2/detail-edit" element={<SubMenu2DetailPage />} />
          <Route path="/sub-menu-2/detail-view" element={<SubMenu2DetailPage />} />
          <Route path="/sub-menu-3" element={<SubMenu3Page />} />
          <Route path="/sub-menu-3/detail-edit" element={<SubMenu3DetailPage />} />
          <Route path="/sub-menu-3/detail-view" element={<SubMenu3DetailPage />} />
          <Route path="/sub-menu-4" element={<SubMenu4Page />} />
          <Route path="/sub-menu-4/detail-edit" element={<SubMenu4DetailPage />} />
          <Route path="/sub-menu-4/detail-view" element={<SubMenu4DetailPage />} />
          <Route path="/sub-menu-5" element={<SubMenu5Page />} />
          <Route path="/sub-menu-5/detail-edit" element={<SubMenu5DetailPage />} />
          <Route path="/bai-giang-scrom" element={<ScromPage />} />
          <Route path="/bai-giang-scrom/:type" element={<ScromTypePage />} />
          <Route path="/upload-bai-giang" element={<UploadScromPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
