import React from 'react'
import BlogEntry from './BlogEntry'

type Props = {}

function Blog({ }: Props) {

    return (
        <>
            <div className="w-full h-[100vh] flex justify-center align-center items-center">
                <div className="font-montserrat h-5/6 w-2/3 mt-[60px]">
                    <h1 className="font-bold text-4xl mb-[25px]">Entries</h1>
                    <BlogEntry blogTitle={'First Post'} content={"Starting a blog has always been something I've wanted to do, but like many things in life, it always seemed to get pushed to the bottom of my to-do list. However, today I'm taking that leap and putting my thoughts out into the world, and I invite you all to join me on this journey as I share my experiences, insights, and musings on topics related to web development."} />
                </div>
            </div>
        </>
    )
}

export default Blog