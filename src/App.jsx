
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  RootLayout  from './components/layout/RootLayout'
import HomePage from './pages/HomePage'
import TodoDetailPage from './pages/TodoDetailPage'
// import TodoProvider from './provider/TodoProvider'
import QueryProvider from './provider/QueryProvider'
// import TodoList from './components/TodoList'

function App() {


  return (
    <BrowserRouter>
    <QueryProvider>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='todos/:id' element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </QueryProvider>
    </BrowserRouter>
  )
}

export default App
