
import {useRef, useContext} from "react";
import { createPortal } from "react-dom";
import { styleBtn, styleForm } from "./InputCSS";
import Input from "./Input";
import Modal from "./Modal";
import { TaskManagerContext } from "../store/task-manager-context";

const headStyle = `
italic font-bold  pt-10
text-xl sm:text-1xl md:text-1xl lg:text-1xl
text-center text-stone-500 mb-8
`

export default function NewProjcet (){
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    const {handlerCancelAddProject, handlerAddProject} = useContext(TaskManagerContext)

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || enteredDescription.trim() === ""
        || enteredDueDate.trim() === "" ){
        // Show modal
        modal.current.open();
        return ;
     }

     handlerAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    
    return (
        <>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="mb-4 text-stone-600" >Oops ... looks like you forgot to enter to value.</p>
        </Modal>
        <form 
        action={()=>handleSave()}
        className={styleForm}>
        <ul className="flex flex-row justify-end">
            <li><button 
            onClick={handlerCancelAddProject}
            className={styleBtn} type="reset">Cancel</button>
            </li>
            <li><button 
             className={styleBtn} type="submit">Save</button>
            </li>
        </ul>

            <Input ref={title} label="title" type="text" />
            <Input ref={description} label="Description" textarea type="text"/>
            <Input ref={dueDate} label="Due Date" type="date" />
        </form>
    
        </>
    )
}