import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import  { Toaster } from 'react-hot-toast';
import Login from './pages/Login'
import Paragraph from './pages/Paragraph';
import Summary from './pages/Summary';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';
const App = () => {

  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/paragraph' element={<Paragraph/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
        <Route path='/js-converter' element={<JsConverter/>}/>
        <Route path='/scifi-image' element={<ScifiImage/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
