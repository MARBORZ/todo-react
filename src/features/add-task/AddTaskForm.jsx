import { useContext, useState } from "react";

import Button from "@/ui/Button/";
import Field from "@/ui/Field/";

import TasksContext from "@/entities/todo/model/TasksContext";

const AddTaskForm = (props) => {
    const { styles } = props

    const {
        addTask, 
        newTaskTitle,
        setNewTaskTitle, 
        newTaskInputRef
    } = useContext(TasksContext)

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (e) => {
        e.preventDefault()
        if(!isNewTaskTitleEmpty){
            addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {
        const { value } = event.target
        const clearValue =  value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'The task cannot be empty' : '')
    }

    return(
        <form className={styles.form} onSubmit={onSubmit}>
            <Field 
                className = {styles.field}
                label = "New task title"
                id = "new-task" 
                value={newTaskTitle}
                onInput={(e) => onInput(e)}
                ref={newTaskInputRef}
                error={error}
            />
            <Button 
                isDisabled={isNewTaskTitleEmpty}
                type="submit"
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm;