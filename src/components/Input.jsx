import {labelStyle, inputStyle, textAreaStyle, dateStyle} from './InputCSS'


export default function Input ({ref, label,textarea, type, ...props }) {
    return (
        <>
        {/* <label className={labelStyle} htmlFor="project-title">Title</label>
        <input className={inputStyle}  type="text" id="project-title" required/>
        <label className={labelStyle} htmlFor="project-description">Description</label>
        <textarea className={textAreaStyle}  id="project-description" name="project-description"
            placeholder="Description of project" 
        required></textarea>
        <label className={labelStyle} htmlFor="project-due-date">Due Date</label>
        <input className={dateStyle}  type="date" id="project-due-date" required/> */}
        <label className={labelStyle} htmlFor={label}>{label}</label>
        {textarea ? <textarea id={label} ref={ref} className={textAreaStyle} type={type} /> 
        : <input type={type} id={label} ref={ref} className={type == "date" ? dateStyle : inputStyle} />}
    </>
    )
}