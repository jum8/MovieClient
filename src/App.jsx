import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from "react";
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';
import Reviews from './components/reviews/Reviews';

function App() {
	const [movies, setMovies] = useState();
	const [movie, setMovie] = useState();
	const [reviews, setReviews] = useState();

	const getMovies = async () => {

		try {
			const response = await api.get("/api/v1/movies");
			setMovies(response.data);
			
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getMovies();
	},[]);

	async function getMovieData(movieId) {
		try {
			const response = await api.get(`/api/v1/movies/${movieId}`);
			const singleMovie = response.data;

			setMovie(singleMovie);

			setReviews(singleMovie.reviewIds)

		} catch (error) {
			console.log(error);
		}
	}

  return (
    <div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path='/' element={<Home movies={movies} />} />
					<Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
					<Route path='/Reviews/:movieId' 
						element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
    </div>
  );
}

export default App;