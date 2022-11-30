import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Solutions from './pages/Solutions'
import SubmitTicket from './pages/SubmitTicket'
import TicketStatus from './pages/TicketStatus'

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="solutions" element={<Solutions />} />
                    <Route path="submit-ticket" element={<SubmitTicket />} />
                    <Route path="ticket-status" element={<TicketStatus />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App
