
import Sidebar from "./components/Sidebar";
import { useEffect, useState, useContext } from "react";
import NewProjcet from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import TaskManangerProvider from "./store/task-manager-context";
import { TaskManagerContext } from "./store/task-manager-context";


function AppContent () {

  const {projectsState, setProjectsState, handlerStartAddProject, handlerCancelAddProject} = useContext(TaskManagerContext)
  
  
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
    content = <NewProjcet  />
  else if(projectsState.selectedProjectId === undefined) 
    content = <NoProjectSelected/>



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


export default function App (){
  return (

    <TaskManangerProvider>
      <AppContent />
    </TaskManangerProvider>
  )
};