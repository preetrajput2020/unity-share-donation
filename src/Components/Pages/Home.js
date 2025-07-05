import React from "react";
import donation from "../../assets/images (1).jpeg";
import consume from "../../assets/download (2).png";
import "../../index.css";
import sustainable from "../../assets/sustainable.jpg";
import poverty from "../../assets/goal01-nopoverty.webp";
import hunger from "../../assets/goal02-zerohunger.webp";
import health from "../../assets/goal03-goodhealth.webp";
import education from "../../assets/goal04-qualityedu.webp";
import equality from "../../assets/goal05-genderequality.webp";
import water from "../../assets/goal06-cleanwater.webp";
import clean from "../../assets/goal17-cleanenergy.webp";
import work from "../../assets/goal08-decentwork.webp";
import industry from "../../assets/goal09-industry.webp";
import reduced from "../../assets/goal10-reduceinequalities.webp";
import cities from "../../assets/goal11-cities.webp";
import responsible from "../../assets/goal12-consumption.webp";
import climate from "../../assets/goal13-climate.webp";
import below from "../../assets/goal14-marinelife.webp";
import land from "../../assets/goal15-landlife.webp";
import peace from "../../assets/goal16-peace.webp";
import goals from "../../assets/goal17-partnerships.webp";
import Logo from "../Authentication/LogoIcon";
import Fq from "./Fq";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/upload")
  }

  function clickHandler1() {

    navigate("/list")
  }
  return (
    <div className="flex flex-col gap-12 ">
      <div className="flex justify-between items-center bg-[#daf3b2] pr-[20px] h-[70px]  w-[100vw] pl-[20px]">
      <Logo/>
        <nav className="">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/userSection">Upload</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQs</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex  w-[85vw] h-[60vh] mx-auto ">
          <div className="flex justify-evenly gap-16 bg-[#fff] rounded-2xl">
            <div className="w-[40vw] flex items-center">
              <img
                className="w-[30vw] h-[20vw] ml-10 rounded-lg shadow-xl shadow-slate-500"
                src={donation}
                alt="donation"
              ></img>
            </div>
            <div className="w-[43vw] flex flex-col items-center justify-evenly">
              <div>
                <p className="paragraph font-semibold leading-8 text-2xl text-[#466c17]">
                  {" "}
                  By sharing unused items, you contribute to a sustainable and
                  ethical cycle. Your support fosters a culture of conscious
                  living, reducing waste and promoting a greener, more
                  responsible future. Join us in making a positive impact on the
                  environment and society.
                </p>{" "}
              </div>
              <div className="">
                <button
                  onClick={clickHandler}
                  className=" w-60 bg-[#5A911F] hover:cursor-pointer h-10 rounded-lg text-[#fff] font-semibold animate-bounce animate-ping}"
                >
                  Share Your Item
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  w-[85vw] h-[60vh] mx-auto ">
          <div className="flex justify-evenly gap-16 bg-[#fff] rounded-2xl">
            <div className="w-[43vw] flex flex-col items-center justify-evenly">
              <div>
                <p className="paragraph font-semibold leading-8 text-2xl text-[#466c17] ml-5 animate-slide-in">
                  {" "}
                  By Sharing unused items, you contribute to a sustainable and
                  ethical cycle. Your support fosters a culture of conscious
                  living, reducing waste and promoting a greener, more
                  responsible future. Join us in making a positive impact on the
                  environment and society.
                </p>{" "}
              </div>
              <div className="">
                <button
                  onClick={clickHandler1}
                  className=" w-60 bg-[#5A911F] hover:cursor-pointer h-10 rounded-lg text-[#fff] font-semibold animate-bounce animate-ping}"
                >
                  Take It!
                </button>
              </div>
            </div>

            <div className="w-[40vw] flex items-center">
              <img
                className="w-[30vw] h-[20vw] ml-10 rounded-lg shadow-xl shadow-slate-500"
                src={consume}
                alt="donation"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col w-[85vw] bg-[#fff] mx-auto gap-14 rounded-xl">
        <div className=" flex justify-center">
          <h1 className="text-5xl font-bold mt-6">Motivate! to Donate </h1>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-col w-[40vw] gap-11">
            <div>
              <h1 className="font-bold text-3xl text-[#2f1e40bb]">
                The 17 Sustainable Development Goals of the United Nations
              </h1>
            </div>
            <div>
              <p className="">
                In 2015, the United Nations created 17 Sustainable Development
                Goals and aimed to achieve them by 2030. All 193 United Nations
                Member States agreed on these\ 17 goals to end poverty, ensure
                prosperity, and protect the planet.
              </p>
            </div>
          </div>

          <div>
            <img className="w-[40vw] h-[40vh]" src={sustainable} />
          </div>
        </div>
        {/* main */}

        <div className="grid   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={poverty} />
            </div>
            <div>
              <h1 className="font-bold text-3xl">No Poverty</h1>
            </div>
            <div>
              <p className="font-semibold">
                End poverty in all its forms, everywhere.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={hunger} />
            </div>
            <div>
              <h1>Zero Hunger</h1>
            </div>
            <div>
              <p>
                End hunger, achieve food security and improved nutrition, and
                promote sustainable agriculture.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={health} />
            </div>
            <div>
              <h1>Good Health and Wellbeing</h1>
            </div>
            <div>
              <p>
                Ensure healthy lives and promote well-being for all, at all
                ages.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={education} />
            </div>
            <div>
              <h1>Quality Education</h1>
            </div>
            <div>
              <p>
                Ensure inclusive and equitable quality education and promote
                lifelong learning opportunities for all
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={equality} />
            </div>
            <div>
              <h1>Gender Equality</h1>
            </div>
            <div>
              <p>Achieve gender equality and empower all women and girls.</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={water} />
            </div>
            <div>
              <h1>Clean Water and Sanitation</h1>
            </div>
            <div>
              <p>
                Ensure availability and sustainable management of water and
                sanitation for all.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={clean} />
            </div>
            <div>
              <h1>Affordable and Clean Energy</h1>
            </div>
            <div>
              <p>
                Ensure access to affordable, reliable, sustainable, and modern
                energy for all.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={work} />
            </div>
            <div>
              <h1>Decent Work and Economic Growth</h1>
            </div>
            <div>
              <p>
                Promote sustained, inclusive, and sustainable economic growth,
                full and productive employment, and decent work for all
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={industry} />
            </div>
            <div>
              <h1>Industry, Innovation and Infrastructure</h1>
            </div>
            <div>
              <p>
                Build resilient infrastructure, promote inclusive and
                sustainable industrialization, and foster innovation.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={reduced} />
            </div>
            <div>
              <h1>Reduced Inequalities</h1>
            </div>
            <div>
              <p>Reduce inequality within and among countries.</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={cities} />
            </div>
            <div>
              <h1>Sustainable Cities and Communities</h1>
            </div>
            <div>
              <p>
                Make cities and human settlements inclusive, safe, resilient,
                and sustainable.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={responsible} />
            </div>
            <div>
              <h1>Responsible Consumption and Production</h1>
            </div>
            <div>
              <p>Ensure sustainable consumption and production patterns</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={climate} />
            </div>
            <div>
              <h1>Climate Action</h1>
            </div>
            <div>
              <p>
                Take urgent action to combat climate change and its impacts.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={below} />
            </div>
            <div>
              <h1>No Poverty</h1>
            </div>
            <div>
              <p>End poverty in all its forms, everywhere.</p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={land} />
            </div>
            <div>
              <h1>Life on Land</h1>
            </div>
            <div>
              <p>
                Protect, restore, and promote sustainable use of terrestrial
                ecosystems, manage forests, combat desertification and
                biodiversity loss, and halt and reverse land degradation.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={peace} />
            </div>
            <div>
              <h1>Peace, Justice and Strong Institutions</h1>
            </div>
            <div>
              <p>
                Promote peaceful and inclusive societies for sustainable
                development, provide access to justice for all, and build
                effective, accountable, and inclusive institutions
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-evenly justify-between
    hover:scale-105 hover:shadow-2xl hover:shadow-black  transition duration-300 ease-in rounded-xl gap-3 p-4 mt-10 ml-5"
          >
            <div>
              <img className="w-[10vw]" src={goals} />
            </div>
            <div>
              <h1>Partnerships</h1>
            </div>
            <div>
              <p>
                Strengthen the means of implementation and revitalize the global
                partnership for sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
   <Fq/>
    </div>
  );
};

export default Home;
