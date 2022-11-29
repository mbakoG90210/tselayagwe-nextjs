import React from 'react'

type Props = {}

const TradingCards = (props: Props) => {
    return (
        <>
            <main className=" items-center text-center text-white mt-28">
                {/* Parallax Background */}
                <section
                    className="flex-row flex-wrap h-fit  bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1634992798921-b968401c7b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80)",
                    }}
                >

                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1504867691040-8e85c5f31260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="cattle feeding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Cattle kraals and Feedlots</h2>
                            <p>Sources of cattle for procuement, processing and distribution of beef and beef products</p>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://media.istockphoto.com/id/184332672/photo/slaughter-house.jpg?s=612x612&w=is&k=20&c=Xk0PvRbsc2ZaNLhMtw7nQLtwaESnpwkZ-iPCh1YHGKM=" alt="cattle  being weighed" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Weighing Cow carcasses</h2>
                            <p>Potentials beasts for purchase are weighed and examined in order to form a fair valuation price </p>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1611038333075-2efd28705f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fresh beef meat</h2>
                            <p>Processed beef cuts on display</p>

                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1625604086988-6e41981275fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="uncooked seasoned beef in pan" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Delivery to a happy client</h2>
                            <p>Meats are delivered from the processing facility as per orders by the house holds</p>

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default TradingCards