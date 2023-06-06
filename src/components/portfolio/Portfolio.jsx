import React from 'react'
import Section from '../comman/section/Section'
import { FaLinkedinIn , FaFacebook, FaGithub } from "react-icons/fa";

import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"

const Portfolio = () => {

    const projects = [
        {
            id:1,
            image: p1,
            title:"Portfolio ",
            github:"https://github.com/SOMADITYAT/Templete.git"
            
        },
        {
            id:2,
            image: p2,
            title:"Programing",
            github:"https://github.com/SOMADITYAT/Templete.git"

        },
        {
            id:3,
            image: p3,
            title:"Best App",
            github:"https://github.com/SOMADITYAT/Templete.git"

        },
        {
            id:4,
            image: p4,
            title:"Best App",
            github:"https://github.com/SOMADITYAT/Templete.git"

        },
        {
            id:1,
            image: p1,
            title:"Best App",
            github:"https://github.com/SOMADITYAT/Templete.git"

        },
        {
            id:1,
            image: p1,
            title:"Best App",
            github:"https://github.com/SOMADITYAT/Templete.git"

        },
    ]
  return (
   <Section title="Portfolio 📋"
   subtitle="These are all the projects that I have worked on. 
   Sone of them I have worked before I gained some experience. So 
   go gained some experience . So go gentle on them.  "
   
     >
        <div className="container">
        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>

            {projects.map(({id , image , title , github}) => (
                <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300
                rounded-2xl overflow-hidden '>
                    <img src={image}  alt={title} className='w-2/3 h-80' />
                    <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github}  target='blank'><FaGithub/></a>
                    </div>
                </div>
               
            ))}

        </div>
        </div>
     
   </Section>
  )
}

export default Portfolio