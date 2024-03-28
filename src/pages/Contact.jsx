import { MdLocalPhone, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'

const Contact = () => {

    const handleClick = (e) => {
        e.preventDefault();
        alert("Form submitted")
    }
    return (
        <div className="section subSection">
            <h1>Contact Me</h1>
            <div className="workSection">
                <div className="leftSection leftContact">
                    <div className="cardContactContainer">
                        <div className="contactHeading">
                            <MdLocalPhone className="icons" />
                            <h2 className="workTitle">Phone</h2>
                        </div>
                        <p className="workDesc">+152 534-468-854</p>
                    </div>
                    <div className="cardContactContainer">
                        <div className="contactHeading">
                            <MdOutlineEmail className="icons" />
                            <h2 className="workTitle">Email</h2>
                        </div>
                        <p className="workDesc">contact@example.com</p>
                    </div>
                    <div className="cardContactContainer">
                        <div className="contactHeading">
                            <MdOutlineLocationOn className="icons" />
                            <h2 className="workTitle">Location</h2>
                        </div>
                        <p className="workDesc">View on Google map</p>
                    </div>
                </div>
                <div className="rightSection rightContact">
                    <form className='form'>
                        <input className="input" type="text" placeholder='Username' required />
                        <input className="input" type="text" placeholder='Email' required />
                        <textarea className="input" type="text" placeholder='Message' required />
                        <div>
                            <button className="button" onClick={handleClick}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact