import { HomePage, WeiGuanPage } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import React from "react";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/weiguan" element={<WeiGuanPage />}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
