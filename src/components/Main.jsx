import ScrollIndicator from "./ScrollIndicator"
import React from 'react'

function Main() {
    return (
        <>
            <header>
                <div className='bg-gray-300 shadow-md'>
                    <ul className='flex space-x-5 w-10/12 h-16 items-center px-20 font-semibold '>
                        <li><a className='hover:text-orange-400 cursor-pointer'>Home</a></li>
                        <li><a className='hover:text-orange-400 cursor-pointer'>About Me</a></li>
                        <li><a className='hover:text-orange-400 cursor-pointer'>Contact Me</a></li>
                        <li><a className='hover:text-orange-400 cursor-pointer'>Store</a></li>
                    </ul>
                </div>
            </header>
            <ScrollIndicator />
            <div className='px-20'>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
                <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusantium itaque veniam fuga voluptatibus ratione similique, illo, hic quo voluptatem aut iste voluptates molestias ex ullam ipsam dolor nobis dolorem!</p>
            </div>
        </>

    )
}

export default Main