import {useRef} from "react";
import { createPortal } from "react-dom";
import { styleBtn, styleForm, labelStyle, inputStyle, textAreaStyle, dateStyle } from "./InputCSS";


export default function Input ({projectAddHandler, cancelHandler}){

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    
    return createPortal(
        <form 
        action={()=> projectAddHandler(
            title.current.value,
            description.current.value,
            dueDate.current.value
        )}
        className={styleForm}>
        <ul className="flex flex-row justify-end">
            <li><button onClick={cancelHandler}
            className={styleBtn} type="reset">Cancel</button>
            </li>
            <li><button 
             className={styleBtn} type="submit">Save</button>
            </li>
        </ul>

            <label className={labelStyle} htmlFor="project-title">Title</label>
            <input className={inputStyle} ref={title} type="text" id="project-title" required/>
            <label className={labelStyle} htmlFor="project-description">Description</label>
            <textarea className={textAreaStyle} ref={description} id="project-description" name="project-description"
                placeholder="Description of project" 
            required></textarea>
            <label className={labelStyle} htmlFor="project-due-date">Due Date</label>
            <input className={dateStyle} ref={dueDate} type="date" id="project-due-date" required/>
        </form>,
        document.getElementById("modal-display")
    )
}