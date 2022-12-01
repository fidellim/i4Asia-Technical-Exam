import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [toggleHamburger, setToggleHamburger] = useState(false)
    const { pathname } = useLocation()

    let navigate = useNavigate()

    const handleSignOut = () => {
        navigate(`/login`)
    }

    const handleHamburger = () => {
        setToggleHamburger((prev) => !prev)
    }

    return (
        <div
            className={`header-container ${
                toggleHamburger ? 'blueBg' : 'transparentBg'
            }`}
        >
            <div className="logo-navbar-container">
                <div className="logo-hamburger">
                    <img className="logo" src={logo} alt="logo" />
                    <div
                        className={`hamburger${
                            toggleHamburger ? ' change' : ''
                        }`}
                        onClick={handleHamburger}
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <ul className={`${toggleHamburger ? 'displayFlex' : 'hide'}`}>
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
            </div>
            <div
                className={`header-right-container ${
                    toggleHamburger ? 'displayFlex' : 'hide'
                }`}
            >
                <h2>{pathname === '/login' ? 'Welcome!' : 'Welcome User'}</h2>
                {pathname !== '/login' && (
                    <div className="header-btns">
                        <button className="btn header-btn">Edit Profile</button>
                        <button
                            className="btn header-btn"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
