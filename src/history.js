inputField.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
        executeCommand(inputField.value);
        inputField.value = "";
        break;
      case "ArrowUp":
        if (commandIndex > 0) {
          commandIndex--;
          inputField.value = commandHistory[commandIndex];
        }
        break;
      case "ArrowDown":
        if (commandIndex < commandHistory.length - 1) {
          commandIndex++;
          inputField.value = commandHistory[commandIndex];
        } else {
          commandIndex = -1;
          inputField.value = "";
        }
        break;
      case "Tab":
        event.preventDefault();
        autocomplete();
        break;
    }
  });
  
  output("Welcome Dev! =)");
  inputField.focus();