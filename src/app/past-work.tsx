"use client";

import React, { useEffect, useState} from 'react'
import { getVariablePosts } from '@/lib/graphql/past-work';
import {Project } from '@/lib/interfaces/projects';
import { cn } from '@/lib/utils';
import { heading } from '@/lib/constants/fonts';
import PreviewProject from '@/components/preview-project';

export default function PastWork() {
    const [ work, setWork ] = useState<Project[]>()
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const work = await getVariablePosts('work');
            setWork(work);
            setLoading(false);
        }
        fetchData()
    }, [])
    if (loading) {
        return (
        <div className="flex items-center justify-center h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
        )
    }

    if ( error) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full text-center py-10">
                <h2 className={cn("text-3xl font-bold", heading.className)}>Error fetching past work</h2>
                <p className="text-gray-500">Please try again later.</p>
            </div>
        )
    }
  return (
    <>
        <div className="grid md:grid-cols-2 gap-10 mt-5 mb-12">
            { work && work.map((project) => (
            <PreviewProject key={project.id} project={project} />
            ))}
        </div>
        { work && work.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full w-full text-center py-10">
                <h2 className={cn("text-3xl font-bold", heading.className)}>No past work found</h2>
                <p className="text-gray-500">Check back later for updates.</p>
            </div>
        )}
    </>
  )
}
