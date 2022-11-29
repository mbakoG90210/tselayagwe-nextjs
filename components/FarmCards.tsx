import React from 'react'

type Props = {}

function FarmCards({ }: Props) {
    return (
        <>
            <main className=" items-center text-center text-white mt-28">
                {/* Parallax Background */}
                <section
                    className="flex-row flex-wrap h-fit  bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1542365775-6e6177a8e296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)",
                    }}
                >

                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1603122768973-3c7c7cda1550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="tractor" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Farm machinery</h2>


                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1565153907400-7e01a9ab25f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="rusty chain and axle" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Machinery repairs</h2>


                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1527846884039-a29196edc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" alt="farm harvesto" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Farm equipment Accessories</h2>


                        </div>
                    </div>
                    <div className="card w-96 glass m-10">
                        <figure><img src="https://images.unsplash.com/photo-1518994255497-c5f17690567f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="fencing and wiring" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Farm Fencing and Demacationing</h2>

                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default FarmCards