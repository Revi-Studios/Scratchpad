import { Scene } from "../../lib/scene";
import { game } from "../main";
import { renderScenes } from "./render_scenes";

export function addScene(name: string) {
  const scene = new Scene(name);
  game.scenes.push(scene);
  game.currentScene = scene;
  renderScenes(game.scenes);
}
