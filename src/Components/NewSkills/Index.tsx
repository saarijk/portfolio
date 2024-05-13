import React from 'react'
import SkillCard from './SkillCard';
import reactImg from '@/assets/logos/reactLogo.png';
import tsImg from '@/assets/logos/tsLogo.png';
import gitImg from '@/assets/logos/gitLogo2.png';
import gqlImg from '@/assets/logos/graphQLlogo.png';
import ideaImg from '@/assets/idea.png';
import webIcon from '@/assets/logos/Code.png';

type Props = {}

function NewSkills({ }: Props) {
    return (
        <>
            <div className="h-[50vh] w-full font-montserrat flex justify-center items-center">
                <div className="w-5/6 h-5/6 max-w-[1080px]">
                    <h1 className="text-5xl font-bold text-center mt-[-50px]">Skills</h1>
                    <div className="flex flex-wrap justify-center gap-3 mt-[50px]">
                        <SkillCard name={'GitHub'} logo={gitImg} description={'Experienced in using GitHub to track changes in code repositories. Familiar with commit, push, pull, and branch management.'} lightBg={false} />
                        <SkillCard name={'Web Development'} logo={webIcon} description={'Skilled in frontend web development, creating visually appealing and responsive UIs. Proficient in HTML and CSS to build interactive and dynamic websites.'} lightBg={true} />
                        <SkillCard name={'TypeScript'} logo={tsImg} description={'Knowledgeable about type annotations, interfaces, modules, and other TS features for enhanced code quality.'} lightBg={false} />
                        <SkillCard name={'React'} logo={reactImg} description={'Experienced in building UIs using React. Knowledgeable about state management and other core concepts in React development.'} lightBg={true} />
                        <SkillCard name={'GraphQL'} logo={gqlImg} description={'Familiar with the basics of GraphQL integration for data querying and manipulation, using a schema-first approach and Apollo Server.'} lightBg={false} />
                        <SkillCard name={'Lifelong Learning'} logo={ideaImg} description={'Committed to ongoing learning and growth, actively seeking out opportunities to expand knowledge and expertise, ensuring adaptability and readiness to tackle new challenges.'} lightBg={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewSkills