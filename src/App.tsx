// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SubMenuPage from './pages/SubMenu';
import SubMenu1DetailPage from './pages/SubMenu1Detail';
import SubMenu2DetailPage from './pages/SubMenu2Detail';
import SubMenu3DetailPage from './pages/SubMenu3Detail';
import SubMenu4DetailPage from './pages/SubMenu4Detail';
import SubMenu5DetailPage from './pages/SubMenu5Detail';
import ScromPage from './pages/ScromPage';
import ScromTypePage from './pages/ScromTypePage';
import UploadScromPage from './pages/UploadScromPage';
import UploadPhuLuc4Page from './pages/UploadPhuLuc4Page';
import ApproveListPage from './pages/ApproveListPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sub-menu/:index" element={<SubMenuPage />} />
          <Route path="/sub-menu-1/detail-edit" element={<SubMenu1DetailPage />} />
          <Route path="/sub-menu-1/detail-view" element={<SubMenu1DetailPage />} />
          <Route path="/sub-menu-2/detail-edit" element={<SubMenu2DetailPage />} />
          <Route path="/sub-menu-2/detail-view" element={<SubMenu2DetailPage />} />
          <Route path="/sub-menu-3/detail-edit" element={<SubMenu3DetailPage />} />
          <Route path="/sub-menu-3/detail-view" element={<SubMenu3DetailPage />} />
          <Route path="/sub-menu-4/detail-edit" element={<SubMenu4DetailPage />} />
          <Route path="/sub-menu-4/detail-view" element={<SubMenu4DetailPage />} />
          <Route path="/sub-menu-5/detail-view" element={<SubMenu5DetailPage />} />
          <Route path="/sub-menu-5/detail-edit" element={<SubMenu5DetailPage />} />
          <Route path="/bai-giang-scrom" element={<ScromPage />} />
          <Route path="/bai-giang-scrom/:type" element={<ScromTypePage />} />
          <Route path="/upload-bai-giang" element={<UploadScromPage />} />
          <Route path="/upload-sub-menu-4" element={<UploadPhuLuc4Page />} />
          <Route path="/yeu-cau-phe-duyet" element={<ApproveListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
