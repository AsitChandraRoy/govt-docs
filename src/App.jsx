import React from 'react'
import './App.css'

import {
  Faq,
  Hero,
  Note,
  Partners,
  ProblemSolution,
  Reviews,
} from "./components/home";
import { Navbar } from './components/shared/navbar';
import { Footer } from './components/shared/footer';

function App() {

  return (
    <main className='font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top'>

      {/* <Button>Primary Button</Button>
      <Button className="bg-white text-black">Secondary Button</Button>
      <SectionTitle gradient="Solution">Problem &</SectionTitle> */}

      <Navbar />
      <Hero />
      <ProblemSolution />
      <Reviews />
      <Partners />
      <Faq />
      <Note />
      <Footer/>
    </main>
  )
}

export default App
