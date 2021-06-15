const listaQuadros = [
    {
        image: document.querySelector('#img0'),
        name: document.querySelector('#nome0'),
        buttom: document.querySelector('#info0').children[1]

    },
    {
        image: document.querySelector('#img1'),
        name: document.querySelector('#nome1'),
        buttom: document.querySelector('#info1').children[1]

    },
    {
        image: document.querySelector('#img2'),
        name: document.querySelector('#nome2'),
        buttom: document.querySelector('#info2').children[1]

    },
    {
        image: document.querySelector('#img3'),
        name: document.querySelector('#nome3'),
        buttom: document.querySelector('#info3').children[1]

    }
]

SetStorage = (param) => {
    
    sessionStorage.setItem('dimension' , param)
}

Refresh = () => {

    fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 671)),
        {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'aplication/jason'
            }
        }).then((response) => response.json()).then((data) => {
            listaQuadros[0].name.innerHTML = data.name;
            listaQuadros[0].image.src = data.image;
            listaQuadros[0].buttom.id = data.id;
        });

    fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 671)),
        {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'aplication/jason'
            }
        }).then((response) => response.json()).then((data) => {
            listaQuadros[1].name.innerHTML = data.name;
            listaQuadros[1].image.src = data.image;
            listaQuadros[1].buttom.id = data.id;
        });

    fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 671)),
        {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'aplication/jason'
            }
        }).then((response) => response.json()).then((data) => {
            listaQuadros[2].name.innerHTML = data.name;
            listaQuadros[2].image.src = data.image;
            listaQuadros[2].buttom.id = data.id;
        });

    fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 671)),
        {
            method: 'GET',
            headers: {
                Accept: 'application/jason',
                "Content-type": 'aplication/jason'
            }
        }).then((response) => response.json()).then((data) => {
            listaQuadros[3].name.innerHTML = data.name;
            listaQuadros[3].image.src = data.image;
            listaQuadros[3].buttom.id = data.id;
        });

}

Refresh()



