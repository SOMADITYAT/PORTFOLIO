import React from 'react'
import Section from '../comman/section/Section'

import ECommerce from '../../assets/E-commerce.png'
import Research from '../../assets/research.jpg'
import Programing from '../../assets/programing.jpg'
import Mobile from '../../assets/mobile2.png'


const Services = () => {
    const services = [
        {
            id:1,
            image:ECommerce,
            title:"ECommerce Website"
        },
        {
            id:2,
            image:Programing,
            title:"web Developing"
        },
        {
            id:3,
            image:Mobile,
            title:"Mobile Developing"
        },
        {
            id:4,
            image:Research,
            title:"Research and Developing "
        },


    ] 

  return (
    <Section title='Services 🛠️'
    subtitle="Here are all the services that I provide to my clients. I hope I
    I offer the services that you are looking for . If you don't find something
    that you are looking for . If you don't find something that you are looking 
    for than please send me an email."> 

    <div className='grid gap-10 lg:grid-cols-2'>
        {
            services.map(({id , image ,title}) => (
                <div key={id}
                 className='flex flex-col items-center justify-center p-5 shadow-lg 
                 dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 '
                >
                    <img src={image}  alt="image" className='w-36 h-36 md:w-44 md:h-44 object-contain' />
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>
            ))
        }
    </div>

    </Section>  
  )
}

export default Services
