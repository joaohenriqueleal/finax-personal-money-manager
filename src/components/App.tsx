import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"

import Globals from "../shared/Globals"

import AuthPage from "../pages/AuthPage"
import Home from "../pages/Home"


export default function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        setAuthenticated(Globals._authenticated)
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    authenticated ? <Home setAuth={setAuthenticated} /> :
                    <Navigate to='autenticacao' />
                } />
                <Route path="/autenticacao" element={
                    authenticated ? <Navigate to='/' /> :
                    <AuthPage setAuth={setAuthenticated} />
                } />
            </Routes>
        </Router>
    )
}
