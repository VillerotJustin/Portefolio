

export function write_page(data) {
    if (data.theme) {
        changing_styleguide(data.theme)
    } else {
        console.log('Theme invalid of missing');
    }

    if (data.content) {
        setting_up_lang_selector(data.content)

        // Writing default language
        write_language_reliant_part(data.content[data.content.default])
    } else {
        console.log('Content invalid of missing');
    }


}

function changing_styleguide(theme) {}

function setting_up_lang_selector(data) {
    const lang_carousel =  document.getElementById('lang-carousel')
    const lang_carousel_list = lang_carousel.getElementsByTagName('ul')[0];
    // Loop through all keys in 'content' (excluding the 'default' key)
    var firstItemAdded = false;
    for (const language in data) {
        // Skip the 'default' key
        if (language !== "default") {
            console.log(`Language parameter: ${language}`);
            // Create the <li> element
            const liElement = document.createElement('li');
            liElement.classList.add('slide');

            // Create the <img> element
            const imgElement = document.createElement('img');
            imgElement.src = "https://flagsapi.com/"+language.toUpperCase()+"/shiny/64.png";  // Set the source of the flag image
            imgElement.alt = `${language} flag`;  // Set the alt text to the language code

            // Append the <img> to the <li>
            liElement.appendChild(imgElement);

            // Add data-active to the first element
            if (!firstItemAdded) {
                liElement.setAttribute('data-active', 'true'); // Mark the first element as active
                firstItemAdded = true;
            }

            liElement.setAttribute('lang', language);

            // Append the <li> to the list container
            lang_carousel_list.appendChild(liElement);
        }
    }

    console.log("DONE")

}

export function write_language_reliant_part(data) {
    document.title = data.title;
}


