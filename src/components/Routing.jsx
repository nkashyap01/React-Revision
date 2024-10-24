import React from 'react'
import Counter from './Counter'
import Timer from './Timer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Counter</Link>
                </li>
                <li>
                    <Link to='/timer'>Timer</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Counter/>}></Route>
            <Route path='/timer' element={<Timer/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing