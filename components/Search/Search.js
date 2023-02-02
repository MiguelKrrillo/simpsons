import React from "react";

const Search = ({setSearch}) => {
    const { reqApi } = setSearch;

    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input onChange={e=>{
                setSearch(e.target.value);
            }}
            placeholder="Buscar Frase de Personaje" 
            type="text" 
            className="" 
            />
            <button onClick={reqApi} className="btn btn-prymary fs-5">Buscar</button>
        </form>
    );
}

export default Search;