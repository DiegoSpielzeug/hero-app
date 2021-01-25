import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHerosById } from '../../selectors/getHeroById';

const HeroScreen = ({history}) => {

    const {id} = useParams();

    const hero = getHerosById(id)

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    if( !hero) {
        return <Redirect to="/"/>
    }

    const handleReturn = () => {
        history.goBack();
    }
    return (
        <div className="row mt-5">
           <div className="col-4">
                <img
                    src={`../assets/heroes/${id}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
           </div>
           <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearence: </b> {first_appearance}
                    </li>
                </ul>

                <h5>characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
           </div>
        </div>
    );
};

export default HeroScreen;