const STORAGE_KEY = 'todo-tasks'

const getTasksFromStorage = () => {
    try {
        const tasks = localStorage.getItem(STORAGE_KEY)
        return tasks ? JSON.parse(tasks) : []
    } catch (error) {
        console.error('Error reading from localStorage:', error)
        return []
    }
}

const saveTasksToStorage = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
        console.error('Error saving to localStorage:', error)
    }
}

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

const tasksLocalStorageAPI = {
    getAll: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(getTasksFromStorage())
            }, 100)
        })
    },

    getById: async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = getTasksFromStorage()
                const task = tasks.find(t => t.id === id)
                if (task) {
                    resolve(task)
                } else {
                    reject(new Error('Task not found'))
                }
            }, 100)
        })
    },

    add: async (task) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const tasks = getTasksFromStorage()
                const newTask = {
                    ...task,
                    id: generateId()
                }
                tasks.push(newTask)
                saveTasksToStorage(tasks)
                resolve(newTask)
            }, 100)
        })
    },

    delete: async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const tasks = getTasksFromStorage()
                const filteredTasks = tasks.filter(task => task.id !== id)
                saveTasksToStorage(filteredTasks)
                resolve()
            }, 100)
        })
    },

    deleteAll: async (tasks) => {
        return Promise.all(tasks.map(({id}) => tasksLocalStorageAPI.delete(id)))
    },

    toggleComplete: async (id, isDone) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const tasks = getTasksFromStorage()
                const updatedTasks = tasks.map(task =>
                    task.id === id ? { ...task, isDone } : task
                )
                saveTasksToStorage(updatedTasks)
                resolve()
            }, 100)
        })
    },
}

export default tasksLocalStorageAPI
