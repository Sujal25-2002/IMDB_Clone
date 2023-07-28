import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/home/Home'
import MovieList from './components/movieList/MovieList';
import Movie from './Pages/MovieDetail/MovieDetail';

// import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='movie/:id' element={<Movie/>}></Route>
            <Route path='movies/:type' element={<MovieList/>}></Route>
            <Route path='/*' element={<h1>this is error page </h1>}></Route>
         </Routes>
      </Router>  
      
    </div>
  );
}

export default App;
