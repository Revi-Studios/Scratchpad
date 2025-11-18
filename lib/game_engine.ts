import { Scene } from "./scene";

export class GameEngine {
  public lastTime: number = 0;
  public paused: boolean = false;
  public scenes: Scene[] = [];

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.addEventListener("click", this.handleClick);
  }

  private get currentScene() {
    return this.scenes[0];
  }

  public loadScene(scene: Scene) {
    this.scenes.unshift(scene);
    this.currentScene.start();
    this.lastTime = performance.now();
    this.gameLoop(this.lastTime);
  }

  private gameLoop = (currentTime: number): void => {
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    if (!this.paused) this.update(deltaTime);

    this.render();

    window.requestAnimationFrame(this.gameLoop);
  };

  private update(deltaTime: number) {
    this.currentScene.update(deltaTime);
  }

  private render(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.currentScene.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.currentScene.gameObjects.forEach((gameObject) => {
      if (gameObject.hide || !gameObject.sprite) return;

      this.ctx.save();
      this.ctx.translate(gameObject.x, gameObject.y);
      this.ctx.rotate(gameObject.rotation * (Math.PI / 180));

      const halfSize = gameObject.size / 2;

      this.ctx.drawImage(gameObject.sprite, -halfSize, -halfSize, gameObject.size, gameObject.size);

      this.ctx.restore();
    });
  }

  private handleClick = (event) => {
    const rect = this.canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    this.checkObjectClicks(mouseX, mouseY);
  };

  private checkObjectClicks(x: number, y: number) {
    for (let i = this.currentScene.gameObjects.length - 1; i >= 0; i--) {
      const gameObject = this.currentScene.gameObjects[i];

      if (gameObject.hide) continue;

      const halfSize = gameObject.size / 2;

      const minX = gameObject.x - halfSize;
      const maxX = gameObject.x + halfSize;
      const minY = gameObject.y - halfSize;
      const maxY = gameObject.y + halfSize;

      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        gameObject.onClick();
        return;
      }
    }
  }
}
