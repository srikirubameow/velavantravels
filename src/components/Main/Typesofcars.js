import React from 'react'
import Toyata from "../../images/Toyota.webp"
import Xylo from "../../images/Mahindra-Xylo.webp"
import Innova from "../../images/innova.jpg"
import Mahindra from "../../images/mahindra.webp"
import Swift from "../../images/swif.webp"


function Typesofcars() {

    return (
        <div className='car-rental-container'>
            <section className='car'>
                <h1 data-aos="zoom-in" data-aos-duration="3000">Available Cars</h1>
                <h3 data-aos="zoom-in" data-aos-duration="2000">The most popular car we rent</h3>

                <div className='car-section'>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Innova} />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Innova</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Mahindra} />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Mahindra Van</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Swift} />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Swift</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Toyata} />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Toyoto</h5>
                    </section>
                    <section className='demo' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={Xylo} />
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Xylo</h5>
                    </section>
                    {/*<section className='car car-1' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Innova</h5>
                    </section>

                    <section className='car car-2' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000"></h5>
                    </section>

                    <section className='car car-3' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Swift</h5>
                    </section>
                    <section className='car car-4' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Toyoto</h5>
                    </section>
                    <section className='car car-5' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <h5 data-aos="fade-up-right" data-aos-duration="1000">Xylo</h5>
    </section>*/}
                </div>
            </section>
        </div>
    )
}

export default Typesofcars