"use client";

import React, { useEffect, useState} from 'react'
import { getVariablePosts } from '@/lib/graphql/past-work';
import { gql, GraphQLClient } from 'graphql-request';
import {Project } from '@/lib/interfaces/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function PastWork() {
    const [ work, setWork ] = useState<Project[]>()

    useEffect(() => {
        const fetchData = async () => {
            const work = await getVariablePosts('work');
            setWork(work);
        }
        fetchData()
    }, [])
    
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-5 mb-12">
    { work && work.map((project) => (
        <Link href={`/project/${project.slug}`} key={project.id}>
            <div className="flex flex-col gap-4">
            <div className="">
                <Image src={project.coverPhoto.url} alt={project.name} width={500} height={500} className="rounded-lg object-cover" />
            </div>
            <div className='space-y-3'>
                <h2 className="text-3xl font-bold">{ project.name }</h2>
                <p className=""> {project.shortDescription }</p>
            </div>
            </div>
        </Link>
    ))}
    </div>
  )
}
