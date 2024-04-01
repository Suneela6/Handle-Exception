import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();


            <h1>Hello {location.state.id} and welcome to the home</h1>

    useEffect(() => {
        // Check if the location state exists and contains necessary data
        if (location.state && location.state.id) {
            // Redirect to http://localhost:3001/
            window.location.href = 'http://localhost:3001/';
        } else {
            // Handle the case when the user is not valid
            // For example, you could navigate them to a login page
            // Replace the URL below with the appropriate route or logic for handling invalid users
            window.location.href = '/login';
        }
    }, [location.state]);

    // This component won't render any content as it redirects immediately
    return null;
}

export default Home;
