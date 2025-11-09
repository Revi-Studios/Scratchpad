import { Scene } from "../../lib/game/scene";
import { sceneView } from "../main";
import { addScene } from "./add_scene";

export function renderScenes(scenes: Scene[], view: HTMLDivElement = sceneView) {
  view.innerHTML = "";
  scenes.forEach((scene) => {
    view.innerHTML += `
      <div style="border-radius: 10px">
          <p>${scene.name}</p>
      </div>
    `;
  });
  view.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" id="add-scene" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>`;

  (document.getElementById("add-scene") as HTMLDivElement).addEventListener("click", () =>
    addScene("Scene"),
  );

  console.log("Editor: Finished loading the scenes view");
}
