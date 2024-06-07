import { getRandom } from './getRandom';

export const initProblem3 = (): void => {
  setTimeout(() => {
    const specialOffer = document.createElement('aside');
    specialOffer.id = 'special-offer';
    specialOffer.innerHTML = /*html*/ `
      Special offer! Use code <code class="js-offer-code language-scss">ABC123</code>
    `;

    document.querySelector('#problem')?.append(specialOffer);
  }, getRandom());
};
