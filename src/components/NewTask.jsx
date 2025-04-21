import Input from "./Input"
import Button from "./Button"
import {useState, useRef, useEffect} from 'react'
import Modal from "./Modal"


export default function NewTaks({onAdd}) {

    // const [enteredTask, setEnteredTask] = useState()

    // function handleChange(event) {
    //     setEnteredTask(event.target.value)
    // }

    // function handleClick() {
    //     onAdd(enteredTask)
    //     setEnteredTask("");
    // }
    // useEffect(()=> console.log(enteredTask))

    const taskInput = useRef()
    const modal = useRef()

    function handleClick() {

        if(taskInput.current.value.trim() === ""){
            modal.current.open();
            return 
        }

        onAdd(taskInput.current.value)
        taskInput.current.value = ""
    }

    return (
        <>
       <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="mb-4 text-stone-600" >Oops ... looks like you forgot to enter to value.</p>
        </Modal>
        <Input ref={taskInput}   type="text" className="w-64 px-2 py-1 rounded-sm"></Input>
        <Button onClick={handleClick} >Add Task</Button>
        </>
    )
}