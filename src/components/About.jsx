import React from 'react'


const aboutItems = [
    {
        label: 'Project done',
        number: 45
    },
    {
        label: 'Years of experience',
        number: 10
    }
];
const About = () => {

    return (
        <section id='about' className='section'>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 md:p-12 rounded-2xl reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:max-w-[80ch]">
                    Welcome to us! My name is Ashwin Chandurkar and I am a passionate front-end web developer who is passionate about creating visually stunning and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I bring designs to life using cutting-edge technologies like React, Node.js, Bootstrap, and Tailwind CSS. My expertise lies in creating flexible and performance-oriented web solutions that seamlessly combine aesthetics and functionality. Let's work together to turn your vision into an engaging digital experience!
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {/* <div className="flex items-center md:mb-2 ">
                                            <span className="text-2xl font-semibold md:text-4xl">
                                                {item.number}
                                            </span>
                                            <span className='text-sky-400  font-semibold md:text-3xl'>+</span>
                                        </div>

                                        <p className="text-sm text-zinc-400">
                                            {item.label}
                                        </p> */}
                                    </div>
                                )
                            })
                        }

                        <img 
                        src="/images/logo.svg" 
                        alt="logo" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About