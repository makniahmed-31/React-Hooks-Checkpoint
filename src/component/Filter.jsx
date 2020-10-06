import React from 'react';



const Filter = (props) => {



    return ( 
        <div className="container-filter">
            <h1>MOVIE-APP</h1>
            <input className='filter' type="text" onChange={(e)=>{props.FindMovie(e.target.value)}} placeholder='Search ...' />
            <br/>
            

        </div>
     );
}
 
export default Filter;