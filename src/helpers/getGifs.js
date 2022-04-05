import React from 'react'

export const getGifs = async (category) => {
 
    try {
        const apiKey = "Tkqr93amZJBgEarb3Al843b8llUpwDYC";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=12&offset=0&rating=g&lang=en`;

        const response = await fetch(url);
        const result = await response.json();
        return result

    } catch (error) {
        console.error(error);
        return []
    }
}
