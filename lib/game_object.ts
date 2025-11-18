export class GameObject {
  public name: string;
  public x: number = 0;
  public y: number = 0;
  public rotation: number = 0;
  public hide: boolean = false;
  public size: number = 100;
  public sprite: HTMLImageElement | null = null;

  constructor(name: string) {
    this.name = name;
  }

  public start() {}
  public update(deltaTime: number) {}
  public onClick() {}
}
