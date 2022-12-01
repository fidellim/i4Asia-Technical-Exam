import arrowRight from '../assets/right-arrow.svg'
import ticket from '../assets/ticket.png'
import ticketPlus from '../assets/ticket-plus.png'
import general from '../assets/general.png'
import faq from '../assets/faq.png'
import freshchat from '../assets/freshchat.png'
import HomeCard from '../components/HomeCard'
import { useNavigate } from 'react-router-dom'

const homeData = [
    {
        title: 'GENERAL',
        icon: general,
        topics: [
            {
                title: 'CS Template',
                number: 2,
                subheadings: ['Delivery Matters', 'Price Discrepancy Template'],
            },
            {
                title: 'Delivery Team Template',
                number: 1,
                subheadings: ['Stocks Matters'],
            },
        ],
    },
    {
        title: 'FRESHCHAT CATEGORY',
        icon: freshchat,
        topics: [
            {
                title: 'Demo Ph',
                number: 4,
                subheadings: [
                    'Order History',
                    'Invalid Token',
                    'Delivery Status',
                    'Reset your password',
                ],
            },
            {
                title: 'Delivery Status',
                number: 2,
                subheadings: ['Delivery Status'],
            },
        ],
    },
    {
        title: 'FAQs',
        icon: faq,
        topics: [
            {
                title: 'FAQs',
                number: 3,
                subheadings: [
                    'Client Rep User Guide',
                    'Password Reset Troubleshooting Guide',
                    'Customer User Guide',
                ],
            },
        ],
    },
]

const Home = () => {
    let navigate = useNavigate()

    const handleNewSupportTicket = () => {
        navigate(`/submit-ticket`)
    }
    const handleTicketStatus = () => {
        navigate(`/ticket-status`)
    }

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
                    <button
                        className="btn ticket-btn"
                        onClick={handleNewSupportTicket}
                    >
                        <img src={ticket} alt="" />
                        New Support Ticket
                    </button>
                    <button
                        className="btn ticket-btn"
                        onClick={handleTicketStatus}
                    >
                        <img src={ticketPlus} alt="" />
                        Check Ticket Status
                    </button>
                </div>
            </div>
            <div className="main-bottom">
                {homeData.map((data) => {
                    return <HomeCard key={data.title} data={data} />
                })}
            </div>
        </div>
    )
}

export default Home
