import profile from '../assets/profile-male.png'
import headset from '../assets/headset.png'
import arrowRight from '../assets/arrow-right.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()

    const handleLogin = () => {
        navigate(`/`)
    }

    return (
        <div className="login-container">
            <div className="login-width-container">
                <h1>Welcome to our customer support portal.</h1>
                <form className="login-form">
                    <input type="text" placeholder="Your email address" />
                    <input type="password" placeholder="Password" />
                    <div className="submit-container">
                        <div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label htmlFor="remember">
                                    Remember me on this computer
                                </label>
                            </div>
                            <a className="forgot-password" href="#">
                                Forgot your password?
                            </a>
                        </div>
                        <button
                            className="btn login-white-btn"
                            onClick={handleLogin}
                        >
                            <img src={profile} alt="" />
                            LOGIN
                        </button>
                    </div>
                </form>

                <div className="agent-container">
                    <div className="headset-container">
                        <img className="headset" src={headset} alt="" />
                    </div>
                    <p>Are you an agent?</p>
                    <button
                        className="btn login-here-btn"
                        onClick={handleLogin}
                    >
                        LOGIN HERE{' '}
                        <div className="arrow-right-container">
                            <img src={arrowRight} alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
