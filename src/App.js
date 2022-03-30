import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";



import UtilityContent from './components/UtilityContent/UtilityContent'
import Navbar from './components/Navbar/Navbar'

// import file
import NewArrivals from './components/NewArrivals/NewArrivals';
import Golf from './components/GolfApparel/GolfApparel';
import Tennis from './components/TennisApparel/TennisApparel';
import Ice from './components/ICE/Ice';
import Sale from './components/Sale/Sale';

const App = () => {
    return (
        <div className="App">
            <header>
                <UtilityContent />
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<NewArrivals />} />
                <Route path="/golf-apparel" element={<Golf />}>
                </Route>
                <Route path="/tennis-apparel" element={<Tennis />}></Route>
                <Route path="/ice" element={<Ice />} />
                <Route path="/sale" element={<Sale />} />
            </Routes>


        </div>
    )
}

export default App