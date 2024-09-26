import React from 'react'

type Props = {}

function PortfolioFlair({ }: Props) {
    return (
        <>
            <div className="border-r-2 border-black h-full flex flex-col justify-end">
                {/* left */}
                <div className="w-full flex justify-center items-center align-center">
                    <p className="writing-vertical text-sm px-[8px]">WEB DEVELOPMENT</p>
                </div>
            </div>
            <div className="h-full flex flex-col justify-end">
                {/* right */}
                <div className="w-full justify-center pl-2 items-center align-center grid grid-cols-3">
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">P</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">O</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">R</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">T</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">F</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">O</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">L</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">I</p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl px-1 text-center">O</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioFlair