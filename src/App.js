import './style.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    </div>
    <div className="Body">
    <Body>
    </Body>
    </div>
    <div>
    <Footer className="Footer"></Footer>
    </div>
    </BrowserRouter> 
  );
}

export default App;
