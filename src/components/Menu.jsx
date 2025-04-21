import SelectedProject from "./SelectedProject"



export default function Menu({projects, onSelectProject, selectedProjectId}) {
    return (
        <>
        <menu className="flex flex-col mt-[2rem] gap-4">
        <ul>
          {
            projects.map((project)=> {

              let liStyle = `
              hover:bg-stone-200 p-1 pl-2 rounded-xl
              overflow-hidden whitespace-nowrap text-ellipsis my-1
              `

              if(project.id === selectedProjectId ) liStyle += ' bg-gray-200'
              else  liStyle  


                return (
                    <li  className={liStyle}  key={project.id}>
                      <button onClick={()=> onSelectProject(project.id)} 
                      className="cursor-pointer text-left w-full">{project.title}</button>
                    </li>
                )
            })
          }
          </ul>
        </menu>
     
        </>
    )
}