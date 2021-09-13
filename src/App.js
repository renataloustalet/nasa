import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
