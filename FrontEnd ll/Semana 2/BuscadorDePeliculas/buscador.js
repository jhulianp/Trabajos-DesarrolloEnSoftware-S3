var formulario = document.getElementById('formulario-pelicula');
var listaContenedor = document.getElementById('lista-peliculas');
var buscador = document.getElementById('buscador');
var filtroGenero = document.getElementById('filtro-genero');

let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];

// 1. guardar o editar peliculas
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var idField = document.getElementById('pelicula-id').value;
    var nombre = document.getElementById('titulo').value;
    var gen = document.getElementById('genero').value;
    var linkImg = document.getElementById('imagen').value;

    var peliData = {
        id: idField ? parseInt(idField) : Date.now(),
        titulo: nombre,
        genero: gen,
        imagen: linkImg
    };

    if (idField) {
        // editar peliculas
        for (var i = 0; i < peliculas.length; i++) {
            if (peliculas[i].id === parseInt(idField)) {
                peliculas[i] = peliData;
                break;
            }
        }
    } else {
        // agregar arreglo
        peliculas.push(peliData);
    }

    guardarEnStorage();
    formulario.reset();
    document.getElementById('pelicula-id').value = '';
    document.getElementById('form-titulo').innerText = "Agregar Nueva Pelicula";
    renderizarPeliculas();
});

// 2. eliminar pelicula
function eliminarPelicula(id) {
    peliculas = peliculas.filter(function(p) { 
        return p.id !== id; 
    });
    guardarEnStorage();
    renderizarPeliculas();
}

// 3. preparar edicion
function editarPelicula(id) {
    var encontrada = peliculas.find(function(item) {
        return item.id === id;
    });

    if (encontrada) {
        document.getElementById('pelicula-id').value = encontrada.id;
        document.getElementById('titulo').value = encontrada.titulo;
        document.getElementById('genero').value = encontrada.genero;
        document.getElementById('imagen').value = encontrada.imagen;
        document.getElementById('form-titulo').innerText = "Editando: " + encontrada.titulo;
    }
}

// buscar y filtros

function filtrarYBuscar() {
    var query = buscador.value.toLowerCase();
    var genFiltro = filtroGenero.value;

    var filtradas = peliculas.filter(function(p) {
        var matchNombre = p.titulo.toLowerCase().indexOf(query) > -1;
        var matchGen = genFiltro === "" || p.genero === genFiltro;
        return matchNombre && matchGen;
    });

    renderizarPeliculas(filtradas);
}

buscador.addEventListener('input', filtrarYBuscar);
filtroGenero.addEventListener('change', filtrarYBuscar);

// utilidades

function guardarEnStorage() {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    actualizarOpcionesGenero();
}

function actualizarOpcionesGenero() {
    var listaGeneros = [];
    peliculas.forEach(function(p) {
        if (!listaGeneros.includes(p.genero)) {
            listaGeneros.push(p.genero);
        }
    });

    filtroGenero.innerHTML = '<option value="">Todos los generos</option>';
    listaGeneros.forEach(function(g) {
        var opc = document.createElement('option');
        opc.value = g;
        opc.text = g;
        filtroGenero.add(opc);
    });
}

function renderizarPeliculas(datos) {
    var mostrar = datos || peliculas;
    listaContenedor.innerHTML = '';
    
    for (var j = 0; j < mostrar.length; j++) {
        var p = mostrar[j];
        var item = document.createElement('div');
        item.className = 'tarjeta-pelicula';
        
        item.innerHTML = `
            <img src="${p.imagen}" alt="${p.titulo}">
            <h3>${p.titulo}</h3>
            <p>${p.genero}</p>
            <div class="acciones">
                <button class="btn-editar" onclick="editarPelicula(${p.id})">Editar</button>
                <button class="btn-eliminar" onclick="eliminarPelicula(${p.id})">Borrar</button>
            </div>
        `;
        listaContenedor.appendChild(item);
    }
}

// inicializar la aplicacion
actualizarOpcionesGenero();
renderizarPeliculas();