import React from 'react'

type Props = {
    blogTitle: string;
    content: string;
}

function BlogEntry({ blogTitle, content }: Props) {
    const publishedAt = new Date();

    return (
        <>
            <div className="h-auto w-full border-2 border-l-gray-300 border-t-gray-300 border-gray-500 hover:border-r-gray-300 hover:border-b-gray-300 hover:border-gray-500 transition-all duration-300 rounded-lg p-5 mb-[20px]">
                <div className="flex justify-between mb-3">
                    <h2 className="font-bold text-2xl">{blogTitle}</h2>
                    <p className="text-sm italic py-1">{publishedAt.toDateString()}</p>
                </div>
                <p className="text-lg">{content}</p>
            </div>
        </>
    )
}

export default BlogEntry