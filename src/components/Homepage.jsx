import React from 'react';
import { Header } from "./Header"
import { AboutSection } from "./AboutSection"
import { ProjectSection } from "./ProjectSection";
import { EmailSection } from "./EmailSection";
import { Footer } from "./Footer";

export const Homepage = () => {
  return (
    <>
        <Header/>
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
    </>
  )
}
