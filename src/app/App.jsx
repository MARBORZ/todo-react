import './styles'
import Router from "./routing"
import TaskPage from "@/pages/TaskPage/TaskPage"
import TasksPage from "@/pages/TasksPage/TasksPage"

const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <h1>404 Not Found</h1>
  }

  return (
    <Router routes={routes} />

  )
}

export default App
