import React,{useState} from 'react'

function Data() {
  const[moviename,setMoviename]=useState('')
  const[rating,setRatings]=useState('')
  const[moviedescription,setMovieDescription]=useState('')
  const[movies,setMovies]=useState([])


    localStorage.setItem("movies",JSON.stringify(movies))


     function addMovie()
     {
        let newMovie=
        {
          Movie:moviename,
          Description:moviedescription,
          Ratings:rating
        }

        setMovies([...movies,newMovie])

        setMoviename('')
        setMovieDescription('')
        setRatings('')
      }
  return (
      <div><center>
          <h1>Movies</h1>

        <br /> <br />

        <input type="text" placeholder='Enter Movie Name' value={moviename} onChange={(e)=>setMoviename(e.target.value)}/><br/><br/><br/>
        <input type="text" placeholder='Enter Description' value={moviedescription} onChange={(e)=>setMovieDescription(e.target.value)}/><br/><br/><br/>
        <input type="number" placeholder='Enter Ratings /10' value={rating} onChange={(e)=>setRatings(e.target.value)}/><br/><br/><br/>
        <button onClick={addMovie}>Add</button>


        <div className='main'>
          <table border={3}>
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Movie Description</th>
                <th>Rating</th>
                
              </tr>
            </thead>
            <tbody>
              {movies.map((el,i) => (
                <tr key={i}>
                  <td>{el.Movie}</td>
                  <td>{el.Description}</td>
                  <td>{el.Ratings}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
  </center>
    </div>
    
  )
}

export default Data