import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Regalia from '@/pages/Regalia';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import { ModalProvider } from '@/context/ModalContext';
import ProjectDetailsModal from '@/components/ProjectDetailsModal';
import { useModal } from '@/context/ModalContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { selectedProject, closeModal } = useModal();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/regalia" element={<Regalia />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </Router>
  );
};

export default App;
