//your JS code here. If required.
function delayAndResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1000 milliseconds = 1 second
  });
}

async function updateElementWithText() {
  const outputElement = document.getElementById("output");

  try {
    const result = await delayAndResolve();
    outputElement.textContent = result;
  } catch (error) {
    console.error(error);
  }
}

updateElementWithText();
