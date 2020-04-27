import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Board = () => {
// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
const [data, setData] = useState([]);

// const KANBAN_DATA = `http://localhost:6060/kb/cards/`;


useEffect(() => {
    const fetchData = async () => {
        const result = await axios(`http://localhost:6060/kb/cards/`,);

        setData(result.data)
    };

    fetchData();
}, []);



return (
    <ul>
        <li>
        {console.log(data)}
        </li>
       

    </ul>
)



}


export default Board