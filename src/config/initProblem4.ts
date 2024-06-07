export const initProblem4 = () => {
  const original = console.log;
  console.log = function (msg) {
    original(msg);
    const logEl = document.querySelector('#log')!;
    const currentLog = logEl.textContent;
    logEl.textContent = `${currentLog}\n${msg}`;
  };

  const colors = ['red', 'blue', 'green', 'orange', 'purple'];
  const region = document.querySelector('#problem');

  const changeColor = () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];

    if (color) {
      region?.setAttribute('data-color', color);
    }
  };

  changeColor();
  setInterval(changeColor, 1000);
};
