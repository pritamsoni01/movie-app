import './App.css';
import Movie from './Components/Movies';



const movies = [
  {title: "Avengers", genre: "Action", year: "2012", img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Infinity War", genre: "Action", year: "2018", img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Endgame", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Age of Ultron", genre: "Action", year: "2015", img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Captain Marvel", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."}, 
  {title: "Thor", genre: "Action", year: "2011", img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Thor: Ragnarok", genre: "Action", year: "2017", img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Ant Man", genre: "Action", year:"2018", img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw"}
  
]
 
function App() {
  return (
    <div className="App"> 
      <Movie title={movies[0].title} img={movies[0].img} year={movies[0].year} genre={movies[0].genre}/>
      <Movie title={movies[0].title} img={movies[1].img} year={movies[1].year} genre={movies[1].genre}/>
      <Movie title={movies[0].title} img={movies[2].img} year={movies[2].year} genre={movies[2].genre}/>
      <Movie title={movies[0].title} img={movies[3].img} year={movies[3].year}genre={movies[3].genre}/>
      <Movie title={movies[0].title} img={movies[4].img} year={movies[4].year}genre={movies[4].genre}/>
      <Movie title={movies[0].title} img={movies[5].img} year={movies[5].year}genre={movies[5].genre}/>
      <Movie title={movies[0].title} img={movies[6].img} year={movies[6].year}genre={movies[6].genre}/>
      <Movie title={movies[0].title} img={movies[7].img} year={movies[7].year}genre={movies[7].genre}/>
      <Movie title={movies[0].title} img={movies[5].img} year={movies[5].year}genre={movies[5].genre}/>
      <Movie title={movies[0].title} img={movies[2].img} year={movies[2].year} genre={movies[2].genre}/>
      <Movie title={movies[0].title} img={movies[0].img} year={movies[0].year} genre={movies[0].genre}/>


    </div>
  );
}

export default App;
