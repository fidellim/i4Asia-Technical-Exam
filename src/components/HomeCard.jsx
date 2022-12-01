import book from '../assets/book.png'

const HomeCard = ({ data }) => {
    return (
        <div className="homeCard">
            <div className="homeCard-top">
                <h3>{data.title}</h3>
                <img src={data.icon} alt="" />
            </div>
            <div className="homeCard-bottom">
                {data.topics.map((topic) => (
                    <div key={topic.title} className="topic-container">
                        <h3 className="topic-number">{topic.number}</h3>
                        <div className="topic-subheading-container">
                            <h4 className="topic-title">{topic.title}</h4>
                            {topic.subheadings.map((subheading, index) => (
                                <div
                                    key={`${subheading} ${index}`}
                                    className="topic-subheading"
                                >
                                    <img src={book} alt="" />
                                    <a>{subheading}</a>
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
