import React, { useState } from "react";
import Render from "./Render";
import "./Data.css"

export default function Data() {
    const [beers, setBeers] = useState([]);
    let [search, setsearch] = useState("");
    console.log(search);
    const fetchData = () => {
        let apiUrl = "https://api.punkapi.com/v2/beers";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data[0].tagline)
                console.log(data.image_url)
                console.log(data)
                setBeers(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch</button>
            <form>
                <input type="text" placeholder='Search name ...' onChange={(e) => setsearch(e.target.value)} />
            </form>
            <ul>
                {beers.filter((element) => {
                    return search.toLowerCase() === '' ? true : element.name.toLowerCase().includes(search.toLowerCase());
                }).map((beer) => (
                    <Render key={beer.id} userdata={beer} />
                ))}
            </ul>
        </div>
    );
}
