import React from 'react'
import vision from "../../assets/Rectangle 16.png"
import approach1 from "../../assets/Rectangle 17.png"
import approach2 from "../../assets/Rectangle 18.png"
import process from "../../assets/Rectangle 19.png"
import Logo from '../Authentication/LogoIcon'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-[#fff]'>
        <div className="flex justify-between items-center bg-[#daf3b2] pr-[20px] h-[70px]  w-[100vw] pl-[20px]">
      <Logo/>
        <nav className="">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about" class="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/userSection">Upload</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </nav>
      </div>

  <div className=' flex flex-col about-content gap-12 '>
         
        <div className='mx-auto'><h1 className=' font-extrabold text-4xl'>About Us</h1></div>
       <div className='grid grid-cols-2 mx-auto w-[85vw] bg-[#DAF9C7] h-[52vh] rounded-2xl '>
           <div className='flex items-center'><img className='w-[35vw] h-[45vh] ml-3 rounded-xl' src={vision}/></div>
           <div className='flex flex-col gap-5 '>
            <h1 className='text-[#000] font-bold text-3xl'>Our Vision</h1>
            <p className='mr-2 leading-7'>Sharing resources positively impacts sustainability by promoting environmental 
                conservation, reducing waste, and conserving energy. It contributes to financial
                 savings, economic efficiency, and community resilience, fostering social cohesion
                 . Access to goods and services improves, and collaborative resource sharing encourages
                  innovation and cross-sector collaboration. Additionally, sharing resources can lead
                   to a reduction in greenhouse gas emissions,
                 contributing to a more equitable distribution of resources and addressing social
                  inequalities. .</p>
           </div>
       </div>


       <div className='grid grid-cols-2 mx-auto w-[85vw] h-[95vh] bg-[#DAF9C7] rounded-2xl'>
         
           <div className='flex flex-col gap-5 mt-5 '>
            <h1 className='text-[#000] font-bold text-3xl ml-2'>Our Approach</h1>
            <p className=' ml-2 leading-7'>Sharing resources positively impacts sustainability 
            by promoting environmental conservation, reducing waste, and conserving energy.
             It contributes to financial savings, economic efficiency, and community resilience, 
             fostering social cohesion. Access to goods and services improves, and collaborative resource 
             sharing encourages innovation and cross-sector collaboration. Additionally, sharing resources 
             can lead to a reduction in greenhouse gas emissions, contributing to a more equitable distribution 
             of resources and addressing social inequalities. Embracing a sharing mindset plays a crucial role in building a 
             sustainable and resilient future.
          </p>
            <div className=' flex flex-col gap-4 ml-3'>
                <p>1. Cost Savings</p>
                <p>2. Reduced Environment Impact</p>
                <p>3. Resource Conservation</p>
                <p>4. Waste Reduction </p>
                <p>5. Minimalism and Decluttering</p>
                <p>6. Access over Ownership </p>
                <p>7. Financial flexibility</p>
                <p>8. Promotion of Sustainable Practices</p>
            </div>
           </div>

           <div className='flex flex-col gap-8 mt-5 '>
            <img className='w-[35vw] h-[40vh] ml-3 rounded-xl' src={approach1}/>
            <img className='w-[35vw] h-[40vh] ml-3 rounded-xl' src={approach2}/>
            </div>
       </div>

       <div className='grid grid-cols-2 mx-auto w-[85vw] bg-[#DAF9C7] h-[52vh] rounded-2xl'>
           <div className='flex items-center'><img className='w-[33vw] h-[45vh] ml-3 rounded-xl' src={process}/></div>
           <div className='flex flex-col gap-5 '>
            <h1 className='text-[#000] font-bold text-3xl mt-5'>Our Process</h1>
            <p className='mr-2'>UnityShare is a groundbreaking
             website that empowers users to share a variety of resources,
              promoting community collaboration and sustainability. The platform
               facilitates easy sharing of tools, equipment, knowledge, and 
               skills, reducing the need for new purchases. Its user-friendly interface 
               encourages a circular and eco-friendly economy, optimizing
                resource use and minimizing waste.</p>
           </div>
       </div>

  </div>
            

    </div>
  )
}

export default About
