import arrowRight from '../assets/right-arrow.svg'
import ticket from '../assets/ticket.png'
import ticketPlus from '../assets/ticket-plus.png'

const Home = () => {
    return (
        <div className="container">
            <div className="main-top">
                <h1>How can we help you?</h1>
                <p>
                    Search for answers to your questions by entering keywords
                    below, or look thourgh our knowledge base.
                </p>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Enter your search term here"
                    />
                    <button className="search-btn">
                        <h3>SEARCH</h3>
                        <img src={arrowRight} alt="" />
                    </button>
                </div>
                <div className="main-top-btns">
                    <button className="btn ticket-btn">
                        <img src={ticket} alt="" />
                        New Support Ticket
                    </button>
                    <button className="btn ticket-btn">
                        <img src={ticketPlus} alt="" />
                        Check Ticket Status
                    </button>
                </div>
            </div>
            <div className="main-button"></div>
        </div>
    )
}

export default Home
