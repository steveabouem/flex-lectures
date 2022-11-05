import { useState } from "react";
import Project from "./Project";

const ProjectsList = () => {
    const [newLanguage, setnewLanguage] = useState('');
    const [currentProject, setCurrentProject] = useState({ title: '', desc: '', stack: []});
    const [projects, setProjects] = useState([]);

    const updateLanguages = () => {
        setCurrentProject({...currentProject, stack: [...currentProject.stack, newLanguage]});
    };

    
    const updateTitle = (e) => {
        setCurrentProject({...currentProject, title: e.target.value});
    };

    
    const updatedescription = (e) => {
        setCurrentProject({...currentProject, desc: e.target.value});
    };

    const updateProjects = () => {
        setProjects([...projects, currentProject]);
    };

    return (
        <div>
            <label>Title</label>
            <input 
                name="title" value={currentProject.title}
                onChange={updateTitle}
            />

            <label>Description</label>
            <input 
                name="description" value={currentProject.desc}
                onChange={updatedescription}
            />

            <label>Languages (stack)</label>
            <input 
                name="languages" value={newLanguage}
                onChange={(e) => setnewLanguage(e.target.value)}
            />
            <button onClick={updateLanguages}>Add Language</button>

            <div>
                <h5>Project Stack</h5>
            </div>

            <ul>
                {
                    currentProject.stack.map((language, index) => (
                        <li key={`language-${index}`}>{language}</li>
                    )
                )}
            </ul>
            
            <button onClick={updateProjects} >Generate Project</button>
            <div>
                {
                    projects.map((project, i) => (
                        <Project 
                            key={`project-${i}`}
                            title={project.title}
                            desc={project.desc}
                            stack={project.stack}
                        />
                    )
                )}
            </div>
        </div>
    )
};

export default ProjectsList;