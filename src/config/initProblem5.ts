const goodUrls = [
  'www.bacondelivery.com/weekly-bacon-delivery/',
  'www.bacondelivery.com/daily-bacon-delivery/',
  'www.bacondelivery.com/bacon-of-the-month-club/',
];

const badUrls = [
  'www.bacondelivery.com/',
  'www.bacondelivery.com/?some_param',
  'www.bacondelivery.com/about/',
  'www.bacondelivery.com/contact-us/',
];

export const initProblem5 = () => {
  const urlList = document.querySelector('.js-urls');

  for (const url of [...goodUrls, ...badUrls]) {
    const isGood = window.testUrl(url);
    const label = isGood ? 'good' : 'bad' || 'unknown';
    const item = document.createElement('li');
    item.innerHTML = `<code class="url">${url}</code> is <strong class="${label}">${label}</strong>`;
    urlList?.append(item);
  }
};
