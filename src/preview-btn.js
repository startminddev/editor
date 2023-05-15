const previewButton = document.getElementById('preview-button');
const previewResult = document.getElementById('preview-result');
const consoleLog = document.getElementById('console');
const editor = document.getElementById('editor');

previewButton.addEventListener('click', () => {
  try {
    previewResult.innerHTML = editor.value;
  } catch (error) {
    consoleLog.innerHTML = error.message;
  }
});
