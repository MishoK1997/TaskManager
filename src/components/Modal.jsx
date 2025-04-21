
import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button"

export default function Modal({children,ref}) {
    const dialog = useRef()
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                    dialog.current.showModal()
            }
        }
    })

    return createPortal(<dialog ref={dialog} 
    className="backdrop:bg-stone-900/90  justify-self-center
      fixed inset-0 m-auto  p-4 rounded-2xl">
        {children}
        <form method="dialog" className="text-right">
            <Button>Close</Button>
        </form>
    </dialog>,
    document.getElementById("modal-root"))
}