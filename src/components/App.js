import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints, getImageUrl } from '../../config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviePopularList: [],
      genreList: [],
      movieList: [],
      selectedCategory: [],
      isActive: false,
      favoriteFilms: [],
    };

    this.getPopularMovies();
    this.getGenres();
    this.updateFavoriteList = this.updateFavoriteList.bind(this);
  }

  getGenres = () => {
    axios
        .get(endpoints.genres())
        .then((res) => this.setGenreList(res.data.genres))
        .catch((error) => console.log(error));
  };

  getPopularMovies = () => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => this.setPopularMovieList(res.data.results))
        .catch((error) => console.log(error));
  };

  getMoviesByGenre = (id) => {
    axios
        .get(endpoints.genreMovies(id))
        .then((res) => this.setMovies(res.data.results))
        .catch((error) => console.log(error));
  };

  setPopularMovieList = (list) => {
    const categories = this.state.selectedCategory;
    const isCategoryNull = categories.length === 0;

    this.setState({
      moviePopularList: list,
    });

    (isCategoryNull) &&
      this.setState({
        movieList: list,
      });

  };

  setGenreList = (list) => {
    this.setState({
      genreList: list,
    });
  };

  setMovies = (list) => {
    this.setState({
      movieList: list,
    });
  };

  setCategory = (categoryValue) => {
    this.setState({
      selectedCategory: categoryValue,
    });
    this.getMoviesByGenre(categoryValue);
  };

  updateFavoriteList = (dataFromChild) => {
    this.setState({
      favoriteFilms: dataFromChild,
    });
  };

  render() {
    let { genreList, movieList } = this.state;

    return (
        <div>
          <div>
            {genreList.map((listItem) => (
                <span className="genre" onClick={() => this.setCategory(listItem.id)} key={listItem.id}>{listItem.name}</span>
            ))}
          </div>

          <div>
            {movieList
                .map((listItem) => (
                    <Card
                        key={listItem.id}
                        id={listItem.id}
                        backgroundImage={getImageUrl(listItem.backdrop_path)}
                        title={listItem.original_title}
                        releaseDate={listItem.release_date}
                        score={listItem.vote_average}
                        votes={listItem.vote_count}
                        description={listItem.overview}
                        favoritesFilmList={this.state.favoriteFilms}
                        updateFavoriteList={this.updateFavoriteList}
                    />
                ))
            }
          </div>
        </div>
    );
  }
}

export default App;
