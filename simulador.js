class Servicio {
    constructor(nombre, precio, proveedor, categoria) {
        this.nombre = nombre; // Nombre servicio.
        this.precio = precio; // Precio servicio.
        this.proveedor = proveedor; // Proveedor servicio.
        this.categoria = categoria; // Categoria servicio.
    }
}

// Datos servicios genéricos.
let servicios = [
    new Servicio("Banquetería básica", 5000000, "Proveedor 1", "Banquetería"),
    new Servicio("Música", 800000, "Proveedor 2", "Entretenimiento"),
    new Servicio("Decoración", 1500000, "Proveedor 3", "Decoración"),
    new Servicio("Banda en vivo", 2500000, "Proveedor 4", "Entretenimiento"),
    new Servicio("DJ", 1800000, "Proveedor 5", "Entretenimiento"),
    new Servicio("Show de luces", 1200000, "Proveedor 6", "Entretenimiento"),
    new Servicio("Fuegos artificiales", 3500000, "Proveedor 7", "Entretenimiento"),
    new Servicio("Fotografía", 2000000, "Proveedor 8", "Fotografía y Video"),
    new Servicio("Video profesional", 2800000, "Proveedor 9", "Fotografía y Video"),
    new Servicio("Maestro de ceremonias", 1500000, "Proveedor 10", "Protocolo"),
    new Servicio("Alquiler de carpas", 3000000, "Proveedor 11", "Infraestructura"),
    new Servicio("Barra libre", 4500000, "Proveedor 12", "Bebidas"),
    new Servicio("Pastelería (torta de matrimonio)", 900000, "Proveedor 13", "Banquetería"),
    new Servicio("Recuerdos personalizados", 600000, "Proveedor 14", "Accesorios"),
    new Servicio("Alquiler de mobiliario", 1200000, "Proveedor 15", "Infraestructura"),
    new Servicio("Estación de café", 800000, "Proveedor 16", "Banquetería"),
    new Servicio("Cabina fotográfica", 1500000, "Proveedor 17", "Fotografía y Video"),
    new Servicio("Jardinería y arreglos florales", 1800000, "Proveedor 18", "Decoración"),
    new Servicio("Valet parking", 700000, "Proveedor 19", "Logística"),
    new Servicio("Transporte para invitados", 2500000, "Proveedor 20", "Logística")
];

let carro = JSON.parse(localStorage.getItem('carro')) || []; // Recuperación carro del localStorage navegador o inicio vacío si aplica.

const listaCarro = document.getElementById('lista-carro'); // Lista renderización de los servicios en carro de compras.
const totalCarro = document.getElementById('total'); // Elemento total del carro.
const filtroNombre = document.getElementById('filtro-nombre'); // Input filtro servicios por nombre.
const filtroPrecioMin = document.getElementById('filtro-precio-min'); // Input filtro por precio mínimo.
const filtroPrecioMax = document.getElementById('filtro-precio-max'); // Input filtro por precio máximo.
const botonFiltro = document.getElementById('aplicar-filtro'); // Botón filtro.

// Renderización tabla de servicios.
const tbodyServicios = document.querySelector('#tabla-servicios tbody');

function renderizarServicios(lista = servicios) {
    tbodyServicios.innerHTML = ''; // Clean tabla antes de inicio renderizar.
    lista.forEach((servicio, index) => {
        const row = document.createElement('tr'); // Creación fila para cada servicio disponible.
        row.innerHTML = `
            <td>${servicio.nombre}</td>
            <td>${servicio.categoria}</td>
            <td>${servicio.precio} CLP</td>
            <td><button class="btn-agregar" data-index="${index}">Agregar</button></td>
        `;
        tbodyServicios.appendChild(row); // Añadir fila al cuerpo tabla.
    });
}

// Usar evento delegado para manejar clicks en "Agregar"
tbodyServicios.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-agregar')) {
        const index = event.target.dataset.index; // Obtener el índice del servicio
        agregarAlCarro(index);
    }
});

