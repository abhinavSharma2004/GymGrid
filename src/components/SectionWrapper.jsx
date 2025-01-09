import React from 'react'

export default function SectionWrapper(props) {
    const{children, header, title, id} = props
    return (
    <section id = {id} className='min-h-screen flex flex-col gap-10'>
        <div className='bg-black py-10 flex flex-col gap-2 
        justify-center items-center p-4'>
            <p className='uppercase font-medium'> {header} </p>
            <h2 className='flex flex-row gap-1 font-semi-bold text-3xl sm:text-4xl md:text5xl lg:text6xl'>
                {title[0]}
                <span className='uppercase text-red-400'>{title[1]}</span>
                {title[2]}
            </h2>
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4'/>
        {children}
        <div className='gap-2'/>
    </section>
  )
}
