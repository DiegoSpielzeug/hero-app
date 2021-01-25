import React from 'react';
import HeroList from '../heros/HeroList';


const MarvelScreen = () => {
    return (
        <div>
            <h3>Marvel Screen</h3>
            <hr/>

            <HeroList publisher="Marvel Comics"/>
        </div>
    );
};
export default MarvelScreen;