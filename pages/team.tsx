
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "styles/Team.module.css";

// import required modules
import { Navigation, Pagination } from "swiper";


type Props = {}

function team({ }: Props) {


    return (
        <>
            <Navbar />
            <h1 className=' uppercase tracking-[20px] text-primary-focus  text-center text-2xl font-bold my-20'> Team and Partner Sites</h1>
            <div
                className="bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)"
                }}
            >
                <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0" />
                <div>
                    <div className="min-h-screen flex justify-center">
                        <div className="grid grid-cols-2 gap-4 items-center z-10">
                            <div className="max-w-lg text-center sm:text-left">
                                <h2 className="text-4xl font-bold text-gray-100 tracking-tight mx-10">
                                    The home of <br className="hidden sm:block lg:hidden" />the technologicaly
                                    advanced farm supply chain and Sustainable Investment portfolios
                                </h2>
                                <p className="mt-4 text-gray-300 mx-10">
                                    Become a partner of the future of farming in Africa
                                </p>
                                <div className="flex flex-row  items-center space-x-3 mt-5 ml-10">

                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-400 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            alt=""
                                            className="w-3"
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                        />
                                    </a>
                                    <a
                                        href="https://in.linkedin.com"
                                        target="_blank"
                                        className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-blue-500 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300"
                                    >
                                        <img
                                            alt=""
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                                            className="w-3"
                                        />
                                    </a>
                                </div>
                            </div>

                            {/*Swiper image swipe implementation*/}
                            <div className="mx-10 max-w-fit flex rounded-1xl bg-accent-focus">
                                <div className=" flex-col  self-center overflow-clip ">
                                    <Swiper
                                        slidesPerView={'auto'}
                                        centeredSlides={false}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <blockquote className="text-left flex-wrap">
                                                <div className="relative">
                                                    <div className="relative">
                                                        <img
                                                            src="assets/jpeg/masSolutions.jpeg"
                                                            alt="company logo"
                                                            className="object-cover w-max h-60 rounded-t-1xl"
                                                        />
                                                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                                                    </div>
                                                </div>
                                                <div className="relative m-5 p-5">
                                                    <svg
                                                        className="absolute left-0 w-6  fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <p className="text-gray-100 text-xl px-5">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                                        tempora.
                                                    </p>
                                                    <svg
                                                        className="absolute right-0  w-6 fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <div className="text-sm mt-5 mx-5">
                                                        <p className="font-medium text-white">MAS-Solutions</p>
                                                        <p className="mt-1 text-gray-300">ICT CO </p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <blockquote className="text-left flex-wrap">
                                                <div className="relative">
                                                    <div className="relative">
                                                        <img
                                                            src="assets/jpeg/lisbethInvestments.jpeg"
                                                            alt="company logo"
                                                            className="object-cover w-max h-60 rounded-t-1xl"
                                                        />
                                                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                                                    </div>
                                                </div>
                                                <div className="relative m-5 p-5">
                                                    <svg
                                                        className="absolute left-0 w-6  fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <p className="text-gray-100 text-xl px-5">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                                        tempora.
                                                    </p>
                                                    <svg
                                                        className="absolute right-0  w-6 fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <div className="text-sm mt-5 mx-5">
                                                        <p className="font-medium text-white">LISBETH INVESTMENTS</p>
                                                        <p className="mt-1 text-gray-300">INVESTMENT PORTFOLIO COMPANY </p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <blockquote className="text-left flex-wrap">
                                                <div className="relative">
                                                    <div className="relative">
                                                        
                                                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                                                    </div>
                                                </div>
                                                <div className="relative m-5 p-5">
                                                    <svg
                                                        className="absolute left-0 w-6  fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <p className="text-gray-100 text-xl px-5">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                                        tempora.
                                                    </p>
                                                    <svg
                                                        className="absolute right-0  w-6 fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <div className="text-sm mt-5 mx-5">
                                                        <p className="font-medium text-white">TSELA YAGWE FOODS</p>
                                                        <p className="mt-1 text-gray-300">CATERING AND BEVERAGE COMPANY </p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <blockquote className="text-left flex-wrap">
                                                <div className="relative">
                                                    <div className="relative">
                                                        <img
                                                            src="assets/jpeg/tygeoDev.jpeg"
                                                            alt="TY geo logo"
                                                            className="object-cover w-max h-60 rounded-t-1xl"
                                                        />
                                                        <div className="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0" />
                                                    </div>
                                                </div>
                                                <div className="relative m-5 p-5">
                                                    <svg
                                                        className="absolute left-0 w-6  fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <p className="text-gray-100 text-xl px-5">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                                        assumenda officiis sit amet itaque eveniet accusantium corporis
                                                        tempora.
                                                    </p>
                                                    <svg
                                                        className="absolute right-0  w-6 fill-indigo-500"
                                                        viewBox="0 0 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                                                    </svg>
                                                    <div className="text-sm mt-5 mx-5">
                                                        <p className="font-medium text-white">T.Y-GEO DEVELOPMENTS</p>
                                                        <p className="mt-1 text-gray-300">GEOLOGICAL DEVELOPMENT COMPANY</p>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default team