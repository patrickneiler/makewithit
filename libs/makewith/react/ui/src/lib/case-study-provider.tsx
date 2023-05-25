/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import React, { createContext, useState, useContext } from 'react';

// Define the type for an individual case study
export type ICaseStudy = {
  title: string;
  publishedAt: string;
  summary: string;
  client: string;
  clientImg: string;
  tags?: string[];
  image?: string;
  body?: CaseStudyBody;
  slug?: string;
};

type CaseStudyBody = {
  problem: {
    text: string;
    img: string;
  };
  solution: {
    text: string;
    img: string;
  };
  images?: string[]
}
// Define the type for the context value
type CaseStudiesContextValue = {
  caseStudies: ICaseStudy[];
  addCaseStudy: (caseStudy: ICaseStudy) => void;
};

// Create the context
const CaseStudiesContext = createContext<CaseStudiesContextValue>({
  caseStudies: [],
  addCaseStudy: () => { },
});

// Define the provider component
const CaseStudiesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [caseStudies, setCaseStudies] = useState<ICaseStudy[]>([]);

  // Add a new case study to the state
  const addCaseStudy = (caseStudy: ICaseStudy) => {
    setCaseStudies(prevCaseStudies => [...prevCaseStudies, caseStudy]);
  };

  return (
    <CaseStudiesContext.Provider value={{ caseStudies, addCaseStudy }}>
      {children}
    </CaseStudiesContext.Provider>
  );
};

// Custom hook to use the case studies context
const useCaseStudies = () => useContext(CaseStudiesContext);

export { CaseStudiesProvider, useCaseStudies };
