
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import NewProjcet from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App () {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })
  
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

  // Function to set an ID of selected project
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

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

 // Display selected project 
 const selectedProject = projectsState.projects
 .find(project => project.id === projectsState.selectedProjectId)

  useEffect(()=> console.log(selectedProject))
  useEffect(()=> console.log(projectsState))

  let content = <SelectedProject  onAddTask={handleAddTast}
   onDeleteTask={handleDeleteTask} 
   project={selectedProject} 
   deleteProject={handleDeleteProject}
   tasks={projectsState.tasks}
   />

  // Another display logic for both none selected and project creation interface
  if(projectsState.selectedProjectId === null) 
    content = <NewProjcet onCancelAddProject={handlerCancelAddProject}
  onAdd={handlerAddProject} />
  else if(projectsState.selectedProjectId === undefined) 
    content = <NoProjectSelected onStartAddProject={handlerStartAddProject}/>



  return (
    <>
      <main className="h-screen my-8 flex gap-10 flex-row w-[100vw]">
        <Sidebar  onStartAddProject={handlerStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        /> 
        {content}
      </main>
    </>

  )

}


export default App;