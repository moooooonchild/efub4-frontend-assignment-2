import { Route, Routes, Navigate } from 'react-router-dom';

import VideoPage from './pages/VideoPage';
import EntryPage from './pages/EntryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
