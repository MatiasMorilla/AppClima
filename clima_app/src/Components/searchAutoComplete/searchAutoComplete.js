import React, { useState, useEffect, useRef } from "react";
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from 'react-router-dom';

let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState === "loaded" || script.readyState === "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
        handlePlaceSelect(updateQuery)
    );
}

async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}

function SearchAutocomplete() {
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);
    const [redirect, setRedirect] = useState(false);

    const showWeather = () => {
        setRedirect(true);
    }

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyBlsigHK2IvqhPcaFmvE51rwQxZZkzp8sQ&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    return (
        <div className="search-location-input">
            {
                redirect && <Navigate to={"/" + query} />
            }
           <div>
                <Paper
                    className='searchCity-form'
                    component="form"
                    onSubmit={showWeather}
                >
                    <InputBase
                        component="input"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        className='input-city'
                        placeholder="Enter a City"
                        ref={autoCompleteRef}
                    />
                    <IconButton type="submit" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
           </div>
        </div>
    );
}

export default SearchAutocomplete;