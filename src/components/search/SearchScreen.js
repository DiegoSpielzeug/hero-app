import React from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import HeroCard from '../heros/HeroCard';
import { useForm } from '../hooks/useForm';
import {getHerosByName} from '../../selectors/getHerosByName';

const SearchScreen = ({history}) => {


    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);



    const [formValues, handleInputChange, reset] = useForm({
        searchText: q
    });
    
    const {searchText} = formValues;
    const herosFilter = getHerosByName(q)
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    
    console.log(searchText);
    return (
        <div>
            <h1>searchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>search form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find you hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-block m-2 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        herosFilter.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default SearchScreen;