import { GameObject } from "./game_object";

export class Scene {
  public name: string;
  public gameObjects: GameObject[] = [];
  public backgroundColor: string = "#FFFFFF";

  constructor(name: string) {
    this.name = name;
  }

  public start() {
    this.gameObjects.forEach((gameObject) => {
      gameObject.start();
    });
  }

  public update(deltaTime: number) {
    this.gameObjects.forEach((gameObject) => {
      gameObject.update(deltaTime);
    });
  }

  public addObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }
}
