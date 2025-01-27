import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { deleteMovie } from "../actions/movieActions";
import { addFavorite } from "../actions/favoritesActions";
import { connect } from "react-redux";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();

  const { movies } = props;
  const movie = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {props.displayFavorites ? <span
                  className="m-2 btn btn-dark"
                  onClick={(e) => {
                    
                    if (props.favorites.filter( mov => mov.id === +id).length === 0) {
                    props.addFavorite(movie);
                  }}}
                >
                  Favorite
                </span> : null}
                <Link to="/">
                  <span className="delete">
                    <input
                      type="button"
                      className="m-2 btn btn-danger"
                      value="Delete"
                      onClick={(e) => {
                          
                          props.deleteMovie(movie.id);
                        }
                      }
                    />
                  </span>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    favorites: state.favorites.favorites,
    displayFavorites: state.favorites.displayFavorites
  };
};
export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie);
