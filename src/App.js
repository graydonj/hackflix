import { Routes, Route } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';
import ErrorPage from './ErrorPage';
import './index.css';

function App() {

  return (
    <div className="wrapper">
      <header><h1>Hackflix</h1></header>

      <Routes>
        <Route path="/" element={ <Catalogue/> }/>
        <Route path="/movie/:movieID" element={ <MovieDetails/> }/>
        <Route path="*" element={ <ErrorPage/> }/>
      </Routes>
    </div>
  );
}

export default App;