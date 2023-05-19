import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga4';

import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  useEffect(() => {
    
    const tagManagerArgs = {
      gtmId: 'GTM-586T7P5',
    };

    TagManager.initialize(tagManagerArgs);
    ReactGA.initialize('G-1ES9TLR117');
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}
