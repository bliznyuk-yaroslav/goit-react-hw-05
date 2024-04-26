import { useState } from "react";
import css from './SearchBox.module.css'
export default function SearchForm({formSubmit,value }){
    const [query, setQuery]= useState(value);
    const handleSubmit = e =>{
        e.preventDefault();
        if(query ===''){
         console.log("error")
         return
        }
        formSubmit(query);
        setQuery('');
    }
    const handleInput = e=>{
        formSubmit(e.target.value.toLowerCase())
    }
    return(
        <div className={css.searchCont}>
        <form 
        className ={css.searchForm}
        onSubmit={handleSubmit}>
            <input 
            className={css.inputForm}
            type="text"
            placeholder="Search movie"
            value={value}
            onChange={handleInput} />
            <button className={css.btn} type="submit">Search </button>
        </form>
        </div>
    )
}