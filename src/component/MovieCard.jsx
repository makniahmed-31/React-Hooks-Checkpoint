import React, { useState } from 'react';



const MovieCard = (props) => {
    const [NewFilm, setNewFilm] = useState({});
    const [Pop, setPop] = useState("pop-down");
    const viewFn=()=>{
        setPop('pop-up');
    };
    const hideFn=()=>{
        setPop('pop-down');
    }
    return (
    <div className="container">
            <button className='btn-add' onClick={viewFn}>Add New Film</button>
            <div className={Pop}>
            <input type="text" placeholder='title' onChange={(e)=>{setNewFilm({...NewFilm,title:e.target.value})}} className="add-new-film"/>
            <input type="text" placeholder='description' onChange={(e)=>{setNewFilm({...NewFilm,description:e.target.value})}} className="add-new-film"/>
            <input type="text" placeholder='posterUrl' onChange={(e)=>{setNewFilm({...NewFilm,posterUrl:e.target.value})}} className="add-new-film"/>
            <input type="text" placeholder='rate' onChange={(e)=>{setNewFilm({...NewFilm,rate:e.target.value})}} className="add-new-film"/>
            <button className='btn-add-new' onClick={()=>props.AddFn(NewFilm)} >Add New Film</button>
            <button className='btn-cancel' onClick={hideFn}>X Cancel</button>
            </div>
    </div>
     );
}
 
export default MovieCard;