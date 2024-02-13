import Phone from "../../images/phone.png"
import Location from "../../images/location.png"

function Contact() {



    const contactData = [
        { img: Phone, details: "- 9940963631" },
        { img: Location, details: "- 12/48, Thulasi Baba, Madam Street, Rameswaram - 623536" },
    ]
    return (
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-left'>
                    <h2 data-aos="zoom-in" data-aos-duration="2000">Book Your Journey Today</h2>
                    <p data-aos="zoom-out-up" data-aos-duration="2000">Ready to explore the wonders of Rameshwaram with Sri Velavan Travels? Contact us today to book your affordable and customized travel package. Let us be your guide as you create lasting memories on this captivating island.</p>
                    <h5 data-aos="zoom-in-down" data-aos-duration="2000">Sri Velavan Travels - Your Partner in Rameshwaram Exploration!</h5>
                </div>
                <div className='contact-right'>
                    <h2 data-aos="zoom-in" data-aos-duration="2000">Get in Touch </h2>
                    {contactData.map((data, index) => (
                        <div key={index} className='contact-section'>
                            <img data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={data.img} />
                            <p data-aos="zoom-in-down" data-aos-duration="2000" >{data.details}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Contact