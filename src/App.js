import React from 'react'
import {  Features, Footer, Possibility, WhatGPT3 } from "./containers/export";
import { Brand, Cta, Navbar, Header  } from "./components/export";
import "./App.css";


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Footer />

    </div>
  )
}

export default App