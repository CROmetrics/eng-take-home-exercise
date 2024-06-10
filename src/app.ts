async function load() {
  const { pathname } = window.location;

  if (pathname === '/html/problem1.html') {
    try {
      const { solution1 } = await import('./solutions/solution1.js');
      solution1();
    } catch (e) {
      console.error(e);
    } finally {
      const { initProblem1 } = await import('./config/initProblem1.js');
      initProblem1();
    }

    return;
  }

  if (pathname === '/html/problem2.html') {
    try {
      const { solution2 } = await import('./solutions/solution2.js');
      solution2();
    } catch (e) {
      console.error(e);
    } finally {
      const { initProblem2 } = await import('./config/initProblem2.js');
      initProblem2();
    }
    return;
  }

  if (pathname === '/html/problem3.html') {
    try {
      const { solution3 } = await import('./solutions/solution3.js');
      solution3();
    } catch (e) {
      console.error(e);
    } finally {
      const { initProblem3 } = await import('./config/initProblem3.js');
      initProblem3();
    }
    return;
  }

  if (pathname === '/html/problem4.html') {
    try {
      const { initProblem4 } = await import('./config/initProblem4.js');
      initProblem4();

      const { solution4 } = await import('./solutions/solution4.js');
      solution4();
    } catch (e) {
      console.error(e);
    }
    return;
  }

  if (pathname === '/html/problem5.html') {
    try {
      const { solution5 } = await import('./solutions/solution5.js');
      solution5();
    } catch (e) {
      console.error(e);
    } finally {
      const { initProblem5 } = await import('./config/initProblem5.js');
      initProblem5();
    }
  }
}

load();
