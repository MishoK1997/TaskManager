import { useEffect } from "react";
import NewTaks from "./NewTask";


export default function Tasks ({tasks, onAdd, onDelete, project}) {
 

    const isTaskPro = tasks.some(task=> task.projectId === project.id)

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTaks onAdd={onAdd} />
            {}
            {(!isTaskPro && tasks.length === 0) && (
                <p className="text-stone-800 mb-4">
                    This project doesn't have any tasks yet.
                </p>
            )}
            {(isTaskPro && tasks.length > 0 )&& (
                <ul className="p-4 mt-8 rounded-md bg-stone-200">
                    {tasks
                        .filter(task => task.projectId == project.id)
                        .map(task => (
                            <li
                                key={`${task.text}_${task.id}`}
                                className="flex justify-between my-4"
                            >
                                <span>{task.text}</span>
                                <button
                                    onClick={() => onDelete(task.id)}
                                    className="text-stone-800 cursor-pointer hover:text-red-500"
                                >
                                    Clear
                                </button>
                            </li>
                        ))}
                </ul>
            )}
        </section>
    );
}

// { tasks.length === 0  &&(<p className="text-stone-800 mb-4">
//     This project doesn't have any tasks yet.
// </p>)}


// {tasks.length > 0 && (
//     <ul className="p-4 mt-8 rounded-md bg-stone-200">
//         {tasks.map(task => <li key={`${task.text}_${task.id}`} className="flex justify-between my-4">
//             <span>{task.text}</span>
//             <button onClick={()=> onDelete(task.id)} className="text-stone-800 cursor-pointer hover:text-red-500">Clear</button>
//             </li>)}