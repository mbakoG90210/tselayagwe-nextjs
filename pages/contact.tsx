import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


type Props = {}

const contact = (props: Props) => {
  return (
    <>
      <Navbar />
      <div>
        <h3 className=" uppercase tracking-[20px] text-primary-focus  text-center text-2xl font-bold my-20">
          {" "}
          Contact us{" "}
        </h3>
      </div>
      {/*google maps iframe background*/}
      <div className="absolute inset-0 bg-gray-300 -z-10">
          <iframe
            width="100%"
            height="120%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{}}
          />
      </div>

      <ContactForm />


      <Footer />
    </>
  )
}

export default contact