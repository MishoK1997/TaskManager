
import Sidebar from "./components/Sidebar";
import { useEffect, useState, useContext } from "react";
import NewProjcet from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import TaskManangerProvider from "./store/task-manager-context";
import { TaskManagerContext } from "./store/task-manager-context";


function AppContent () {

  const {projectsState} = useContext(TaskManagerContext)
  
  let content = <SelectedProject   />

  // Another display logic for both none selected and project creation interface
  if(projectsState.selectedProjectId === null) 
    content = <NewProjcet  />
  else if(projectsState.selectedProjectId === undefined) 
    content = <NoProjectSelected/>

  return (
    <>
      <main className="h-screen my-8 flex gap-10 flex-row w-[100vw]">
        <Sidebar/> 
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