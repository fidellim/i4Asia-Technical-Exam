import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="top-footer"></div>
            <div className="footer-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ticket-status">Tickets</Link>
                    </li>
                    <li>
                        <Link to="/solutions">Solutions</Link>
                    </li>
                </ul>
                <h2>© 2022 Freshdesk DemoPh</h2>
            </div>
        </footer>
    )
}

export default Footer
