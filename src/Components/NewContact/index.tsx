import React from 'react'
import messageImg from "@/assets/logos/message.png";
import LinkCard from './LinkCard';

type Props = {}

function Contact({ }: Props) {
    return (
        <>
            <div className="h-[55vh] w-full font-montserrat flex justify-center items-center">
                <div className="w-5/6 h-5/6 flex flex-col max-w-[1080px]">
                    {/* top half */}
                    <div className="w-full h-[350px] flex bg-slate-100 mt-[70px] rounded-xl">
                        <div className="w-1/2 flex flex-col justify-center ml-8">
                            <h1 className="text-5xl font-bold text-left mt-[-25px] mb-3">Reach Out</h1>
                            <p className="text-md">If you have any inquiries or would like to connect, I encourage you to reach out to me through LinkedIn where I'll be delighted to engage in meaningful conversations about projects, opportunities, or shared interests :)</p>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={messageImg} className="h-[320px] p-3" />
                        </div>
                    </div>
                    {/* bottom half / links */}
                    <div className="flex gap-8 justify-center">
                        <LinkCard linkName={"LinkedIn"} link={"https://www.linkedin.com/"} />
                        <LinkCard linkName={"GitHub"} link={"https://github.com/"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact