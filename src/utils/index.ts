const letterAnimation = (word: string, element: HTMLElement) => {
  const theLetters = ('abcdefghijklmnopqrstuvwxyz')
      .toLocaleUpperCase();
    //  You can customize what letters it will cycle through
  const ctnt = word.toUpperCase(); // Your text goes here
  const speed = 10; // ms per frame
  const increment = 5; // frames per step. Must be >2
  const clen = ctnt.length;
  let si = 0;
  let stri = 0;
  let block = '';
  let fixed = '';

  const rustle = (i: number) => {
    setTimeout(()=>{
      if (--i) {
        rustle(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };
  rustle((clen*increment+1));

  const nextFrame = () => {
    for (let i=0; i<clen-stri; i++) {
      // Random number
      const num = Math.floor(theLetters.length * Math.random());
      // Get random letter
      const letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si === (increment-1)) {
      stri++;
    }
    if (si === increment) {
    // Add a letter;
    // every speed*10 ms
      fixed = fixed + ctnt.charAt(stri - 1);
      si = 0;
    }
    element.innerHTML = (fixed+block);
    block = '';
  };
};