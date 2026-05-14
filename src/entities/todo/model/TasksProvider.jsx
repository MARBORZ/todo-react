import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";
import TasksContext from "./TasksContext";

const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disapperingTaskId,
        apperingTaskId
    } = useTasks()
        
    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    // CONSTRUCTION
    return(
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteTask,
                deleteAllTasks,
                toggleTaskComplete,

                newTaskTitle,
                setNewTaskTitle,
                searchQuery,
                setSearchQuery,
                newTaskInputRef,
                addTask,
                disapperingTaskId,
                apperingTaskId,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}   

export default TasksProvider;