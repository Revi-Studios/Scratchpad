import { GameEngine } from "../lib/game_engine";
import { GameObject } from "../lib/game_object";
import { Scene } from "../lib/scene";
import bananaImg from "../lib/images/banana.png";
import catImg from "../lib/images/cat.svg";
function getImage(src: string): HTMLImageElement {
  const img = new Image();
  img.src = src;
  return img;
}

const canvas = document.getElementById("game-view") as HTMLCanvasElement;
const globalScenes: Scene[] = [];
const game = new GameEngine(canvas);

class Banana extends GameObject {
  sprite = getImage(bananaImg as string);
  infoLabel = document.createElement("p");
  speed = 20;
  rspeed = 0;

  start() {
    document.body.appendChild(this.infoLabel);
    console.log("Added a bannana to the scene");
    this.y = 40;
  }

  update(deltaTime: number) {
    this.x += this.speed * deltaTime;
    this.rotation += this.rspeed * deltaTime;
    this.y += (this.speed / 10) * deltaTime;
    this.infoLabel.innerHTML = `${this.name}: <br> x: ${Math.round(this.x)}, <br> y: ${Math.round(this.y)}, <br> rotation: ${Math.round(this.rotation)}, <br> size: ${this.size}`;
  }

  onClick() {
    console.log(`${this.name}: clicked!`);
    this.rspeed += 10;
    if (this.rspeed > 100) this.rspeed = 0;
  }
}

class Cat extends GameObject {
  sprite = getImage(catImg as string);
  start() {
    this.x = 100;
    this.y = 300;
  }
}

globalScenes.push(new Scene("main"));
globalScenes[0].backgroundColor = "#FF0000";

globalScenes[0].addObject(new Banana("Banana1"));
globalScenes[0].addObject(new Banana("Banana2"));
globalScenes[0].addObject(new Cat("Player"));

globalScenes[0].gameObjects[1].x = 80;

// game.loadScene(globalScenes[0]);

document
  .getElementById("start-game")!
  .addEventListener("click", () => game.loadScene(globalScenes[0]));
document
  .getElementById("pause-game")!
  .addEventListener("click", () => (game.paused = !game.paused));
