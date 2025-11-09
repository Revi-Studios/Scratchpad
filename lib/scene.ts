import { GameObject } from "./game_object";

export class Scene {
  public gameObjects: GameObject[] = [];
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public start(): void {
    this.gameObjects.forEach((o) => o.start());
  }
}
