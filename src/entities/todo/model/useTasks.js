import {
    useState,
    useRef,
    useCallback,
    useEffect,
    useMemo,
} from "react"
import tasksAPI from "@/shared/api/tasks/index"

const useTasks = () => {
    // STATS
    const [tasks, setTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [disapperingTaskId, setDisapperingTaskId] = useState(null)
    const [apperingTaskId, setApperingTaskId] = useState(null)

    const newTaskInputRef = useRef(null);

    // FUNC
    const deleteAllTasks = useCallback(() => {
            const isConfirmed = confirm("Delete all tasks?")

            if(isConfirmed){
                    tasksAPI.deleteAll(tasks).then(() => setTasks([]))
                }
    }, [tasks])

    const deleteTask = useCallback((taskId) => {
        tasksAPI.delete(taskId)
        .then(() => {
            setDisapperingTaskId(taskId)
            setTimeout(() => {
                setTasks(
                    tasks.filter(task => task.id !== taskId)
                )
                setDisapperingTaskId(null)
            }, 400)
        })
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        tasksAPI.toggleComplete(taskId, isDone)
        .then(() => {
                setTasks(
                    tasks.map(task => {
                        if(task.id === taskId){
                            return {...task, isDone: !task.isDone}
                        }
                        return task
                    })
                )
        })
    }, [tasks])
    
    const addTask = useCallback((title) => {
        const newTask = {
            title,
            isDone: false
        }

        tasksAPI.add(newTask)
        .then((addedTask) => {
            setTasks((prevTasks) => [...prevTasks, addedTask])
            setNewTaskTitle('')
            setSearchQuery('')
            newTaskInputRef.current.focus()
            setApperingTaskId(addedTask.id)
            setTimeout(() => {
                setApperingTaskId(null)
            }, 400);
        })
    }, [])
    
    // EFFECTS
    useEffect(() => {
        newTaskInputRef.current.focus()

        tasksAPI.getAll().then(setTasks)
    }, [])

    const filteredTasks = useMemo( () => {
        const clearSearchQuery = searchQuery.trim()
        return clearSearchQuery.length > 0 
                ? tasks.filter((task) => task.title.toLowerCase().includes(clearSearchQuery))
                : null
    }, [searchQuery, tasks])

    return{
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        disapperingTaskId,
        apperingTaskId,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
    }

}

export default useTasks;