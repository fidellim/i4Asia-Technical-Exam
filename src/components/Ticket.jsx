import world from '../assets/world.jpg'

const Ticket = ({ data }) => {
    return (
        <div className="ticket-container">
            <div className="ticket-text-content">
                <img src={world} alt="" />
                <div>
                    <h3>{data.title}</h3>
                    <p>
                        Created on {data.timestamp.toString()} Agent:{' '}
                        {data.author}
                    </p>
                </div>
            </div>
            <div className="status">
                <h4>{data.status.toUpperCase()}</h4>
            </div>
        </div>
    )
}

export default Ticket
