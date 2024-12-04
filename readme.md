# Pre-entrega 03

# Simulador de Gestión de Servicios para Bodas

**Autor:** Carlos Biénzobas.

## Tecnologías Utilizadas
- **HTML5**: Estructura de la página web.
- **JavaScript (ES6)**: Lógica del simulador.

## Descripción del Proyecto
Este simulador desarrollado en JavaScript y HTML permite gestionar servicios relacionados con bodas o Matrimonios. Permite a los usuarios la posibilidad de ver los servicios disponibles y seleccionarlos para un carrito de compra, dando la visibilidad del precio de cada servicio, la posibilidad de aplicar filtros para la busqueda de los mismos dentro de la pagina y la capacidad de agregar/eliminar servicios del carro de compras calculando el costo total de la selección.

Esta entrega corresponde a la tercera simulación de un sitio para gestión de servicios de matrimonios, cubriendo los requisitos presentados para la `Pre-entrega 03`.

**Nota:** Para mayor información y evolución del presente proyecto, por favor referise a entregas anteriores disponibles en los siguientes `links:`

https://github.com/cbienzobasf/js_preEntrega1_Bienzobas

https://github.com/cbienzobasf/js_preEntrega2_Bienzobas

## Conocimientos Aplicados
 El desarrollo de este proyecto integra la implementación de interacción dinámica entre el usuario y la interfaz utilizando eventos del `DOM`, la persistencia de datos mediante `JSON` y almacenamiento mediante LocalStorage y SessionStorage vistos en clases.

## Estructura del Proyecto
1. **index.html**: Estructura básica de la página con contenido estático y vinculación al archivo `simulador.js` para gestión de servicios.
2. **simulador.js**: Lógica en lenguage `JavaScript` del simulador de servicios, filtros, carro de compra y almacenamiento de datos.

### Funcionalidades Principales

1. **Visualización de Servicios Disponibles**:
   - Contenido de servicios se renderizan en tabla por medio de `DOM` y los `headers` de la tabla son provistos de manera estática por medio del `HTML`. 
   - Tabla incluye columnas de Servicio, Categoría, Precio y Acción.
   - Botón `Agregar` en tabla permite agregar servicios al carro.
   - Actualización en vivo de `DOM` en función de los filtros utilizados por el usuario.

2. **Gestión del Carro de Compras**:
   - `Agregar` (configurado desde la sección entregada al momento de renderizar los servicios y evento boton agregar) y `Eliminar` (configurado como parte de la sección entregada al momento de renderizar el carro de compra y evento botón eliminar) servicios del carro.
   - Actualización en vivo de `DOM` en función de los servicios agregados/elminados por el usuario.
   - Calcular el `total` de carro de compras.
   - Contenido del carro guardado localmente en navegador usando `LocalStorage`.

3. **Utilización de Filtros**:
   - Filtro de servicios por `Nombre`.
   - Filtro de servicios por rango de precios con `Precio mínimo` y `Precio máximo`.
   - Filtro de servicios por selección de categorías utilizando `checkbox` para su almacenamiento en `SessionStorage` para su manteniencia solamente durante el uso de la ventana del navegador.

## Conocimientos Aplicados

1. **DOM y Eventos**:
   - Métodos `getElementById`, `addEventListener` y `createElement`.
   - Eventos `clic` con botones para interactuar con filtros, tabla de servicios y carro de compras.
   - Gestión dinámica de servicios mediante `DOM` con modificaciones a `DOM` al agregar/eliminar servicios.

2. **JSON y Storage**:
   - `JSON.stringify` y `JSON.parse` para manejar datos de carro de compra con `LocalStorage`.
   - `SessionStorage` para gestionar filtro de las categorías seleccionadas.

3. **Operadores Avanzados**:
   - Operadores `ternarios` y `lógicos` para simplificar/optimizar filtros y renderización.

## Cumplimiento de Criterios de Evaluación

1. **Funcionalidad**:
   - Flujo completo de entrada, proceso y salida.
   - Implementación de funcionalidades mediante `renderizarServicios`, `aplicarFiltros` y `aplicarFiltroCategorias` aseguran la operatividad requerida por el usuario para selección de los servicios y inclusión en el carro de compra.

2. **Interactividad**:
   - Entradas de usuario en front `HTML` mediante `formularios`, `botón` y `checkbox`.
   - Salidas de usuario mediante actualización del `DOM` en front `HTML`.

3. **Escalabilidad**:
   - Definición de `clase` `Servicio` para representar servicios.
   - Utilización de  `LocalStorage` y `SessionStorage` para datos de carro de compra usuario y filtros.

4. **Legibilidad**:
   - `Comentarios`  en línea a línea de código en documento `simulador.js` detallando racional que da soporte a propuesta de proyecto.
   - `Nombres descriptivos` para `variables` y `funciones`.

---