import tasksLocalStorageAPI from './tasksLocalStorageAPI'

// JSON Server API (для демонстрации работы с REST API)
const URL = 'http://localhost:3001/tasks'
const headers = {
    'Content-Type': "application/json",
}

const tasksServerAPI = {
    getAll: async () => {
        return fetch(URL).then((response) => response.json())
    },

    getById: async (id) => {
        return fetch(`${URL}/${id}`).then((response) => response.json())
    },

    add: async (task) => {
        return fetch(URL, {
                method: "POST",
                headers,
                body: JSON.stringify(task)
            })
            .then((response) => response.json())
    },

    delete: async (id) => {
        return fetch(`${URL}/${id}`, { method: 'DELETE' })
    },

    deleteAll: async (tasks) => {
        return Promise.all(tasks.map(({id}) => {tasksServerAPI.delete(id)}))
    },

    toggleComplete: async (id, isDone) => {
        return fetch(`${URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({ isDone })
        })
    },
}

// Переключение между LocalStorage и Server API
// Для production используется LocalStorage
// Для разработки с json-server измените на tasksServerAPI
const USE_LOCAL_STORAGE = true

const tasksAPI = USE_LOCAL_STORAGE ? tasksLocalStorageAPI : tasksServerAPI

export default tasksAPI
export { tasksServerAPI, tasksLocalStorageAPI }