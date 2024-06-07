export const initProblem1 = (): void => {
  const el = document.createElement('button');
  el.id = 'clickme';
  el.textContent = 'Click Me';

  const problemEl = document.querySelector('#problem');
  if (problemEl) {
    problemEl.innerHTML = /* html */ `
      <button id="clickme">Click Me!</button>
    `;
  }
};