// Renderización carro de compras.
function renderizarCarro() {
    listaCarro.innerHTML = ''; // Clean lista antes de inicio renderizar.
    carro.forEach((servicio, index) => {
        const li = document.createElement('li'); // Crear elemento de lista para cada servicio en el carro de compras.
        li.innerHTML = `
            <strong>${servicio.nombre}</strong> - ${servicio.precio} CLP
            <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        listaCarro.appendChild(li); // Añadir el servicio al carro de compras en el DOM.
    });

    const total = carro.reduce((sum, servicio) => sum + servicio.precio, 0); // Costo total del carro de compras.
    totalCarro.innerText = `${total} CLP`; // Total carro de compras en el DOM.
    localStorage.setItem('carro', JSON.stringify(carro)); // Guardar el carro en localStorage.
}

// Usar evento delegado para manejar clicks en "Eliminar"
listaCarro.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const index = event.target.dataset.index; // Índice del servicio.
        eliminarDelCarro(index); // Eliminación servicio.
    }
});

// Agregar servicio al carro de compras.
function agregarAlCarro(index) {
    carro.push(servicios[index]); // Añadir servicio al carro de compras.
    renderizarCarro(); // Actualizar carro de compras.
}

// Eliminar servicio del carro de compras.
function eliminarDelCarro(index) {
    carro.splice(index, 1); // Quitar servicio del carro de compras.
    renderizarCarro(); // Actualizar carro de compras.
}

// Filtros por nombre y precio
function aplicarFiltros() {
    const nombreFiltro = filtroNombre.value.toLowerCase(); // Obtener y normalizar el filtro de nombre.
    const precioMin = parseInt(filtroPrecioMin.value) || 0; // Obtener el filtro de precio mínimo con valor por defecto 0.
    const precioMax = parseInt(filtroPrecioMax.value) || Infinity; // Obtener el filtro de precio máximo con valor por defecto infinito.

    const serviciosFiltrados = servicios.filter(servicio =>
        servicio.nombre.toLowerCase().includes(nombreFiltro) &&
        servicio.precio >= precioMin &&
        servicio.precio <= precioMax
    ); // Filtrar los servicios según los criterios de usuario.

    renderizarServicios(serviciosFiltrados); // Mostrar servicios filtrados.
}

// Inicializar filtro.
botonFiltro.addEventListener('click', aplicarFiltros); // Asociar la función de filtros al botón de Aplicar Filtros.
renderizarServicios(); // Mostrar todos los servicios correspondientes al filtro.
renderizarCarro(); // Mostrar el carro inicial al cargar la página.

const filtroCategorias = document.querySelectorAll('#filtro-categorias input[type="checkbox"]');
const botonFiltroCategorias = document.getElementById('aplicar-filtro-categorias');

function guardarCategoriasSeleccionadas(categorias) {
    sessionStorage.setItem('categoriasSeleccionadas', JSON.stringify(categorias));
}

function aplicarFiltroCategorias() {
    const categoriasSeleccionadas = Array.from(filtroCategorias)
        .filter(checkbox => checkbox.checked) // Filtrar los checkbox seleccionados por el usuario.
        .map(checkbox => checkbox.value); // Obtener los valores de las categorías seleccionadas por el usuario.

    guardarCategoriasSeleccionadas(categoriasSeleccionadas); // Guardar en sessionStorage.

    const serviciosFiltrados = servicios.filter(servicio =>
        categoriasSeleccionadas.includes(servicio.categoria) // Filtro servicios por categorías selección usuario.
    );

    renderizarServicios(serviciosFiltrados.length > 0 ? serviciosFiltrados : servicios); // Renderización solo de servicios filtrados usuario o totales si aplica.
}

function resetearCheckboxes() {
    filtroCategorias.forEach(checkbox => {
        checkbox.checked = false; // Deseleccionar todos los checkboxes.
    });
}

botonFiltroCategorias.addEventListener('click', aplicarFiltroCategorias);
resetearCheckboxes(); // Deseleccionar los checkboxes al cargar la página.
