function Movie(props){
    return(
        <div className="movie-card">
            <img className="card-img" src={props.img} alt=""></img>
            <h3 className="my-5">{props.title}</h3>
            <h3 className="my-5">{props.year}</h3>
            <p className="my-5">{props.genre}</p>
        </div>
    );
}

export default Movie;