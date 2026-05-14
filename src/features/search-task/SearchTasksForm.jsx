import { useContext } from "react";

import Field from "@/ui/Field";

import TasksContext from "@/entities/todo/model/TasksContext";

const SearchTasksForm = (props) => {
    const { styles } = props

    const{
        searchQuery,
        setSearchQuery
    } = useContext(TasksContext)


    return (
        <form 
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
        >
            <Field 

                className = {styles.field}
                label = "Search task"
                id = "search-task"
                type = "search"
                value={searchQuery}
                onInput ={({target}) => 
                    setSearchQuery(target.value)}
            
            />
        </form>
    )
}

export default SearchTasksForm;