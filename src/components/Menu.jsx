import Project from "./Project"


const liStyle = `
cursor-pointer hover:bg-stone-200 p-1 pl-2 rounded-xl
overflow-hidden whitespace-nowrap text-ellipsis
`

export default function Menu({projects}) {
    return (
        <>
        <menu className="flex flex-col mt-[2rem] gap-4">
        <ul>
          {
            projects.map((project, index)=> {
                return (
                    <li className={liStyle}  key={`${project.title} ${index}`}>
                        <a href={`#${project.title}_${index}`}>{project.title}</a></li>
                )
            })
          }
          </ul>
        </menu>
        <Project projects={projects}/>
        </>
    )
}