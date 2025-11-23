import React from 'react'
import assets from '../assets/assets'
import Card from '../Components/MainCard'
import Button from '../Components/Button'
import { Typing } from '../Components/Typing'
import About from "./About";

import Qualification from "./Qualification";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import Skills from './Skills'
function Home({isOpen, setIsOpen}) {
console.log("isOpen", isOpen);

  return (
    <>
    <div className={`min-h-[80vh] flex flex-col-reverse sm:flex-row items-center ${isOpen ? 'mt-80' : 'mt-20' } sm:gap-x-6 sm:justify-around md:px-10 sm:px-6 px-3 sm:gap-y-3 gap-y-8`}>
        {/* <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%, transparent_100%)]"></div> */}

      <div className="main text-white flex flex-col sm:items-start items-center  gap-y-3">
        <h2 className='flex flex-col justify-center text-4xl'>Hey I'm <span className='text-cyan-300 text-2xl sm:3xl md:text-4xl'>Muhammad Isnaan Ashraf</span></h2>
        <p className='text-3xl text-fuchsia-300'><Typing /></p>
        <p className='text-gray-500'>A Full Stack developer with a passion for creating innovative and user-friendly web applications.</p>
        <div className='flex gap-x-6 mt-2'>
          <Button text="Contact Me" />
          <Button text="Resume" /> 
        </div>
      </div>
      <div className="img">
        <Card />
      </div>
    </div>
     <About />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Qualification />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Skills />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Services />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Projects />
        <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" />
        <Contact />
        {/* <hr className=" text-gray-900 h-0.5 mx-10 overflow-x-hidden  mt-10 mb-6" /> */}
    </>
  )
}

export default Home













// challenge 1 : 

// db.sales.aggregate([
//   {$match: {price : {$gte : 50}}}
//   ])

// // CHALLENGE 2 :
// const {date }= req.body
// const givenDate= new Date (date)
// const Date30DaysAgo = givenDate.setDate(last30Days - 30)
// db.sales.aggregate([
//   {$match: { quantity: {$gt : 10}, date : {$gt : Date30DaysAgo, $lt : givenDate} }}
// ])


// // CHALLENGE 3:

// db.sales.aggregate([
//   {$project :{
// _id :0,
// item : 1,
// revenue : {$multiply : [ "$price", "$quantity" ]},
// discountedPrice: {multiply : ["$price", 0.9]} 
//   },
// }
// ])

// // CHALLENGE 4:

// db.sales.aggregate([
//   {$group : {
//     category : {$category},
//     revenue : {$sum : {$multiply : ["$price", "$quantity"]}},
//     numberOfSales: { $sum: 1 },
//     heighestSingleSale : {$max : {$multiply : ["$price", "$quantity"]}}
//   }},
// ])

// // CHALLENGE 5:
// db.sales.aggregate([
//   {$project : {
//     item_name : {$item},
//     revenue : {$max : {$multiply : ["price", "quantity"]}}
//   }},
//   {$sort : {$quantity : -1}},
//   {$limit : 3},

// ])
