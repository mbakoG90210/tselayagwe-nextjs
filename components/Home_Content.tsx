import React from "react";

type Props = {};

function Home_Content({ }: Props) {
  return (
    <div>
      <main className="flex flex-col items-center text-center mt-28">
        <section className="p-20 space-y-8 mx-28">
          <p className="my-5 text-2xl py-6 font-normal justify-center">
            We focus on the 5 key sectors of the value chain to help you
            overcome times of inflations and gain unbeatable returns
          </p>
          <ul className="my-5  text-2xl text-center font-medium flex flex-col flex-direction: column; justify-center  align-items: center;">
            <li className="my-2"> Land development</li>
            <li className="my-2"> Seed production </li>
            <li className="my-2"> Agro-processing </li>
            <li className="my-2"> Transportation and logistics </li>
            <li className="my-2"> Distribution </li>
          </ul>
        </section>

        {/* Parallax Background */}
        <section
          className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          }}
        ></section>

        {/* Content */}
        <section className="p-20 space-y-8 mx-28 text-center">
          <div>
            <h3 className="my-2.5 text-2xl text-center font-medium">
              {" "}
              START WITH AS LITTLE AS P5.00 PER CROP{" "}
            </h3>
            <p> Make a 100% profit from an investment as little as P5.00</p>
            <br />
            <h3 className="my-2.5 text-2xl text-center font-medium">
              {" "}
              EARN WEEKLY, QUARTERLY AND OR YEARLY{" "}

            </h3>
            <p>
              Check out our trading and investment plans, and find a package that
              suits your pocket and financial plans</p>

            <br />
            <h3 className="my-2.5 text-2xl text-center font-medium">
              {" "}
              INVEST IN ECONOMIC TRANSFORMATION{" "}
            </h3><p>
              Impact investing to improve food security, community development,
              job creation, inclusivity, wealth distribution and gain returns</p>

            <br />
          </div>
          <br />
          <div>
            <h3 className="my-2.5 text-2xl text-center font-medium">
              {" "}
              CROWDFUND THE DEVELOPMENT OF A SMARTFARM{" "}
            </h3><p>
              In a world of biogenetics, technology solutions and major
              inflations, we focus on engineering the cost and practice of farming
              to be affordable to industrialise and become a transparent digital
              investment that asserts thorough and real time update for
              affordable, well managed and risk free organic consumable results
              and financial empowerment from farmer to consumer and from farm to
              fork. Everyone plays a role.</p>

            <br />
            <h3 className="my-2.5 text-2xl text-center font-medium">
              {" "}
              NO NEED TO SELL YOUR FARM LAND{" "}
            </h3><p>
              With as little as P5000, get your farm listed to be fully developed
              into a smart farm.</p>

          </div>
        </section>
        {/* Parallax Background */}
        <section
          className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          }}
        ></section>
      </main>
    </div>
  );
}

export default Home_Content;
