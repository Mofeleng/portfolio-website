"use client";
import PreviewProject from '@/components/preview-project';
import { getVariablePosts } from '@/lib/graphql/past-work';
import { Project } from '@/lib/interfaces/projects';
import React, { useState, useEffect }from 'react'

export default function Projects() {
  const [ projects, setProjects] = useState<Project[]>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVariablePosts('portfolio');
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-5 mb-12">
      { projects && projects.map((project) => (
        <PreviewProject key={project.id} project={project} />
      ))}
    </div>
  )
}
