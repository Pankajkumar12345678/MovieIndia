'use strict';

const api_key = '2d8e8c47bcb5fc03b70e4a9c725ed8a2';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

/*
    * fetch data from a server using the 'url' and passes 
    * the result in JSON data to a 'callback' function, 
    * along with an optional parameter if has 'optionalParam'
*/

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}
export { imageBaseUrl, api_key, fetchDataFromServer };