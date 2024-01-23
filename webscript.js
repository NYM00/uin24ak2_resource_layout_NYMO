console.log(resources)

let resourcesHTML = "<h2>HTML</H2>"

resources.map(resource => resourcesHTML += `<section>
<h3>${resource.category}</h3>
<p>${resource.text}</p>
<ul><li>${resource.sources}</li></ul>
</section>
`)

const main = document.getElementsByTagName("main")
main[0].innerHTML = resourcesHTML