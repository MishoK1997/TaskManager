import Menu from "./Menu"
import Button from "./Button"



// TailwindCSS style
const asideStyle = `flex flex-col gap-4 bg-stone-50 p-[1.9rem] max-w-[13rem] min-w-[13rem] h-screen
 text-black relative top-[3rem] rounded-tr-[20px]
 shadow-[5px_0_10px_-5px_rgba(0,0,0,0.2)] pt-[3.75rem]
 `
 const dividerStyle = `
    my-1 h-0.5 border-0 
    bg-gradient-to-r from-transparent
    via-neutral-300 to-transparent 
`

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId}) { 


   
    

  
    return (
        <aside className={asideStyle}>
            <header className="text-center md:text-xl font-bold text-stone-500"><h2>YOUR PROJECTS</h2></header>
            <hr className={dividerStyle} />
           <Button onClick={onStartAddProject}>+ Create Project</Button>
           <Menu projects={projects} onSelectProject={onSelectProject} selectedProjectId={selectedProjectId}/>
        </aside>
    )
}