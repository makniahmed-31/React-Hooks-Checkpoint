import React,{useState} from 'react';
import './App.css';
import Filter from './component/Filter';
import MovieCard from './component/MovieCard';
import MovieList from './component/MovieList';

function App() {
  const [movielist, setmovielist] = useState([
    {title:'The Girl Next Door',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg',
    rate:6},
    {title:'Enola Holmes',
    description:'Enola Holmes est un film de aventure américano-britannique réalisé par Harry Bradbeer sorti en 2020 sur le service Netflix',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg',
    rate:5}, 
    {title:'Mulan',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZcG1tam12bWptYWNtbW1ETGNtWWJtdm1F.jpg',
    rate:8},        
    {title:'Tenet',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZVGptbW1ZWUVFY3ZOWUdObVBQbWo.jpg',
    rate:4},
    {title:'Project Power',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZTGNtcEVtWWpFY212bGNOYm12bXZtQnc.jpg',
    rate:3},
    {title:'The Girl Next Door',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg',
    rate:2},
    {title:'Enola Holmes',
    description:'Enola Holmes est un film de aventure américano-britannique réalisé par Harry Bradbeer sorti en 2020 sur le service Netflix',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg',
    rate:1}, 
    {title:'Mulan',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZcG1tam12bWptYWNtbW1ETGNtWWJtdm1F.jpg',
    rate:8},        
    {title:'Tenet',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZVGptbW1ZWUVFY3ZOWUdObVBQbWo.jpg',
    rate:9},
    {title:'Project Power',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZTGNtcEVtWWpFY212bGNOYm12bXZtQnc.jpg',
    rate:4},
    {title:'The Girl Next Door',
    description:'A teenager is dreams come true when a former porn star moves in next door and they fall in love',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ibXBURUVjdnRrTmptRW1Dam1n.jpg',
    rate:6},
    {title:'Enola Holmes',
    description:'Enola Holmes est un film de aventure américano-britannique réalisé par Harry Bradbeer sorti en 2020 sur le service Netflix',
    posterUrl:'https://pic.egybest.net/i/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg',
    rate:5},
]);

     const [Filtermovie, setFiltermovie] = useState("")

  const FindMovie=(x)=>{
    setFiltermovie(x);
  }
 const AddFn=(newMovie )=>{
      setmovielist([...movielist,newMovie]);
 }
  return (
    <div className="App">


    <Filter FindMovie={FindMovie} />

    <MovieCard AddFn={AddFn} />

    <MovieList  movielist={movielist} Filtermovie={Filtermovie} />



    </div>
  );
}

export default App;
