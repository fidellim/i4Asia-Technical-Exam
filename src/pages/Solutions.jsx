import arrowRight from '../assets/right-arrow.svg'
import ticket from '../assets/ticket.png'
import ticketPlus from '../assets/ticket-plus.png'
import printer from '../assets/printer.png'
import { useNavigate } from 'react-router-dom'
import article from '../assets/article.png'
import HomeCard from '../components/HomeCard'

const solutionRoutes = ['Solution Home', 'General CS', 'Template']

const relatedArticlesData = [
    {
        title: 'RELATED ARTICLES',
        icon: article,
        topics: [
            {
                subheadings: [
                    'Price Discrepancy Template',
                    'Stocks Matters',
                    'Delivery Status',
                    'Delivery Status',
                ],
            },
        ],
    },
]

const Solutions = () => {
    let navigate = useNavigate()

    const handleNewSupportTicket = () => {
        navigate(`/submit-ticket`)
    }
    const handleTicketStatus = () => {
        navigate(`/ticket-status`)
    }

    return (
        <div className="container">
            <div className="solutions-top-container">
                <div className="solutions-top">
                    <div className="solutions-top-text-container">
                        <h1>How can we help you?</h1>
                        <p>
                            Search for answers to your questions by entering
                            keywords below, or look thourgh our knowledge base.
                        </p>
                    </div>
                    <div className="solutions-top-interactive-container">
                        <div className="solutions-search-bar">
                            <input
                                type="text"
                                placeholder="Enter your search term here"
                            />
                            <button className="search-btn">
                                <h3>SEARCH</h3>
                                <img src={arrowRight} alt="" />
                            </button>
                        </div>
                        <div className="solutions-top-btns">
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
                </div>
            </div>
            <div className="solutions-bottom-container">
                <div className="solution-bottom">
                    {solutionRoutes.map((route, index) => (
                        <div key={index} style={{ display: 'inline-block' }}>
                            <a href="">{route}</a>{' '}
                            {solutionRoutes.length !== index + 1 ? ' / ' : ''}
                        </div>
                    ))}

                    <div className="main-content-container">
                        <div className="solutions-main">
                            <div className="template-container">
                                <div className="template-texts">
                                    <h2>Delivery Matters</h2>
                                    <p>
                                        Modified on: Thu, 17 Jun, 2021 at 9:31
                                        AM
                                    </p>
                                </div>
                                <button className="btn print-btn">
                                    <h3>PRINT</h3>
                                    <img src={printer} alt="" />
                                </button>
                            </div>
                            <p className="template-content">
                                1. Template for Daily Delivery Pre-Alerts:{' '}
                                <br />
                                <span>
                                    &nbsp;&nbsp;&nbsp; Pre-alert is only for:{' '}
                                    <br />
                                    &nbsp;&nbsp;&nbsp; Service Lapse <br />
                                    &nbsp;&nbsp;&nbsp; Clinic Opening Hours
                                    (adhoc changes)
                                    <br />
                                    &nbsp;&nbsp;&nbsp; Chargeable Delivery{' '}
                                    <br />
                                    &nbsp;&nbsp;&nbsp; Life saving Situation{' '}
                                    <br />
                                    <br />
                                </span>
                                &nbsp;&nbsp;&nbsp; Requestor: CS Email Address{' '}
                                <br />
                                &nbsp;&nbsp;&nbsp; Subject: Daily Delivery
                                Pre-Alerts - (Input OBD No.) <br />
                                &nbsp;&nbsp;&nbsp; Ticket Description: Delivery
                                Arrangement <br />
                                &nbsp;&nbsp;&nbsp; Description: <br />
                                &nbsp;&nbsp;&nbsp;
                                ------------------------------------ <br />
                                &nbsp;&nbsp;&nbsp; Reported by: <br />
                                &nbsp;&nbsp;&nbsp; Contact Number: <br />
                                <br />
                                &nbsp;&nbsp;&nbsp; CS(Name) <br />
                                &nbsp;&nbsp;&nbsp; Customer Name <br />
                                &nbsp;&nbsp;&nbsp; Customer Address <br />
                                &nbsp;&nbsp;&nbsp; OBD Number <br />
                                &nbsp;&nbsp;&nbsp; OBD Date/Time <br />
                                &nbsp;&nbsp;&nbsp; Expected Delivery Date:{' '}
                                <br />
                                &nbsp;&nbsp;&nbsp; Add in additional comments
                                (if needed): <br />
                            </p>
                        </div>
                        <div className="solutions-sidebar">
                            {relatedArticlesData.map((article, index) => (
                                <HomeCard key={index} data={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
