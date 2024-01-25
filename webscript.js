// Første utkast, bygger på legodudes

/*console.log(resources)

let resourcesHTML = "<h2>HTML</H2>"

resources.map(resource => resourcesHTML = `<article>
<h3>${resource.category}</h3>
<p>${resource.text}</p>
<ul><li>${resource.sources}</li></ul>
</article>
`)

const main = document.getElementsByTagName("main")
main[0].innerHTML = resourcesHTML
*/ 

// Selector for hovedelementet "main"
const main = document.querySelector("main");

// Selector for alle navigasjonselementene
const navItems = document.querySelectorAll(".nav-link");

// Klikklyttere for hvert navigasjonselement
navItems.forEach(item => {
    item.addEventListener("click", function() {
        // Fjerner "active" klassen fra alle navigasjonselementene
        navItems.forEach(navItem => {
            navItem.classList.remove("active");
        });

        // Legger til "active" klassen på det elementet man klikker på
        item.classList.add("active");

        // Skjuler alle ressursene
        main.innerHTML = "";

        // Henter kategorien som tilsvarer elementet man klikket på
        const category = item.innerText;

        // Finner ressursene for den valgte kategorien
        const selectedResources = resources.find(resource => resource.category === category);

        // Hvis ressursene er funnet => generer HTML-strukturen og legg til i hovedelementet
        if (selectedResources) {
            const resourceHTML = `
                <article>
                    <h2>${selectedResources.category}</h2>
                    <p>${selectedResources.text}</p>
                    <ul>
                        ${selectedResources.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
                    </ul>
                </article>
            `;
            main.insertAdjacentHTML('beforeend', resourceHTML);
        } else {
            // Hvis ressursene ikke er funnet, vises startmeldingen
            main.innerHTML = '<p id="start-message">Trykk på et av meny-punktene for å starte</p>';
        }
    });
});

// Viser startmeldingen når siden lastes
document.addEventListener("DOMContentLoaded", function() {
    main.innerHTML = '<p id="start-message">Trykk på et av meny-punktene for å starte</p>';
});