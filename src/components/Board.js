import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const Board = () => {
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);

// const KANBAN_DATA = `http://localhost:6060/kb/cards/`;


useEffect(() => {
    const fetchData = async () => {
        setError(false);
        setIsLoading(true);

        try {
            const result = await axios(`http://localhost:6060/kb/cards/`,);

            setData(result.data)
        } catch (error) {
            setError(true);
        }

        setIsLoading(false);
    };

    fetchData();
}, []);



return (
    <Fragment>
        {error && <div>Something went wrong ...</div>}

        {isLoading ? (
            <div>Loading...</div>
        ) : (

         <ul>
            {data.map(card => (
                <li key={card.id}>
                    <div>title: {card.name}</div>
                </li>
            ))}
    
        </ul>

        )}



    </Fragment>

)



}


export default Board