import React from 'react'
import script from 'next/script'
import image from 'next/image';

type Props = {}

function StockCards({ }: Props) {
    return (
        <>
            <main className=" items-center text-center mt-28 text-white font-semibold">
                {/* Parallax Background */}
                <section
                    className="flex-row flex-wrap h-fit  bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1511735643442-503bb3bd348a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)",
                    }}
                >

                    <div className="card w-96 glass m-10">
                        <figure><img 
                        
                        src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                        alt="seedlings" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">CROP PRODUCTION</h2>
                            <ul>
                                <li>TERM: 14 DAYS</li>
                                <li>PRICE: P100.00 `(per unit)`</li>
                                <li>PROFIT: P250.00</li>
                                <li>PERCENTAGE PROFIT: 25%</li>
                                <li>TOTAL RETURNS: P1250.00</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" alt="cabbage" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">VEGETABLE GARDENS</h2>
                            <ul>
                                <li>TERM: 4 MONTHS</li>
                                <li>PRICE: P5.00 `(per unit)`</li>
                                <li>PROFIT: P5.00</li>
                                <li>PERCENTAGE PROFIT: 100%</li>
                                <li>TOTAL RETURNS: P10.00</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">VALUE CROP e.g garlic</h2>
                            <ul>
                                <li>TERM: 9 MONTHS</li>
                                <li>PRICE: P10.00 `(per unit)`</li>
                                <li>PROFIT: P24.50</li>
                                <li>PERCENTAGE PROFIT: 245%</li>
                                <li>TOTAL RETURNS: P34.50</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1588214129467-a97ce7feb7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">VALUE CROP e.g Strawberry</h2>
                            <ul>
                                <li>TERM: 12 MONTHS</li>
                                <li>PRICE: P100.00 `(per unit)`</li>
                                <li>PROFIT: P300.00</li>
                                <li>PERCENTAGE PROFIT: 300%</li>
                                <li>TOTAL RETURNS: P400.00</li>
                            </ul>

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default StockCards