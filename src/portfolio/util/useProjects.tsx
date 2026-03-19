import { useEffect, useState } from "react";
import projects_data from '../projects.json';

export interface Project {
    name: string,
    id: string,
    summary: string,
    tags: string[],
    time: string,
    image: string,
    link: string,
    hide?: boolean,
    relevancy: number,
    extra_label?: string
}

function useProjects() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        projects_data.sort((a: Project, b: Project) => a.relevancy - b.relevancy);
        setProjects(projects_data);
    }, []);

    return projects;
}

export default useProjects;