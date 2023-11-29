import React, { useState } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";

import { useLoaderData } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    // retrieve the characters using the useLoaderData hook
    const characters = useLoaderData();

    // Get the search params from the URL
    let [searchParams, setSearchParams] = useSearchParams();

    // Get the order and orderBy from the search params or set the default values
    const [order, setOrder] = useState(searchParams.get('order') || 'asc')
    const [orderBy, setOrderBy] = useState(searchParams.get('orderBy') || 'name')

    // Update the search params when the order or orderBy state changes
    React.useEffect(() => {
        setSearchParams({ order, orderBy })
    }, [order, orderBy, setSearchParams])

    return (
        <>
            <h2>Marvel Characters</h2>
            {/* Sort by  */}
            <label htmlFor="sort">Sort by:</label>
            <select data-testid='orderBy' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="modified">Modified</option>
            </select>   
            &nbsp;
            {/* Order */}
            <label htmlFor="order">Order:</label>
            <select data-testid='order' value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>         
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;
