import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Hero({movies}) {
	const navigate = useNavigate();

	function reviews(movieId) {
		navigate(`/Reviews/${movieId}`)
	}

	return (
		<div>
			<Carousel>
				{
					movies?.map((movie) => (
							<Paper key={movie.imdbId}>
								<div className='movie-card-container' style={{"--img": `url(${movie.backdrops[0]})`}}>
									<div className='movie-card'>
										<div className='movie-detail'>
											<div className="movie-poster">
												<img src={movie.poster} alt="" />
											</div>
											<div className="movie-title">
												<h4>{movie.title}</h4>
											</div>
											<Link to={`/Trailer/${movie.trailerLink.slice(-11)}`}>
												<div className="movie-buttons-container">
													<div className="play-button-icon-container">
														<FontAwesomeIcon className='play-button-icon'
															icon = {faCirclePlay}
														/>
													</div>
												</div>
											</Link>
											<div className="movie-review-button-container">
												<Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
											</div>
										</div>
									</div>
								</div>
							</Paper>
						))
				}
			</Carousel>
		</div>
	)
}
