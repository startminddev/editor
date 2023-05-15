const consoleDiv = document.querySelector(".console");
const inputField = consoleDiv.querySelector(".console-input");
const outputField = consoleDiv.querySelector(".console-body");
const commandHistory = [];
let commandIndex = -1;

function executeCommand(command) {
  if (command.trim() === "") {
    return;
  }

  commandHistory.unshift(command);
  commandIndex = -1;

  const parts = command.split(" ");
  const commandName = parts[0];
  const args = parts.slice(1);

  let message = "";
  switch (commandName) {
    case "hifriend":
      message = "Hello friend! How can I 'help' you?";
      break;
    case "help":
      message = "Command List: editortemp, supportcreator, clear, time, date, echo, calc, length, shtmltemp, mhtmltemp, xlhtmltemp, keyboard...(and some hidden)";
      break;
    case "clear":
      outputField.innerHTML = "";
      break;
    case "time":
      const time = new Date().toLocaleTimeString();
      message = `Hora: ${time}`;
      break;
    case "date":
      const date = new Date().toLocaleDateString();
      message = `Fecha: ${date}`;
      break;
    case "echo":
      const messageText = args.join(" ");
      output(messageText);
      break;
    case "calc":
      const expression = args.join("");
      try {
        const result = eval(expression);
        message = `Result: ${result}`;
      } catch (error) {
        message = `Error: ${error}`;
      }
      break;
    case "length":
      const stringText = args.join(" ");
      message = `The length of the string is ${stringText.length}`;
      break;
    case "shtmltemp":
      const shtmltemp = `<!DOCTYPE html>
    <html lang="es">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Título de la Página</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    
    <body class="bg-gray-100">
    
      <header class="bg-gradient-to-l from-yellow-400 via-red-500 to-pink-500 text-white py-4 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold pl-4 animate-pulse">Encabezado de la Página</h1>
      </header>
    
      <main class="bg-gradient-to-br from-blue-500 to-green-500 max-w-2xl mx-auto my-8 p-4 rounded-lg shadow-lg animate-pulse">
        <h2 class="text-2xl font-bold mb-4">Título Principal</h2>
        <p class="text-lg text-white">¡Este es el contenido principal de la página! Puedes añadir más elementos aquí.</p>
      </main>
    
      <script src="./src/preview-btn.js"></script>
      <script>
        console.log("holamundo");
      </script>
    </body>
    
    </html>`;
      document.getElementById("editor").value = shtmltemp;
      message = "HTML template copied and displayed!";
      break;

    case "mhtmltemp":
      const mhtmltemp = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Título de la Página</title>
          <link rel="stylesheet" href="https://cdn.tailwindcss.com/css/tailwind.min.css">
        </head>
        
        <body class="bg-gray-100">
        
          <header class="bg-gray-900 text-white py-4">
            <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
              <h1 class="text-3xl font-bold">Encabezado de la Página</h1>
              <nav>
                <ul class="flex space-x-4">
                  <li><a href="#" class="hover:text-blue-300">Inicio</a></li>
                  <li><a href="#" class="hover:text-blue-300">Acerca de</a></li>
                  <li><a href="#" class="hover:text-blue-300">Servicios</a></li>
                  <li><a href="#" class="hover:text-blue-300">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </header>
        
          <main class="max-w-6xl mx-auto my-8 px-4">
            <h2 class="text-2xl font-bold mb-4">Título Principal</h2>
            <p class="text-gray-700 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper. Sed vel nibh libero. Integer sagittis neque a eros elementum euismod. Fusce sit amet facilisis massa. Sed auctor velit purus, sit amet pellentesque erat aliquam eu. Nulla facilisi. Donec euismod lobortis tortor, vitae lobortis nulla mattis nec. Nunc vel nunc auctor, vehicula enim ac, gravida justo.</p>
          </main>
        
          <footer class="bg-gray-900 text-white py-4">
            <div class="max-w-6xl mx-auto px-4">
              <p>&copy; 2023 Nombre de la Empresa</p>
            </div>
          </footer>
        
        </body>
        
        </html>`;
      document.getElementById("editor").value = mhtmltemp;
      message = "HTML template copied and displayed!";
      break;

    case "xlhtmltemp":
      const xlhtmltemp = `<!DOCTYPE html>
          <html lang="es">
          
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Título de la Página</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css">
          </head>
          
          <body class="bg-gray-100">
          
            <header class="bg-white shadow">
              <div class="container mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img class="h-10" src="logo.png" alt="Logo de la Empresa">
                    <h1 class="ml-2 text-gray-800 font-bold">Nombre de la Empresa</h1>
                  </div>
                  <nav class="flex items-center">
                    <ul class="ml-4">
                      <li><a class="text-gray-800 hover:text-gray-600 font-semibold" href="#">Inicio</a></li>
                      <li><a class="text-gray-800 hover:text-gray-600 font-semibold" href="#">Acerca de</a></li>
                      <li><a class="text-gray-800 hover:text-gray-600 font-semibold" href="#">Servicios</a></li>
                      <li><a class="text-gray-800 hover:text-gray-600 font-semibold" href="#">Contacto</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          
            <main class="my-8">
              <section class="container mx-auto px-6">
                <div class="md:flex md:items-center">
                  <div class="md:w-1/2">
                    <h1 class="text-4xl font-bold text-gray-800 leading-tight">Título Principal</h1>
                    <p class="text-xl my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper. Sed vel nibh libero. Integer sagittis neque a eros elementum euismod. Fusce sit amet facilisis massa. Sed auctor velit purus, sit amet pellentesque erat aliquam eu. Nulla facilisi. Donec euismod lobortis tortor, vitae lobortis nulla mattis nec. Nunc vel nunc auctor, vehicula enim ac, gravida justo.</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Más información
                    </button>
                  </div>
                  <div class="md:w-1/2">
                    <img class="w-full h-64 rounded-md object-cover mt-6 md:mt-0" src="https://via.placeholder.com/500x300" alt="Imagen de la sección principal">
                  </div>
                </div>
              </section>
          
              <section class="bg-white border-b py-8">
                <div class="container mx-auto px-6">
                  <h2 class="text-2xl font-bold text-gray-800 text-center mb-8">Características</h2>
                  <ul class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <li class="bg-gray-100 rounded-lg shadow-md">
                      <img src="icono1.png" alt="Icono de la Característica 1" class="w-16 mx-auto py-4">
                      <h3 class="text-2xl font-bold text-gray-800 text-center my-4">Característica 1</h3>
                      <p class="text-gray-600 text-center px-6 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper.</p>
                    </li>
                    <li class="bg-gray-100 rounded-lg shadow-md">
                      <img src="icono2.png" alt="Icono de la Característica 2" class="w-16 mx-auto py-4">
                      <h3 class="text-2xl font-bold text-gray-800 text-center my-4">Característica 2</h3>
                      <p class="text-gray-600 text-center px-6 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper.</p>
                    </li>
                    <li class="bg-gray-100 rounded-lg shadow-md">
                      <img src="icono3.png" alt="Icono de la Característica 3" class="w-16 mx-auto py-4">
                      <h3 class="text-2xl font-bold text-gray-800 text-center my-4">Característica 3</h3>
                      <p class="text-gray-600 text-center px-6 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper.</p>
                    </li>
                  </ul>
                </div>
              </section>
          
              <section class="cta bg-gray-100 p-6">
                <h2 class="text-2xl font-bold mb-2">Llama a la acción</h2>
                <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper tincidunt semper. Sed vel nibh libero. Integer sagittis neque a eros elementum euismod. Fusce sit amet facilisis massa.</p>
                <button class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Comenzar ahora</button>
              </section>
              <footer class="bg-gray-200 p-4 mt-8">
                <p class="text-sm text-gray-600">&copy; 2023 Nombre de la Empresa</p>
              </footer>
          
          </body>
          
          </html>`;
      document.getElementById("editor").value = xlhtmltemp;
      message = "HTML template copied and displayed!";
      break;

    case "keyboard":
      const keyboard = `<!DOCTYPE html>
            <html>
            <head>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.17/dist/tailwind.min.css" rel="stylesheet">
              <style>
                /* Estilos adicionales si es necesario */
              </style>
            </head>
            <body>
              <div id="keyboard" class="flex">
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key black w-5 h-20 bg-black ml-0.5"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
                <div class="key white w-10 h-32 bg-white border border-black"></div>
              </div>
            </body>
            </html>
      `;
      document.getElementById("editor").value = keyboard;
      message = "HTML template copied and displayed!";
      break;

    case "editortemp":
      const editortemp = `<!DOCTYPE html>
      <html lang="es">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css">
        <title>Editor de Código en Línea</title>
        <style>
          .console-body {
            white-space: pre-wrap;
          }
        </style>
      </head>
      
      <body class="bg-gray-900">
        <header class="flex justify-between items-center p-4 bg-gray-800 text-white">
      
        </header>
      
        <div class="max-w-3xl mx-auto my-8 p-4 rounded-lg shadow-md bg-gradient-to-l from-blue-900 to-blue-500 p-4">
          <textarea id="editor" class="w-full h-64 border border-gray-400 p-2 rounded-lg"></textarea>
          <div class="flex justify-end my-4">
            <button id="preview-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Preview
            </button>
          </div>
          <div id="preview-result" class="border border-gray-400 p-4 rounded-lg"></div><br>
      
      
          <div class="flex justify-end my-1">
            <button id="console-toggle-btn" class="w-3 h-3 rounded-full bg-green-700 animate-pulse"></button>
          </div>
      
          <div class="console border border-gray-300 rounded-lg overflow-hidden w-auto h-auto">
            <div class="console-header bg-gray-300 text-black px-2 py-1">
              <span class="console-title text-left">Terminal</span>
              <div class="console-buttons justify-items-end">
                <div class="console-button console-button-red"></div>
                <div class="console-button console-button-yellow"></div>
                <div class="console-button console-button-green"></div>
              </div>
            </div>
            <div class="console-body max-h-30 overflow-auto bg-black text-white p-2 font-mono h-40"></div>
            <div class="console-input-container bg-gray-300 px-2 py-1">
              <span class="console-prompt text-black font-bold">hello@world~$</span>
              <input type="text" class="w-full console-input bg-transparent focus:outline-none">
            </div>
          </div>
        </div>
      
        <script src="./src/preview-btn.js"></script>
        <script src="./src/btn-console.js"></script>
        <script src="./src/console.js"></script>
        <script src="./src/history.js"></script>
      </body>
      
      </html>
      `;
      document.getElementById("editor").value = editortemp;
      message = "HTML template copied and displayed!";
      break;

    case "supportcreator":
      // Cambiar estilo para mostrar el elemento
      document.getElementById("capsule").style.display = "block";

      // Ocultar el elemento después de 30 segundos
      setTimeout(function () {
        document.getElementById("capsule").style.display = "none";
      }, 30000);
      break;

    default:
      message = `Command '${commandName}' not recognized`;
      break;
  }
  output(message);
}

function output(text) {
  outputField.innerHTML += `${text}<br>`;
  outputField.scrollTop = outputField.scrollHeight;
}

function autocomplete() {
  const text = inputField.value.trim().toLowerCase();
  if (!text) {
    return;
  }

  const commands = [
    "clear",
    "help",
    "time",
    "date",
    "echo",
    "calc",
    "length",
    "shtmltemp",
    "mhtmltemp",
    "xlhtmltemp",
    "keyboard",
    "supportcreator",
  ];

  const matchingCommands = commands.filter((command) =>
    command.startsWith(text)
  );

  if (matchingCommands.length === 1) {
    inputField.value = matchingCommands[0];
  }
}
