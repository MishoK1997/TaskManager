import { createPortal } from "react-dom";



export default function Project ({projects}) {

    return createPortal(
        <div className="flex flex-col pt-[5rem]   w-full">
            <h2>{projects.title}</h2>
            <h4>{projects.dueDate}</h4>
            <p>{projects.description}</p>
        </div>,
    document.getElementById("modal-root")
)
}