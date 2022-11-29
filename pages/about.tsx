import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

type Props = {}

function About({ }: Props) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col relative text-center max-w-7xl justify-evenly mx-auto my-20 items-center">
        <div>
          <h3 className=" uppercase tracking-[20px] text-primary-focus text-2xl font-bold">About Us</h3>
        </div>
        
        <div className="card w-3/5 bg-base-100 shadow-xl my-10">
          <figure><img src="../assets/jpeg/workshopees.jpeg"
            alt="workshopees" />
          </figure>
          <div className="card-body">
            <p>
              The investments impact beyond the development of the farms, as
              they are a crowdfunding method which create jobs for any
              unemployed class of communities along the value chain, and also
              create wealth distribution through secondary and/or passive means
              of income by directing the investment towards food security.
            </p>

          </div>
        </div>
        <div className="card w-2/5 bg-base-100 shadow-xl my-10">
          <figure><img src="../assets/jpeg/boycalves.jpeg"
            alt="young boy bottle feeding  calves" /></figure>
          <div className="card-body">
            <p>
              We develop the future successors and their path, by teaching them
              at an early age the input, management, outcome and impact of the
              agricultural value chain. We avail them a land bank instead of a
              piggy bank that gives them a compound return, a saving plan for
              their future.
            </p>
          </div>
        </div>  
            {/* Card item 3*/}
        <div className="card w-2/5 bg-base-100 shadow-xl my-10">
            <figure><img src="../assets/jpeg/kaomekraal.jpeg"
              alt="Old Man in a Kraal with his cows" />
            </figure>
            <div className="card-body">

              <p>
                With over 5 years of intensive re-search, development and
                operation, we have identified the bottle necks that hinder the
                prosperity of the agricultural value chain and have developed the
                ultimate solution to play our part in considering the livelihoods
                of our senior farmers who are the key producers of our organic
                staple foods, by crowd funding to develop their lands and relieve
                them of the labour intensive roles to be conducted in the process
                of production.
              </p>
            </div>
          </div>
      </div>
      
      <Footer />
    </div>

  )
}

export default About