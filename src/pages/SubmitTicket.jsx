import Dropdown from '../components/Dropdown'
import bold from '../assets/bold.jpg'
import italic from '../assets/italic.jpg'
import underline from '../assets/underline.jpg'
import unordered from '../assets/unordered.jpg'
import numbered from '../assets/numbered.jpg'
import text from '../assets/text.jpg'
import shade from '../assets/shade.jpg'
import link from '../assets/link.jpg'

const dropdownList = {
    current: '...',
    list: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum', 'lorem ipsum'],
}

const SubmitTicket = () => {
    return (
        <div className="container">
            <div className="submit-ticket-top-container">
                <div className="submit-ticket-top">
                    <h1>Submit a Ticket</h1>
                </div>
            </div>
            <div className="submit-ticket-bottom-container">
                <div className="submit-ticket-bottom">
                    <form className="submit-ticket-form">
                        <div>
                            <h3>
                                Requester <span>*</span>
                            </h3>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div>
                            <h3>
                                Subject <span>*</span>
                            </h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Reported By</h3>
                            <Dropdown data={dropdownList} />
                        </div>
                        <div>
                            <h3>Ticket Description</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Product</h3>
                            <Dropdown data={dropdownList} />
                        </div>
                        <div>
                            <h3>
                                Description <span>*</span>
                            </h3>
                            <div className="description-right-container">
                                <div className="text-editor-container">
                                    <div className="tools">
                                        <img src={bold} alt="" />
                                        <img src={italic} alt="" />
                                        <img src={underline} alt="" />
                                        <div className="vertical-line"></div>
                                        <img src={unordered} alt="" />
                                        <img src={numbered} alt="" />
                                        <div className="vertical-line"></div>
                                        <img src={text} alt="" />
                                        <img src={shade} alt="" />
                                        <div className="vertical-line"></div>
                                        <img src={link} alt="" />
                                    </div>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                    />
                                </div>
                                <div className="attach-file">
                                    <p>+ Attach a file</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Client Code/Name</h3>
                            <Dropdown data={dropdownList} />
                        </div>
                        <div>
                            <h3>Invoice No.</h3>
                            <input type="text" />
                        </div>
                        <div>
                            <h3>Delivery Date</h3>
                            <input type="date" required />
                        </div>
                        <div>
                            <h3></h3>
                            <div className="submit-ticket-btns">
                                <button className="btn submit-btn">
                                    Submit
                                </button>
                                <button className="btn cancel-btn">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitTicket
