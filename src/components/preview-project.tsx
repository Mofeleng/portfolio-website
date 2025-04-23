import React from 'react'
import { Project } from '@/lib/interfaces/projects';
import Image from 'next/image';
import { heading } from '@/lib/constants/fonts';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PreviewProject({ project }: { project: Project }) {
    return (
        <Link href={project.type == 'portfolio' ? project.url : `/project/${project.slug}`} key={project.id} target='blank'>
            <div className="flex flex-col gap-4">
                <div className="w-full h-[260px] relative">
                    <Image 
                        src={project.coverPhoto.url} 
                        alt={project.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="rounded-lg" 
                    />
                </div>
                <div className='space-y-3'>
                    <h2 className={cn("text-3xl font-bold", heading.className)}>{ project.name }</h2>
                    <p className=""> {project.shortDescription }</p>
                </div>
            </div>
        </Link>
    )
}
