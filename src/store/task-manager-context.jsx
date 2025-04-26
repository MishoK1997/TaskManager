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
  
   function handleAddTast(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState, 
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

   
  function handleDeleteTask(id) {
    setProjectsState(prevState => {
       return {
        ...prevState,
        tasks: prevState.tasks.filter(task=> task.id != id)
       }
    })
  }


   function handleDeleteProject() { 
      setProjectsState(prevState => {
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: prevState.projects
          .filter(project => project.id !== prevState.selectedProjectId)
        }
      })
   }

  // Function to set an ID of selected project
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

   // Display selected project 
 const selectedProject = projectsState.projects
 .find(project => project.id === projectsState.selectedProjectId)


    return (
        <TaskManagerContext.Provider value={{projectsState,
        handlerStartAddProject,
        handlerCancelAddProject,
        handlerAddProject,
        handleAddTast,
        handleDeleteTask,
        handleDeleteProject,
        handleSelectProject,
        selectedProject}}>
            {children}
        </TaskManagerContext.Provider>
    );
}
