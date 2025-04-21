
import Button from "./Button"
import Tasks from "./Tasks"

export default function SelectedProject({tasks,
    project, 
    deleteProject, 
    onAddTask, onDeleteTask}) {

    const formattedDate = new Date(project.dueDate).toLocaleDateString(
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
                text-sotne-600 mb-2">{project.title}</h2></li>
                <li><Button onClick={deleteProject}>Delete</Button></li>
            </ul>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600
            whitespace-pre-wrap">{project.description}</p>
        </header>
        <Tasks project={project} 
        onAdd={onAddTask} 
        onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    )
}