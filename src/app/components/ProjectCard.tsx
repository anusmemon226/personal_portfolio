import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const ProjectCard = ({ projectName, projectDescription }: { projectName: string, projectDescription: string }) => {
    return (
        <Link href={"/"} className="group aspect-square rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[url('/project.webp')] bg-cover bg-center flex flex-col items-center justify-center relative w-full h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-tl before:from-black before:to-transparent before:hover:bg-black before:hover:opacity-75 before:transition-all before:duration-150">
                <h2 className="relative text-2xl group-hover:text-3xl transition-all font-bold text-white z-10">{projectName}</h2>
                <p className='text-white group-hover:text-lg transition-all z-10 py-2'>{projectDescription}</p>
                <SquareArrowOutUpRight className='text-white z-10 absolute bottom-8 right-8' />
            </div>
        </Link>

    )
}

export default ProjectCard