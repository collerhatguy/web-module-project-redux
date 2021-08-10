import React from 'react';
import { removeFavorites } from '../actions/businessActions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const { favorites, removeFavorites } = props;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => removeFavorites(movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.business.favorites
    }
}

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);