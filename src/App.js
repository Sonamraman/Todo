import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux';
// import configStore from './redux/store/store';
import Routes from './router/routes';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Landingpage from './pages/landing/Landingpage';
import Todolist from './pages/todolist/Todolist';
import CheckBox from './pages/practice/Checkbox';
import ColorChnge from './pages/practice/ColorChnge';
import States from './pages/practice/States';
import Keepapp from './pages/KeepApp/Keepapp';
import TodoEditList from './pages/TodoEditList/TodoEditList';

function App() {
  // const store = configStore()
  return (
    <>
   {/* <Provider store={store}> 
   <Routes/>
   </Provider> */}
   <Todolist/> 
   </>
  );
}

export default App;
