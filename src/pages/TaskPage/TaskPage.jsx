import { useState, useEffect} from "react";
import tasksAPI from "@/shared/api/tasks/index";

const TaskPage = (props) => {
    const { params } = props

    const taskId = params.id

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)


    useEffect(() => {
        tasksAPI.getById(taskId).then((taskData) => {
            setTask(taskData)
            setHasError(false)
        }).catch((e) => console.log(e) && setHasError(true)).finally(() => setIsLoading(false))
    }, [taskId]) 


    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(hasError){
        return <h1>Task no found.</h1> 
    }


    return (
        <section className="task-page">
            <div className="task-page__container">
                <h1 className="task-page__title">{task.title}</h1>
                {task.isDone ? <p className="task-page__status task-page__status--done">Task is done.</p> : <p className="task-page__status task-page__status--not-done">Task is not done.</p>}
            </div>
        </section>
    )
}

export default TaskPage;