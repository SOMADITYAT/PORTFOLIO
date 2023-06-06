import React from 'react'
import Section from '../comman/section/Section'
import avtar from "../../assets/Avtar.jpg"

const Testimonial = () => {
    const Testimonials = [
        {
            id: 1,
            image: avtar,
            name: "jolly",
            Comment:
                "Something ebony from this pallas raven such nights . marvelled i fowl rare this i , said tinked soul door sir nodded ."
            ,
        },
        {
            id: 2,
            image: avtar,
            name: "jolly",
            Comment:
                "Something ebony from this pallas raven such nights . marvelled i fowl rare this i , said tinked soul door sir nodded ."
            ,
        },
        {
            id: 3,
            image: avtar,
            name: "jolly",
            Comment:
                "Something ebony from this pallas raven such nights . marvelled i fowl rare this i , said tinked soul door sir nodded ."
            ,
        }

    ]
    return (
        <Section title="Testimonials ✉️" subtitle="this is
     what my other clients have to say about me. I accept clients from all around the world   ">
            <div className='max-w-xl flex flex-col gap-2'>
                {Testimonials.map(({ id, image, name, Comment }) => (
                    <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                        <div className='w-1/3'>
                            <img src={image} className='w-20 h-20 object-cover object-top pt-2' alt="avtar" />
                        </div>
                        <div  className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                            <h3 className='text-xl font-semibold'>{name}</h3>
                            <p className='text-sm font-extralight'>{Comment}</p>
                        </div>
                    </div>

                ))}
            </div>
        </Section>
    )
}

export default Testimonial