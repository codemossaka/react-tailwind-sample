import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/:id" index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
