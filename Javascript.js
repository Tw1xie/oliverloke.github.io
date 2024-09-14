document.addEventListener('DOMContentLoaded', (event) => {
  const sentences = [
      " Velkommen til min hjemmeside!",
      " Jeg er en ung Web Udvikler.",
      " Ejer af ApathyMC.",
      " Opdateringer kommer."
  ];

  const typingElement = document.getElementById('typer-text'); // Corrected method name
  let sentenceIndex = 0;

  function type() {
      const currentSentence = sentences[sentenceIndex];
      let index = 0;
      let typing = setInterval(() => {
          typingElement.textContent += currentSentence[index];
          index++;
          if (index >= currentSentence.length) { // Corrected variable name
              clearInterval(typing);
              setTimeout(deleteText, 1000);
          }
      }, 100);

      function deleteText() {
          typing = setInterval(() => {
              typingElement.textContent = currentSentence.substring(0, index);
              index--;
              if (index === 0) { // Removed unnecessary semicolon
                  clearInterval(typing);
                  sentenceIndex = (sentenceIndex + 1) % sentences.length; // Corrected array length reference
                  setTimeout(type, 1000);
              }
          }, 50);
      }
  }

  type();
});