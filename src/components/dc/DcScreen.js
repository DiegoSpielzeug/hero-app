import React from 'react';
import HeroList from '../heros/HeroList';

const DcScreen = () => {
    return (
        <div>
            <h3>Dc Screen</h3>
            <hr/>

            <HeroList publisher="DC Comics"/>
        </div>
    );
};

export default DcScreen;