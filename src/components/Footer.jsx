import React from 'react'

import { PrimaryButton } from './Button';

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/ashwin221199'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ashwin-chandurkar-0/'
    },
    // {
    //     label: 'Twitter X',
    //     href: 'https://x.com/codewithsadee_'
    // },
    {
        label: 'Instagram',
        href: '#'
    },
    // {
    //     label: 'CodePen',
    //     href: 'https://codepen.io/codewithsadee'
    // }
];


const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:wax-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <PrimaryButton
                            label='Start project'
                            icon="chevron_right"
                            href="mailto:your_email@example.com"
                            className="mt-8 reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                                        >{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a
                        href="/"
                        className="logo reveal-up"
                    >
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className=""
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; {new Date().getFullYear()}
                        <span className='text-zinc-200'> Ashwin Chandurkar</span>.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer