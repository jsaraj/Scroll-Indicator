import React, { useEffect, useState } from 'react'

function ScrollIndicator() {

    const [scroll, setScroll] = useState(0)


    const onScroll = (e) => {
        const winScroll = document.documentElement.scrollTop;
        const height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled=(winScroll/height)*100;
        setScroll(scrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])


    return (
        <div className='sticky top-0'>
            <div className='h-2 bg-gray-500 w-full'>
                <div className='bg-orange-500 h-2' style={{ width: `${scroll}%` }}></div>
            </div>
        </div>
    )
}

export default ScrollIndicator