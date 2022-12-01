import React from "react";
import FarmCards from "../components/FarmCards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StockCards from "../components/StockCards";
import TradingCards from "../components/TradingCards";

type Props = {};

function Offerings({ }: Props) {
    return (
        <div>
            <Navbar />
            <div>
                <h3 className=" uppercase tracking-[20px] text-primary-focus  text-center text-2xl font-bold my-20">
                    {" "}
                    Our Offerings{" "}
                </h3>
            </div>
            <div className="flex flex-col relative text-center max-w-7xl justify-evenly mx-auto my-20 items-center">
                <h3 className=" uppercase tracking-[20px] text-secondary-focus text-1xl font-bold my-5">
                    {" "}
                    Stock Offerings{" "}
                </h3>
                <div className="card w-3/5 glass">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1516822277566-bb38424a2b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80"
                            alt="car!"
                        />
                    </figure>
                    <div className="card-body justify-evenly text-center">
                        <p>
                            Invest in a farm or a farm commodity that is designed by
                            agricultural engineers and managed by trained expertise, rather
                            than in a savings account or an un-predictable stock that doesn’t
                            make an impact to your livelihood and communities during these
                            times of economic inflations.
                        </p>
                        {/*More information modan modal*/}
                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-6" className="btn btn-accent">
                                How it works
                            </label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h5 className="font-medium text-lg">
                                        {" "}
                                        1. Invest in a farming project{" "}
                                    </h5>
                                    <p className="py-4">
                                        Choose one of our carefully curated farming projects, and
                                        select the number of units you want to invest in.
                                    </p>
                                    <h5 className="font-medium text-lg">
                                        2. Let your investment grow
                                    </h5>
                                    <p className="py-4">
                                        Once the farming project is fully funded, we begin farming
                                        and support our partner farmers with agronomy training,
                                        mentorship and farming equipment. The cost of each
                                        investment includes:
                                    </p>
                                    <ul>
                                        <li>🌱 Seed</li>
                                        <li>🌱 Administration - labour, logistics and technical supoort</li>
                                        <li>🌱 Construction </li>
                                        <li>🌱 Implements `(irrigation systems, organic fertiliser, organic pesticide and organic de-weeder)`</li>
                                        <li>🌱 Insurance </li>
                                    </ul>
                                    <h5 className="font-medium text-lg">3. Recieve returns plus initial investment</h5>
                                    <p className="py-4">After the crop cycle, the profits are paid out to the investor</p>
                                    <div className="modal-action">
                                        <label
                                            htmlFor="my-modal-6"
                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary text-accent">
                                invest now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <StockCards />
            <div className="flex flex-col relative text-center max-w-7xl justify-evenly mx-auto my-20 items-center">
                <h3 className=" uppercase tracking-[20px] text-secondary-focus text-1xl font-bold my-5">
                    {" "}
                    Trading{" "}
                </h3>
                <div className="card w-3/5 glass">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="car!"
                        />
                    </figure>
                    <div className="card-body justify-evenly text-center">
                        <p>
                            Cattle speculating for meat products directly from the farmer to
                            the domestic households, shops and butcheries{" "}
                        </p>
                        <ul>
                            <li>Term: 10 days</li>
                            <li>Price: P5000.00</li>
                            <li>Profit: P750.00</li>
                            <li>Profit percentage: 15%</li>
                            <li>Gross Total Returns: P5750.00</li>
                        </ul>
                        {/*More information modan modal*/}
                        <div className="card-actions justify-end">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-trading" className="btn btn-accent">
                                How it works
                            </label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-trading" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h5 className="font-bold text-lg">
                                        {" "}
                                        1. Cattle weighed at designated buying points
                                        {" "}
                                    </h5>
                                    <p className="py-4">
                                        Cattle are procured from small holder farmers who need to supplement feed their herds and procure diesel for their boreholes
                                    </p>
                                    <h5 className="font-medium text-lg">
                                        2. The farmer is paid on the spot
                                    </h5>
                                    <p className="py-4">
                                        An immediate transaction is made out to the farmer so they could attend to their farm matters
                                    </p>

                                    <h5 className="font-medium text-lg">3. Cattle are transported to abattoir/s</h5>
                                    <p className="py-4">Insured truck or trailer is engaged to transport the cattle from buying points to the abattoir</p>
                                    <h5 className="font-medium text-lg">4. Carcasses are processed into meat cuts</h5>
                                    <p className="py-4">Cattle are weighed as carcass weight and then processed into meat cuts for distribution</p>
                                    <h5 className="font-medium text-lg">5. Processed meat cuts are delivered to consumers</h5>
                                    <p className="py-4">Meats are delivered from the processing facility as per orders by the house holds, shops and butcheries</p>
                                    <h5 className="font-medium text-lg">6. Recieval of returns plus initial investment amount</h5>
                                    <p className="py-4">On the 10th day, 15% profits are paid to the investor with the option of trading again</p>
                                    <div className="modal-action">
                                        <label
                                            htmlFor="my-modal-trading"
                                            className="btn btn-sm btn-circle absolute right-2 top-2"
                                        >
                                            ✕
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-accent">
                                    Invest now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TradingCards />
            <div className="flex flex-col relative text-center max-w-7xl justify-evenly mx-auto my-20 items-center">
                <h3 className=" uppercase tracking-[20px] text-secondary-focus text-1xl font-bold my-5">
                    {" "}
                    Farm Offerings{" "}
                </h3>
                <div className="card w-3/5 glass">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1586366461834-d2d65d725a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            alt="car!"
                        />
                    </figure>
                    <div className="card-body">
                        <p>
                            Helping the farmer develop the farm and maximise production,
                            efficiency and yeilds
                        </p>
                        <ul>
                            <li>Design of property</li>
                            <li>Funds to be raised for development</li>
                            <li>Location</li>
                            <li>Investment crop to be bulk produced</li>
                            <li>Project details</li>
                        </ul>
                        {/*modal for more info*/}
                            <div className="card-actions justify-end">
                                {/* The button to open modal */}
                                <label htmlFor="my-modal-farmOp" className="btn btn-accent">
                                    How it works
                                </label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my-modal-farmOp" className="modal-toggle" />
                                <div className="modal modal-bottom cursor-pointer sm:modal-middle">
                                    <div className="modal-box">
                                        <h5 className="font-bold text-lg mt-5">
                                            {" "}
                                            Fill in our customer details form below and we will get in touch with you
                                            {" "}
                                        </h5>
                                        <ul className="py-4">
                                            <li>Name and surname</li>
                                            <li>Phone number</li>
                                            <li>Email address</li>
                                            <li>Property location</li>
                                            <li>Hectarage (Property size)</li>
                                            <li>Property developments</li>
                                            <li>Current crops on the property, if any</li>
                                            <li>Current livestock on the property, if any</li>
                                            <li>Other farm practices ongoing, if any</li>
                                            <li>Any other information you would like to share</li>
                                        </ul>
                                        <div className="modal-action">
                                            <a href="#" className="btn">Fill in details</a>
                                        </div>
                                        <div className="modal-action">
                                            <label
                                                htmlFor="my-modal-farmOp"
                                                className="btn btn-sm btn-circle absolute right-2 top-2"
                                            >
                                                ✕
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary text-accent">
                                        Invest now!
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <FarmCards />
                <Footer />
            </div>
            );
}

            export default Offerings;
