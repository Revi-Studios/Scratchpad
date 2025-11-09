import { Scene } from "../../lib/game/scene";
import { game } from "../main";
import { renderScenes } from "./render_scenes";

export function addScene(name: string) {
  game.scenes.push(new Scene(name));
  renderScenes(game.scenes);
}
