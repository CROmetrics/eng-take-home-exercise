const magicNumberGenerator = (num: number) => {
  const magicNumber = num * Math.floor(Math.random() * 50);
  localStorage.setItem('magic-number', `${magicNumber}`);
  return magicNumber;
};

export const initProblem2 = () => {
  const handler = () => {
    window.setMagicNumber = magicNumberGenerator;
    const magicNumber = window.setMagicNumber(Math.floor(Math.random() * 50));
    console.log('magic number:', magicNumber);
  };

  handler();
  setInterval(handler, 1000);
};
