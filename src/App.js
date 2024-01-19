
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store';
import { Provider } from 'react-redux';
import MiRuter from './components/miRuter';

function App() {
  return (
    <Provider store={store} >     
    <MiRuter/>
    </Provider>
  );
};


export default App;
