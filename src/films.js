// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(element =>element.director===director);
  console.log("EXERCICE 2 ->", result);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(arrayReduce){
  const arrayFiltered = Number((arrayReduce.reduce((previous, actual) => previous + actual.score, 0) / arrayReduce.length).toFixed(2));

  return arrayFiltered;
}

function moviesAverageOfDirector(array, director) {
  const result = Number((array.filter(element => element.director 
    === director).map(element => element.score).reduce((totalScore, element) => totalScore + element, 0) / array.filter(element => element.director
       === director).length).toFixed(2));
       console.log("EXERCICE 3->", result);
  return result;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const result =array.map(element=>element.title).sort();
  if(result.length > 20)result.length=20;
  console.log("EXERCICE 4->", result);
  return result;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array.map(element=>({...element})).sort((previous,actual) => {
const order=previous.year-actual.year;
if ( order ==0){
  if (previous.title < actual.title) return-1;
  else return 1;

}else return order;
  }
  );
  console.log("EXERCICE 5->", result);
  return result;
 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,category) {

  const moviesByCategory = array.filter(element => element.genre.includes(category) && typeof(element.score) === "number");
  const result = moviesAverage(moviesByCategory);
  console.log("EXERCICE 6->", result);
  return result;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
