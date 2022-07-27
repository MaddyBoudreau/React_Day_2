import { useState } from 'react'
import CarList from './components/CarList'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import InventorySingle from './views/InventorySingle'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        {/* <li>
                            <Link to="/inventorySingle">Inventory Single</Link>
                        </li> */}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='Inventory'>
                        <Route path=":id" element={<InventorySingle />} />
                        <Route path="" element={<Inventory />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}