import { Game } from "../lib/game";
import { init } from "./func/init";
import { renderScenes } from "./func/render_scenes";

const gameCanvas = document.getElementById("game") as HTMLCanvasElement;
export const flag = document.getElementById("flag") as Element;
export const sceneView = document.getElementById("scenes") as HTMLDivElement;

export const game = new Game(gameCanvas);

// init();
renderScenes(game.scenes, sceneView);
