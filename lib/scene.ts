import { GameObject } from "./game_object";

export class Scene {
  public gameObjects: GameObject[] = [];

  public start(): void {
    this.gameObjects.forEach((o) => o.start());
  }
}
