import logo from '../../public/logo.png'
import Button from './Button.jsx'

const logoStyle= "h-18 w-18"

const headStyle = `
italic font-bold  pt-10
text-xl sm:text-1xl md:text-1xl lg:text-1xl
text-center text-stone-500 mb-8
`


export default function NoProjectSelected ({onStartAddProject}) {
    return (
        <>
        <div id="modal-display" className="flex flex-col w-[100vw] mr-[5rem] justify-center items-center">
            <img className={logoStyle} loading='lazy' src={logo} alt="Project logo" />
            <h2 className={headStyle}>Wanna create a project and task?</h2>
            <Button onClick={onStartAddProject} >Create New Project</Button>

        </div>
        </>
    )
}
