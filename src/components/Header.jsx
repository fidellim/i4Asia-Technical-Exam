import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    const [toggleHamburger, setToggleHamburger] = useState(false)

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
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
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
                    toggleHamburger ? 'display' : 'hide'
                }`}
            >
                <h2>Welcome!</h2>
            </div>
        </div>
    )
}

export default Header
