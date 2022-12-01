import down from '../assets/down.png'
import expandArrow from '../assets/expand-arrow.png'
import { useState } from 'react'

const Dropdown = ({ data }) => {
    const { title, current, list } = data
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev)
    }
    return (
        <div className="dropdown-container" onClick={handleToggle}>
            {title && <h5>{title}</h5>}
            {current && (
                <div
                    className={`dropdown-menu ${
                        title ? 'w-175 border-l-1' : 'w-250 border-1'
                    }`}
                >
                    {current} <img src={title ? down : expandArrow} alt="" />
                </div>
            )}

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
