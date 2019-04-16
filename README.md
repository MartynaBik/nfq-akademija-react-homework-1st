# FE React namų darbas

### Užduotis:

1. Gauti ir išvesti žanrų sąrašą puslapio viršuje
2. Paspaudus ant vieno iš žanrų - pakeisti filmų sąrašą į šiam žanrui priklausančių filmų sąrašą

3. Paspaudus ant širdutės filmas turi būti  “užlaikintas” (taip pat “laikas” turi būti nuimtas, jeigu filmas jau “užlaikintas”). Kai filmas užlaikintas, reikia, kad:
   
   Pasikeistų klasė širdelės iš “fa-heart-o” į “fa-heart”
   
   Pasirinktis būtu išsaugota šiam filmui (keičiant žanrus neturi dingti pasirinktis)


### Ppaildoma informacija:
To start, clone this repo and run:
1. `npm install` (install all needed dependencies)
2. `npm start` (start our local development server)

> `http://0.0.0.0:3000` is the default path to our served site

##### Get movies
```javascript
axios
  .get(endpoints.mostPopularMovies())
  .then((res) => this.setMovieList(res.data.results))
  .catch((error) => console.log(error));
```

##### Movie response data
```javascript
const response = {
  backdrop_path,
  original_title,
  overview,
  release_date,
  vote_average,
  vote_count,
}
```
