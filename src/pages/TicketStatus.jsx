import Ticket from '../components/Ticket'
import Dropdown from '../components/Dropdown'
import exportFile from '../assets/export-file.png'

const ticketData = [
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
    {
        title: 'need a ticket sample #280',
        timestamp: 'Wed, Apr 13 at 4:30 PM',
        author: 'Paul Sonda',
        status: 'closed',
    },
]

const viewDropdownList = {
    title: 'VIEW',
    current: 'All Tickets',
    list: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
}
const sortDropdownList = {
    title: 'SORT BY',
    current: 'Date Created',
    list: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
}

const TicketStatus = () => {
    return (
        <div className="container">
            <div className="ts-top-container">
                <div className="ts-top">
                    <h1>Ticket Status</h1>

                    <div className="ts-top-btns">
                        <div className="dropdowns-container">
                            <Dropdown data={viewDropdownList} />
                            <Dropdown data={sortDropdownList} />
                        </div>
                        <button className="btn export-ticket-white-btn">
                            <img src={exportFile} alt="" />
                            Export Ticket
                        </button>
                    </div>
                </div>
            </div>
            <div className="ts-bottom-container">
                <div className="ts-bottom">
                    {ticketData.map((ticket, index) => (
                        <Ticket key={index} data={ticket} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TicketStatus
