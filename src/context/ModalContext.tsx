import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectItem } from '@/data/companyData';

interface ModalContextType {
  selectedProject: ProjectItem | null;
  openModal: (project: ProjectItem) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <ModalContext.Provider value={{ selectedProject, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}; 