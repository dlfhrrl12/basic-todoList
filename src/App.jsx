
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import  RootLayout  from './components/layout/RootLayout'
import TodoContainer from './components/TodoContainer'
// import TodoList from './components/TodoList'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<TodoContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
