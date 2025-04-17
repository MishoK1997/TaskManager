import Menu from "./Menu"
import AddProject from "./AddProject"
import { useState, useRef, useEffect } from "react" 
import CentralModal from "./CentralModal"   

// TailwindCSS style
const asideStyle = `flex flex-col gap-4 bg-stone-50 p-[1.9rem] max-w-[14rem] min-w-[13rem] h-screen
 text-black relative top-[3rem] rounded-tr-[20px]
 shadow-[5px_0_10px_-5px_rgba(0,0,0,0.2)] pt-[3.75rem]
 `
 const dividerStyle = `
    my-1 h-0.5 border-0 
    bg-gradient-to-r from-transparent
    via-neutral-300 to-transparent 
`

export default function Sidebar() { 

    const [projects, setProject] = useState([])



    function projectAddHandler(titleData,descriptionData, dueDateData) {
    
        setProject(preProjects => {
            return (
                [...preProjects,
                {
                    title: titleData,
                    description: descriptionData,
                    dueDate: dueDateData,
                    tasks: []
                }]
            )
        })

        
    }

    useEffect(()=> console.log(projects), [projects])
  
    return (
        <aside className={asideStyle}>
            <header className="text-center"><h2>YOUR PROJECTS</h2></header>
            <hr className={dividerStyle} />
            <AddProject projectAddHandler={projectAddHandler}/>   
            <Menu projects={projects}/>
        </aside>
    )
}