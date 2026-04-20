import React from "react"
import bgImg from "../assets/aboutImage.svg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="w-screen">
          <img src={bgImg} alt="" className="w-full h-10/12 object-cover" />
          
          <div className="px-6 text-gray-900 mb-14">
              <h1 className="font-bold text-6xl py-10">Don't squeeze in a sedan when you could relax in a van.</h1>
              <p className="text-2xl pb-7">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
              <p className="text-2xl">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          </div>
          
          <div className="flex justify-center py-7 pb-24">
            <div className="bg-orange-300 text-gray-950 px-8 pb-8 rounded-lg w-11/12 md:w-3/4 lg:w-2/3">
              <h2 className="m-0 py-9 font-bold text-3xl">Your destination is waiting.<br />Your van is ready.</h2>
              <Link className="inline-block bg-gray-950 text-white rounded-lg px-4 py-2 font-bold" to="/vans">Explore our vans</Link>
            </div>
          </div>
        </div>
    );
}