import './App.css'
import store from './redux/store'
import {Provider} from "react-redux"
import Todo from './components/Todo'
function App() {
  return (
      <Provider store={store}>
      <Todo></Todo>
      </Provider>
  )
}
export default App
