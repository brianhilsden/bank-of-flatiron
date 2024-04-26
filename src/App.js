import './App.css';
import Header from './components/header';
import Search from './components/search';
import Form from './components/form';
import Table from './components/table';
import { useState } from 'react';

function App() {
  const [data,setData] = useState([])
  const [search,setSearch] = useState("")

  function onSubmitData(formData){
    setData(data=> ([...data,formData]))
  }

  function onSearchData(event){
    setSearch(event.target.value) 
  }
  
  const itemsToDisplay = data.filter(item =>{
    if(search.length > 0){
      return item.description.includes(search)
    }
    else{
      return true
    }
  })
  
  return (
    <div>
      <Header />
      <Search onSearchData = {onSearchData} search={search} />
      <Form onSubmitData = {onSubmitData}/>
      <Table data = {itemsToDisplay} />
    </div>
    

  );
}

export default App;
