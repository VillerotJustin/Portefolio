import {write_language_reliant_part, write_page} from "./pageEditor.js";



// Data
let PageData;


// loading the data
window.onload = function() {
    fetch('./data.json')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            console.log(data);
            PageData = data
            write_page(data);
        })
        .catch(error => {
            console.error('Error loading the JSON file:', error);
        });
};

export function changelang(language) {
    write_language_reliant_part(PageData[language]);
}