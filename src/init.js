// Load all the initial requirements
// start the timer at the start of the game.

//Clock runs every 3 seconds.

const TICK_RATE = 3000;

function tick() {
  console.log("Time is", Date.now());
}

function init() {
  console.log("Starting game....");

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
