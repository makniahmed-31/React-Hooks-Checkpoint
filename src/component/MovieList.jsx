import React from 'react';
import { FiStar } from 'react-icons/fi';

const MovieList = (props) => {
    var movielist=props.movielist;


    
    const rateFn=(x)=>{
        let Stars =[];
        for (let i = 0; i < x; i++) {
            
            Stars.push(<FiStar className='fi' key={Math.floor(Math.random() * 1000000)} color='red' fill='yellow'/>)
        }
        return Stars;

    };
    const rateClick=(x)=>{
        let Star =[];
        for (let i = 0; i < x; i++) {
            
            Star.push(< FiStar className='Fi' key={i} onClick={fillStrOn} />)
        }
        return Star;
    };
    const fillStrOn=(e)=>{
        console.log(Stars.findIndex(el=>el===e.target))
        e.target.style.fill='red';
    }
    return ( 

        <div className="container-movielist">
            {
                movielist.filter(el=>el.title.toUpperCase().includes(props.Filtermovie.toUpperCase())).map((el,index)=>
                <div className="list" key={index} >
                    
                    <p>{rateClick(10)}</p>
                    <img src={el.posterUrl} alt="poster" className="poster"/>
                    <h1 className="title">{el.title}</h1>
                    <p className="infos">{el.description}</p>
                    <p>{el.rate}{rateFn(el.rate)}</p>
                </div>
                    )
                    
            }

            
        </div>
     );
}
 
export default MovieList;
