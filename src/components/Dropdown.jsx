import down from '../assets/down.png'
import { useState } from 'react'

const Dropdown = ({ data }) => {
    const { title, current, list } = data
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }
    return (
        <div className="dropdown-container" onClick={handleToggle}>
            <h5>{title}</h5>
            <div className="dropdown-menu">
                {current} <img src={down} alt="" />
            </div>

            <div
                className={`dropdown-list ${
                    toggle ? 'visible' : 'visibleHide'
                }`}
            >
                {list.map((list, index) => (
                    <div key={index}>{list}</div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown
