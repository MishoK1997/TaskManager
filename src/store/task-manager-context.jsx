import { createContext, useState } from "react";



export const TaskManagerContext = createContext(null);


export default  function TaskManangerProvider ({ children }) {
    //The state to manage the projects and tasks, with initial values
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
      })

/**
  * Functions section
  * 
*/
    
  function handlerStartAddProject ()  {
    setProjectsState(prevState => {
          return {
            ...prevState,
            selectedProjectId: null
          }
    })
  }

  function handlerCancelAddProject () {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
   }

    // This function adds a project and store into the state.
 function handlerAddProject (projectData) {
    setProjectsState( prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
   }
  

    return (
        <TaskManagerContext.Provider value={{projectsState,
        setProjectsState,
        handlerStartAddProject,
        handlerCancelAddProject,
        handlerAddProject}}>
            {children}
        </TaskManagerContext.Provider>
    );
}
