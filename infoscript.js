const dimensionPage = {
    
    name: document.querySelector('#dime-name'),
    image: document.querySelector('#dime-img'),
    status: document.querySelector('#status'),
    species: document.querySelector('#species'),
    type: document.querySelector('#type')
}

Dimension = () => {
    
    fetch('https://rickandmortyapi.com/api/character/' + sessionStorage.getItem('dimension'),
        {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'aplication/jason'
            }
        }).then((response) => response.json()).then((data) => {
            dimensionPage.name.innerHTML = data.name;
            dimensionPage.status.innerHTML = data.status;
            dimensionPage.species.innerHTML = data.species;
            dimensionPage.image.src = data.image;
            dimensionPage.type.innerHTML = data.type;
        });
}

Dimension()