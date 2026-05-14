import { useContext } from "react"

// COMPONENTS
import AddTaskForm from "@/features/add-task/AddTaskForm"
import SearchTasksForm from "@/features/search-task/SearchTasksForm"
import TodoInfo from "@/features/stats/TodoInfo"
import TodoList from "@/entities/todo/ui/TodoList/TodoList"
import Button from "@/ui/Button"

// CONTEXT
import TasksContext from "@/entities/todo/model/TasksContext"

import styles from './Todo.module.scss'

const Todo = () => {   
    const { firstIncompleteTaskRef } = useContext(TasksContext)

    return(
        <div className={styles.todo}>
                <h1 className={styles.title}>To Do List</h1>
                <AddTaskForm styles={styles}/>
                <SearchTasksForm  styles={styles}/>
                <TodoInfo  styles={styles}/>
                <Button 
                    onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior:"smooth"})}
                >
                    Show first incomplete task
                </Button>
                <TodoList  styles={styles}/>
        </div>
    )
}

export default Todo;