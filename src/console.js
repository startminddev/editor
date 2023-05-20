// Obtener elementos del DOM
const consoleBody = document.querySelector('.console-body');
const consoleInput = document.querySelector('.console-input');

// Función para mostrar el texto en la consola
function logToConsole(text) {
  const logElement = document.createElement('div');
  logElement.textContent = text;
  consoleBody.appendChild(logElement);

  // Hacer scroll hacia abajo
  consoleBody.scrollTop = consoleBody.scrollHeight;
}

// Función para copiar el código al portapapeles
function copyToClipboard(code) {
  const tempInput = document.createElement('textarea');
  tempInput.value = code;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

// Función para procesar los comandos ingresados en la consola
function processCommand(command) {
  if (command === 'btn') { // Comando para generar un boton
    const buttonCode = `<button class="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Botón
  </button>`;
    copyToClipboard(buttonCode);
    logToConsole('botón copiado al portapapeles.');
  } else if (command === 'tar') { // Comando para generar una tarjeta
    const cardCode = `<div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="image.jpg" alt="Imagen">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Título de la tarjeta</div>
        <p class="text-gray-700 text-base">Descripción de la tarjeta.</p>
      </div>
    </div>`;
    copyToClipboard(cardCode);
    logToConsole('tarjeta copiado al portapapeles.');
  } else if (command === 'form') { // Comando para generar un formulario
    const formCode = `<form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">
          Nombre
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Ingrese su nombre">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ingrese su email">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Enviar
        </button>
      </div>
    </form>`;
    copyToClipboard(formCode);
    logToConsole('formulario copiado al portapapeles.');
  } else if (command === 'li3') { // Comando para generar una lista de 3
    const listCode = `<ul class="list-disc list-inside">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
    </ul>`;
    copyToClipboard(listCode);
    logToConsole('lista copiado al portapapeles.');
  } else if (command === 'li4') { // Comando para generar una lista de 3
    const listCode = `<ul class="list-disc list-inside">
      <li>Elemento 1</li>
      <li>Elemento 2</li>
      <li>Elemento 3</li>
      <li>Elemento 4</li>
    </ul>`;
    copyToClipboard(listCode);
    logToConsole('lista copiado al portapapeles.');
  } else if (command === 'alert') { // Comando para generar una alerta
    const alertCode = `<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <p class="font-bold">¡Advertencia!</p>
      <p>Este es un mensaje de alerta.</p>
    </div>`;
    copyToClipboard(alertCode);
    logToConsole('alerta copiado al portapapeles.');
  } else if (command === 'menu') { // Comando para generar código de menú de navegación
    const menuCode = `<nav class="flex items-center justify-center">
    <ul class="flex space-x-4">
      <li><a href="#" class="text-gray-700 hover:text-gray-900">Inicio</a></li>
      <li><a href="#" class="text-gray-700 hover:text-gray-900">Acerca de</a></li>
      <li><a href="#" class="text-gray-700 hover:text-gray-900">Servicios</a></li>
      <li><a href="#" class="text-gray-700 hover:text-gray-900">Contacto</a></li>
    </ul>
  </nav>`;
    copyToClipboard(menuCode);
    logToConsole(' menú de navegación copiado al portapapeles.');
  } else if (command === 'prog_bar') { // Comando para generar código de barra de progreso
    const progressBarCode = `<div class="w-full h-4 bg-gray-200 rounded-md">
    <div class="h-full bg-blue-500 rounded-md"></div>
  </div>`;
    copyToClipboard(progressBarCode);
    logToConsole('barra de progreso copiado al portapapeles.');
  } else if (command === 'carrusel') { // Comando para generar código de carrusel de imágenes
    const carouselCode = `<div class="carousel">
      <!-- Agrega aquí las imágenes del carrusel -->
    </div>`;
    copyToClipboard(carouselCode);
    logToConsole('carrusel de imágenes copiado al portapapeles.');
  } else if (command === 'table') { // Comando para generar código de tabla
    const tableCode = `<table class="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th class="py-3 px-6 text-left bg-gray-100 font-bold uppercase tracking-wider">
          Encabezado 1
        </th>
        <th class="py-3 px-6 text-left bg-gray-100 font-bold uppercase tracking-wider">
          Encabezado 2
        </th>
        <th class="py-3 px-6 text-left bg-gray-100 font-bold uppercase tracking-wider">
          Encabezado 3
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="py-4 px-6">Dato 1</td>
        <td class="py-4 px-6">Dato 2</td>
        <td class="py-4 px-6">Dato 3</td>
      </tr>
      <tr>
        <td class="py-4 px-6">Dato 4</td>
        <td class="py-4 px-6">Dato 5</td>
        <td class="py-4 px-6">Dato 6</td>
      </tr>
    </tbody>
  </table>
  `;
    copyToClipboard(tableCode);
    logToConsole('tabla copiado al portapapeles.');
  } else if (command === 'modal') { // Comando para generar código de modal o ventana emergente
    const modalCode = `<div class="modal">
      <!-- Contenido del modal -->
    </div>`;
    copyToClipboard(modalCode);
    logToConsole('modal copiado al portapapeles.');
  } else if (command === 'formato_fecha') { // Comando para generar código de formato de fecha
    const formatDateCode = `const fecha = new Date();
    const formatoFecha = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    console.log(formatoFecha);`;
    copyToClipboard(formatDateCode);
    logToConsole('formato de fecha copiado al portapapeles.');
  } else {
    logToConsole('Comando desconocido. Inténtalo de nuevo.');
  }
}

// Evento de teclado para capturar los comandos ingresados
consoleInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = consoleInput.value;
    logToConsole(`$ ${command}`); // Muestra el comando ingresado en la consola
    processCommand(command);
    consoleInput.value = ''; // Limpia el campo de entrada
  }
});

