const cleaneditor = document.getElementById('editor');
const consoleDiv = document.querySelector(".console");
const inputField = consoleDiv.querySelector(".console-input");
const outputField = consoleDiv.querySelector(".console-body");
const commandHistory = [];
let commandIndex = -1;

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
    "slotstmp",
    "supportcreator",
    "hoteltmp",
    "cleaneditor",
  ];

  const matchingCommands = commands.filter((command) =>
    command.startsWith(text)
  );

  if (matchingCommands.length === 1) {
    inputField.value = matchingCommands[0];
  }
}

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
    case "preview":
      try {
        previewResult.innerHTML = editor.value;
      } catch (error) {
        consoleLog.innerHTML = error.message;
      }
      message = "Watch the preview!"
      break;

    case "hifriend":
      message = "Hello friend! How can I 'help' you?";
      break;

    case "help":
      message = "Command List: editortemp, hoteltmp, slotstmp, supportcreator, clear, time, date, echo, calc, length, shtmltemp, mhtmltemp, xlhtmltemp, keyboard, cleaneditor...(and some hidden)";
      break;

    case "cleaneditor":
      const cleaneditor = ``
      document.getElementById("editor").value = cleaneditor;
      message = "Cleaned";
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
          #keyblack {border-bottom-right-radius: 12px 12px; border-bottom-left-radius: 12px 12px;}
          #keywhite {border-bottom-right-radius: 12px 12px; border-bottom-left-radius: 12px 12px;}
        </style>
      </head>
      <body>
        <div id="keyboard" class="flex">
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keyblack" class="key black w-5 h-20 bg-black ml-0.5"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
          <div id="keywhite" class="key white w-10 h-32 bg-white border border-black"></div>
        </div>
      </body>
      </html>

      `;
      document.getElementById("editor").value = keyboard;
      message = "HTML template copied and displayed!";
      break;

    case "slotstmp":
      const slotstmp = `<!DOCTYPE html>
      <html lang="es">
      
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Título de la Página</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css">
      </head>
      
      <body>
          <section class="p-12">
              <div class="ml-22 inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full w-68 h-20 flex justify-center items-center">
                  <span id="result" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">🥳👽🍁</span>
                </div>
                
              <br>
              <div class="flex justify-center bg-black h-18">
      
                  <div class="flex justify-center p-2">
                      <button onclick="spin(1)" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">x1 spin</button>
                      <button onclick="spin(2)" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">x2 spin</button>
                      <button onclick="spin(5)" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">x5 spin</button>
                      <button onclick="spin(10)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">x10 spin</button>
                  </div>
              </div>
          </section>
      
          <footer class="bg-gray-200 p-4 mt-8">
              <p class="text-sm text-gray-600">&copy; 2023</p>
          </footer>
      
          <script>
              function spin(factor) {
                  var symbols = ["🍒", "🍊", "🍇", "🔔", "💎", "⭐", "🍀", "🎉"];
                  var result = document.getElementById("result");
      
                  var randomSymbols = [];
                  for (var i = 0; i < 3; i++) {
                      var randomIndex = Math.floor(Math.random() * symbols.length);
                      randomSymbols.push(symbols[randomIndex]);
                  }
      
                  result.textContent = randomSymbols.join("");
      
                  // Multiplicar el resultado por el factor seleccionado
                  var multipliedResult = "";
                  for (var j = 0; j < factor; j++) {
                      multipliedResult += randomSymbols.join("");
                  }
      
                  result.textContent = multipliedResult;
              }
          </script>
      </body>
      
      </html>
      `;
      document.getElementById("editor").value = slotstmp;
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
      </head>
      
      <body class="bg-gray-900">
        <header class="flex justify-center items-center p-4 bg-gray-800 font-bold">
          WELCOME!
        </header>
      
        <div id="capsule" class="flex justify-center items-center bg-transparent text-center">
          <style>
            #capsule {
              margin-top: 15px;
              margin-bottom: -18px;
              display: none;
            }
          </style>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" class="max-w-xs mx-auto">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="9K7KYKREAQ9QS">
            <input type="hidden" name="currency_code" value="EUR">
            <button type="submit" name="submit"
              class="block w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
              <img src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
                alt="PayPal, la forma rápida y segura de pagar en Internet." class="mx-auto">
            </button>
            <img alt="" border="0" src="https://www.paypalobjects.com/es_ES/i/scr/pixel.gif" width="1" height="1">
            <div class="mb-4">
              <select name="os0" id="subscription"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="Opción 1" class="py-2">Opción 1 : €1,00 EUR - diariamente</option>
                <option value="Opción 2" class="py-2">Opción 2 : €6,00 EUR - semanalmente</option>
                <option value="Opción 3" class="py-2">Opción 3 : €25,50 EUR - mensualmente</option>
                <option value="Opción 4" class="py-2">Opción 4 : €300,00 EUR - anualmente</option>
              </select>
            </div>
          </form>
        </div>
      
      
        <div class="max-w-3xl mx-auto my-8 p-4 rounded-lg shadow-md bg-gradient-to-r from-gray-800 to-gray-700 p-8">
          <textarea id="editor" class="w-full h-64 border border-gray-400 p-2 rounded-lg"></textarea>
          <div class="flex justify-end my-4">
            <button id="preview-button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Preview
            </button>
          </div>
      
          <div id="preview-result" class="border border-gray-400 p-4 rounded-lg"></div><br>
          <div class="flex justify-end my-1">
            <button id="console-toggle-btn"
              class="w-3 h-3 rounded-full animate-pulse bg-green-700 shadow hover:shadow-xl "></button>
          </div>
          <div class="console border border-gray-300 rounded-lg overflow-hidden w-auto h-auto">
            <div class="console-header bg-gray-400 text-black px-2 py-1">
              <span class="console-title text-left">Terminal</span>
              <div class="console-buttons justify-items-end">
                <div class="console-button console-button-red"></div>
                <div class="console-button console-button-yellow"></div>
                <div class="console-button console-button-green"></div>
              </div>
            </div>
            <div class="console-body max-h-30 overflow-auto bg-black text-white p-2 font-mono h-40"></div>
            <div class="console-input-container bg-gray-400 px-2 py-1 flex">
              <span class="console-prompt text-black font-bold">hello@world~$</span>
              <input type="text" class="w-full console-input bg-transparent focus:outline-none ml-2">
            </div>
          </div>
        </div>
      
      
        <footer class="bg-gray-500 rounded-l m-2 text-white p-4">
          <a href="https://github.com/startminddev/editor" target="_blank"
            class="flex justify-center items-center hover:opacity-50">
            <img src="./src/github.png" alt="GitHub" class="w-10 h-10 rounded-full">
          </a>
        </footer>
      
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
    
    case "hoteltmp":
      const hoteltmp = `<!DOCTYPE html>
        <html lang="es">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hotel XYZ</title>
          <!-- Agrega los enlaces a los estilos de Tailwind CSS -->
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        
        <body>
          <header class="bg-gray-900 text-white py-4">
            <div class="container mx-auto flex justify-between items-center">
              <h1 class="text-2xl font-bold">Hotel XYZ</h1>
              <nav>
                <ul class="flex space-x-4">
                  <li><a href="#" class="hover:text-gray-300">Inicio</a></li>
                  <li><a href="#" class="hover:text-gray-300">Habitaciones</a></li>
                  <li><a href="#" class="hover:text-gray-300">Servicios</a></li>
                  <li><a href="#" class="hover:text-gray-300">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </header>
        
          <section class="bg-gray-100 py-20">
            <div class="container mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="md:col-span-1">
                  <h2 class="text-4xl font-bold mb-4">Descubre el lujo y la comodidad</h2>
                  <p class="text-gray-700 mb-6">Bienvenido al Hotel XYZ, donde la elegancia y el confort se
                    encuentran. Nuestro hotel te ofrece una experiencia inolvidable con habitaciones de primera
                    clase, servicios de calidad y una ubicación conveniente en el corazón de la ciudad.</p>
                  <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Reserva ahora</a>
                </div>
                <div class="md:col-span-1">
                  <img src="hotel-image.jpg" alt="Hotel XYZ" class="rounded-lg">
                </div>
              </div>
            </div>
          </section>
        
          <section class="bg-gray-200 py-20">
            <div class="container mx-auto">
              <h2 class="text-4xl font-bold mb-10 text-center">Nuestras habitaciones</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
                <div class="bg-white p-6 rounded-lg shadow">
                  <h3 class="text-2xl font-bold mb-4">Habitación Deluxe</h3>
                  <p class="text-gray-700 mb-4">Nuestra habitación Deluxe ofrece un espacio amplio y lujoso con todas
                    las comodidades que necesitas para una estancia perfecta.</p>
                  <a href="#" class="text-blue-500 hover:text-blue-600">Ver más</a>
                </div>
        
              </div>
            </div>
          </section>
        
          <footer class="bg-gray-900 text-white py-6">
            <div class="container mx-auto flex justify-between items-center">
              <div>
                <h3 class="text-xl font-bold">Hotel XYZ</h3>
                <p class="text-gray-500">Dirección del hotel, Ciudad</p>
              </div>
              <div>
                <h4 class="text-lg font-bold mb-2">Contacto</h4>
                <p class="text-gray-500">Teléfono: +123456789</p>
                <p class="text-gray-500">Correo electrónico: info@hotelxyz.com</p>
              </div>
              <div>
                <h4 class="text-lg font-bold mb-2">Síguenos en redes sociales</h4>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-500 hover:text-gray-300">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 2c5.51 0 10 4.49 10 10s-4.49 10-10 10S2 18.51 2 13 6.49 3 12 3zm-1.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm6.22 1.03c.06.16.09.33.09.52 0 .86-.71 1.56-1.56 1.56h-1.88c-.09.78-.63 1.42-1.39 1.57-.77.16-1.57-.09-2.15-.67-.55-.54-.8-1.3-.65-2.06.13-.76.64-1.41 1.36-1.72.4-.19.86-.24 1.32-.15.12-.42.37-.79.72-1.07-.4-.23-.67-.66-.67-1.16 0-.88.71-1.59 1.59-1.59.88 0 1.59.71 1.59 1.59 0 .11-.01.22-.04.32.52.16.95.56 1.15 1.08zm-2.72 2.15h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zm-2.41 0h1.5c.41 0 .75.34.75.75s-.34.75-.75.75h-1.5c-.41 0-.75-.34-.75-.75
        s.34-.75-.75-.75z" />
                    </svg>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-300">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 2c5.51 0 10 4.49 10 10s-4.49 10-10 10S2 18.51 2 13 6.49 3 12 3zm-1 4.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zm4.4 2.84c.13.31.2.65.2 1 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-.35.04-.69.12-1.02C4.6 10.86 3.8 12.86 4.31 14.86c.23.84.97 1.44 1.86 1.44h8.66c.88 0 1.62-.6 1.85-1.43.5-2 0-4-1.41-5.57zm-2.93-1.57c.18-.23.28-.52.28-.84 0-.71-.58-1.29-1.29-1.29-.71 0-1.29.58-1.29 1.29 0 .32.1.61.27.84.18.23.44.37.72.37s.54-.14.72-.37zm-5.94 0c.18-.23.28-.52.28-.84 0-.71-.58-1.29-1.29-1.29-.71 0-1.29.58-1.29 1.29 0 .32.1.61.27.84.18.23.44.37.72.37s.54-.14.72-.37zm4.65 2.53c-.01.02-.01.05-.02.07-.08.28-.18.55-.33.79-.17.27-.38.51-.63.71-.26.21-.57.37-.92.47-.36.1-.75.15-1.15.15s-.79-.05-1.15-.15c-.35-.1-.66-.26-.92-.47-.25-.2-.46-.44-.63-.71-.15-.24-.25-.51-.33-.79-.01-.02-.01-.05-.02-.07-.08-.27-.12-.55-.12-.84 0-.29.04-.57.12-.84.01-.02.01-.05.02-.07.08-.28.18-.55.33-.79.17-.27.38-.51.63-.71.26-.
        
        21.57-.37.92-.47.36-.1.75-.15 1.15-.15s.79.05 1.15.15c.35.1.66.26.92.47.25.2.46.44.63.71.15.24.25.51.33.79.01.02.01.05.02.07.08.27.12.55.12.84 0 .29-.04.57-.12.84z" />
                    </svg>
                  </a>
                </div>
              </div>
        
            </div>
          </footer>
        </body>
        
        </html>
        `;
      document.getElementById("editor").value = hoteltmp;
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
