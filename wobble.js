// credit: https://codepen.io/queenadreena/pen/oKGyYq

function wobbleInit() {
  // Create array of any elements with "wobble" class
  const all = document.querySelectorAll('.wobble');

  // Iterate through each "wobble"
  all.forEach(el => {
    // Get the text content of the element
    let text = el.textContent;
    // Create an array of separate letters
    text = text.split(/(?=.)/);
    // Iterate through each letter and give it its own span element and individual animation delay offset
    let textCode = text.map((x, idx) => {
      let delay = (idx + 1) * 200;
      return `<span class="wobbletext" style="animation-delay: ${delay}ms">${x}</span>`;
    })
    // replace the element's html with our dynamically created html
    el.innerHTML = textCode.join("");
  });
}

wobbleInit();