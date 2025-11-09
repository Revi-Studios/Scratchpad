import { Scene } from "./scene";

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private lastTime: number = 0;
  public scenes: Scene[] = [];
  public currentScene: Scene;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
    // Initialize InputManager here
  }

  start(): void {
    console.log("Game: Starting Game");
    this.lastTime = performance.now();
    this.currentScene = new Scene();
    this.gameLoop(this.lastTime);
  }

  private gameLoop = (currentTime: number): void => {
    const deltaTime = (currentTime - this.lastTime) / 1000; // Time in seconds
    this.lastTime = currentTime;

    // 1. Process Input (e.g., this.inputManager.handleInput())

    // 2. Update Game State
    this.update(deltaTime);

    // 3. Render
    this.render();

    // Schedule the next frame
    window.requestAnimationFrame(this.gameLoop);
  };

  private update(deltaTime: number): void {
    // Loop through all entities and update their state/components
    this.currentScene.gameObjects.forEach((e) => e.update(deltaTime));
  }

  private render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Loop through entities and draw their sprites
    // this.currentScene.gameObjects.forEach((e) => e.render(this.ctx));
  }
}
