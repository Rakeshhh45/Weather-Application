import React, { useRef } from "react";

function Search(props) {
    const searchInput =useRef();
    return (
        <div className="flex shadow-xl">
            <input type="text" value={props.searchData} className="border border- 2 border-black w-full  p-3 text-2xl"
                onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
            <button onClick={props.searchWeather} className="p-3  bg-blue-500 text-white border border-2 border-black ">Search</button>
        </div>
    )
};

export default Search;