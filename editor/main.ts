import { Game } from "../lib/game";

const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
const flagButton = document.getElementById("flag") as Element;
const game = new Game(gameCanvas);

flagButton.addEventListener("click", () => {
  game.start();
});
