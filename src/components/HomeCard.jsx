import book from '../assets/book.png'
import { useLocation } from 'react-router-dom'

const HomeCard = ({ data }) => {
    const { pathname } = useLocation()

    return (
        <div className={`homeCard ${pathname === '/' ? 'min-h-350' : ''}`}>
            <div className="homeCard-top">
                <h3>{data.title}</h3>
                <img src={data.icon} alt="" />
            </div>
            <div className="homeCard-bottom">
                {data.topics.map((topic, index) => (
                    <div key={`${topic} ${index}`} className="topic-container">
                        {topic.number && (
                            <h3 className="topic-number">{topic.number}</h3>
                        )}
                        <div className="topic-subheading-container">
                            <h4 className="topic-title">{topic.title}</h4>
                            {topic.subheadings.map((subheading, index) => (
                                <div
                                    key={`${subheading} ${index}`}
                                    className="topic-subheading"
                                >
                                    <img src={book} alt="" />
                                    <a
                                        className={`${
                                            pathname === '/' ? 'max-w-150' : ''
                                        }`}
                                    >
                                        {subheading}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeCard
