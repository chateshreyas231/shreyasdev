import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Experience from './Experience';
import Basic from './Basic';
import Skills from './Skills';
import Swipeable from './Swipeable';



export default function App() {

  return (
    <div className='background-app'>
      <BrowserRouter>
		<Routes>
    <Route path="/" element={<Basic/>} />
			<Route path="/me" element={<LandingPage/>} />
			<Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} /> 
		</Routes>
	</BrowserRouter>
    </div>
  )
}
