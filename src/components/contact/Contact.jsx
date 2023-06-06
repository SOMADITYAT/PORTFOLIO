import React from 'react'
import Section from '../comman/section/Section'
import contact from "../../assets/phone.png"

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {

    const Social = [
        {
            id: 1,
            link: "https://twitter.com",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://facebook.com",
            icon: <FaFacebook />
        },
        {
            id: 1,
            link: "https://linkedin.com",
            icon: <FaLinkedin />
        },
    ]
    return (
        <Section title="Contact 📞"
            subtitle="These are the ways you can gt in touch with me. 
      Hope to hear from you soon ">

            <div className='flex flex-col items-center justify-center gap-8 text-center'>
                <div>
                    <img src={contact} alt="contact" className='w-32 h-32' />
                </div>
                <div>
                    <p className='max-w-xs  md:max-w-lg  font-extralight'>
                        I am open to talk regarding freelacing or full-time opportunitiesaccordion.
                        Fall free to contact me using you preferred medium
                    </p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {
                        Social.map(({ id, link, icon }) => (
                            <a href={link} target='_blank' 
                            className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
                        ))
                    }
                </div>

                {/* form */}

                <div className='p-8 text-left w-full'>
                    <form action="https://getform.io/f/8b633bed-8b0b-459c-a878-b1818de0cdb9" method='POST'>
                        <div className='gap-4 w-full'>
                            <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>Name</label>
                                <input type="text"
                                name='name'
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                                dark:bg-gray-900 dark:text-white' />
                            </div>
                            <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>Phone</label>
                                <input type="Phone"
                                name='Phone'
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                                dark:bg-gray-900 dark:text-white' />
                            </div>
                            <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>Email</label>
                                <input type="email"
                                name='email'
                                className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                                dark:bg-gray-900 dark:text-white' />
                            </div>
                            <div className='flex flex-col '>
                                <label className='capitalize text-sm py-2 font-extralight'>Message</label>
                                <textarea name="message" rows="10"  className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400
                                dark:bg-gray-900 dark:text-white'></textarea>
                              
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-left'>
                                <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white 
                                px-4 py-4 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105'>send message </button>
                        </div>
                    </form>

                </div>
            </div>

        </Section>
    )
}

export default Contact