
import  {TaskManagerContext}  from "../store/task-manager-context";
import Button from "./Button"
import Tasks from "./Tasks"
import { useContext } from "react"

export default function SelectedProject() {

    const {handleDeleteProject, selectedProject} = useContext(TaskManagerContext)

    const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
        'en-US', {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    )

    return (
        <div className="w-[35rem] mt-16"> 
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <ul className="flex items-center justify-between">
                <li><h2 className="text-3xl font-bold
                text-sotne-600 mb-2">{selectedProject.title}</h2></li>
                <li><Button onClick={handleDeleteProject}>Delete</Button></li>
            </ul>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600
            whitespace-pre-wrap">{selectedProject.description}</p>
        </header>
        <Tasks/>
        </div>
    )
}