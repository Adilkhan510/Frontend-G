import game from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

// Load all the initial requirements
// start the timer at the start of the game.

//Clock runs every 3 seconds.

function tick() {
  console.log("Time is", Date.now());
}

function init() {
  console.log("Starting game....");
  initButtons(game.handleUserAction);
  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  nextAnimationFrame();
}

init();
