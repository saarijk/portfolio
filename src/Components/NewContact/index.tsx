import React from 'react'

type Props = {}

function NewContact({ }: Props) {
    return (
        <>
            <div className="h-[100vh] w-full font-montserrat flex justify-center items-center">
                <div className="w-5/6 h-5/6">
                    <h1 className="text-5xl font-bold text-left mt-[100px] mb-[40px]">Contact Me</h1>
                    <div>Insert contact form?</div>
                </div>
            </div>
        </>
    )
}

export default NewContact