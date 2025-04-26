import { createContext, useState, useReducer } from "react";



export const TaskManagerContext = createContext(null);

function taskManagerReducer( state, action){
  switch (action.type){
  case 'START_ADD_PROJECT':
    return {
      ...state,
      selectedProjectId: null
    }
  case 'CANCEL_ADD_PROJECT':
    return {
      ...state,
      selectedProjectId: undefined
    }
  case 'ADD_PROJECT':
    const newProject = {
      ...action.projectData,
      id: Math.random()
    }
    return {
      ...state,
      selectedProjectId: undefined,
      projects: [...state.projects, newProject]
    }
  case 'ADD_TASK':
    const taskId = Math.random();
    const newTask = {
      text: action.text,
      projectId: state.selectedProjectId,
      id: taskId
    };

    return {
      ...state, 
      tasks: [newTask, ...state.tasks]
    }
  case 'DELETE_TASK':
    return {
      ...state,
      tasks: state.tasks.filter(task=> task.id != action.id)
     }
  case 'DELETE_PROJECT':
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects
      .filter(project => project.id !== state.selectedProjectId)
    }
  case 'SELECT_PROJECT':
    return {
      ...state,
      selectedProjectId: action.id
    }
  
      default:  
        return state;
  }
}


export default  function TaskManangerProvider ({ children }) {
    //The state to manage the projects and tasks, with initial values
    // const [projectsState, setProjectsState] = useState({
    //     selectedProjectId: undefined,
    //     projects: [],
    //     tasks: []
    //   })
    
  const [ projectsState, projectsDispatch] = useReducer(taskManagerReducer, {
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handlerStartAddProject ()  {
    projectsDispatch({type: 'START_ADD_PROJECT'})
  }

  function handlerCancelAddProject () {
    projectsDispatch({type: 'CANCEL_ADD_PROJECT'})
  }

    // This function adds a project and store into the state.
 function handlerAddProject (projectData) {
    projectsDispatch({type: 'ADD_PROJECT',projectData })
  }
  
   function handleAddTast(text) {
    projectsDispatch( {type: 'ADD_TASK', text})
  }

   
  function handleDeleteTask(id) {
    projectsDispatch({type: 'DELETE_TASK', id})
  }


   function handleDeleteProject() { 
    projectsDispatch({type: 'DELETE_PROJECT'})
   }

  // Function to set an ID of selected project
  function handleSelectProject(id) {
    projectsDispatch({type: 'SELECT_PROJECT', id})
  }

   // Display selected project 
 const selectedProject = projectsState.projects
 .find(project => project.id === projectsState.selectedProjectId)


    return (
        <TaskManagerContext value={{projectsState,
        handlerStartAddProject,
        handlerCancelAddProject,
        handlerAddProject,
        handleAddTast,
        handleDeleteTask,
        handleDeleteProject,
        handleSelectProject,
        selectedProject}}>
            {children}
        </TaskManagerContext>
    );
}
