import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfCharacters from './components/ListOfCharacters';
import Wrapper from './Wrapper';
import Header from './components/Header';
import Pagination from './components/Pagination';


interface FilterType {
  name: string;
  status: string;
  gender:string;
  species:string;
  type: string;
}

interface EntriesType {
  key: string;
  value: string;
}
function App() {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({ next:'', prev:''});

  useEffect(()=> {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then(res => res.json())
    .then(res => {
      setCharacters(res.results)
      setInfo(res.info)
    })
  }, []);

  function handleFilter (data:FilterType) {
    const filters = Object.entries(data).map(([key, value]: EntriesType[]) => {
      return `${key}=${value}`
    }).join('&');

    fetch(`https://rickandmortyapi.com/api/character?${filters}`)
    .then(res => res.json())
    .then(res => {
      setCharacters(res.results)
      setInfo(res.info)
    })
  }

  function handlePagination(page:any) {
    fetch(`${page === 'next' ? info.next : info.prev }`)
    .then(res => res.json())
    .t    hen(res => {
      setCharacters(res.results)
      setInfo(res.info)
    })
  }
  return (
    <Wrapper>
      <Header handleFilter={handleFilter}/>
      <ListOfCharacters  characters={characters} />
      <Pagination nextPage={info.next} prevPage={info.prev} handlePagination={handlePagination} />
    </Wrapper>
    
  );
}

export default App;
