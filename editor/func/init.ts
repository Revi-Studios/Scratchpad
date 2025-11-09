import { flag, game, sceneView } from "../main";
import { renderScenes } from "./render_scenes";

export function init() {
  renderScenes(game.scenes, sceneView);

  flag.addEventListener("click", () => {
    game.start();
  });
}
