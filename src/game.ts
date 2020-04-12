import resources from "./resources";
import { PeasantDialog } from "./ui/index";
import { Npc } from "./gameObjects/npc";
import { BuilderHUD } from "./modules/BuilderHUD";
import { spawnEntity } from './modules/SpawnerFunctions'

let clicked = false;
let dead = false;
let HIT_POINTS = 5;
let PLAYER_HP = 5;
let brutedead = false;
let playerdead = false;

const gameCanvas = new UICanvas();
const text = new UIText(gameCanvas);
const instructions = new UIText(gameCanvas);

text.value = `HP: ${PLAYER_HP}    Brute HP: ${HIT_POINTS}`;
text.vAlign = "bottom";
text.positionX = -80;
text.visible = false;

instructions.value =
  "The Brute has defeated you. Maybe the old man can help you figure out what to do next.";
instructions.fontSize = 30;
instructions.hAlign = "left";
instructions.positionX = 200;
instructions.vAlign = "center";
instructions.visible = false;

const dialog = new PeasantDialog(gameCanvas);


const mehetra = new Npc(
  resources.sounds.fear,
  resources.models.priestess,
  5
);
// mehetra.addComponent(
//   new OnPointerDown(
//     (e) => {
//       dialog.run();
//     },
//     {
//       button: ActionButton.PRIMARY,
//       showFeeback: true,
//       hoverText: "Speak to Mehetra",
//     }
//   )
// );

// //model stuff
const point1 = new Vector3(12, 0, 5);
const point2 = new Vector3(12, 0, 9);
const point3 = new Vector3(3, 0, 9);
const point4 = new Vector3(3, 0, 4);
const point5 = new Vector3(8, 0, 4);
const point6 = new Vector3(8, 0, 9);
const point7 = new Vector3(8,0,11);
const point8 = new Vector3(8,0,15);
const point9 = new Vector3(15,0,15);
const point10 = new Vector3(15,0,2);
const point11 = new Vector3(15,0,13);
const point12 = new Vector3(12,0,13);
const point13 = new Vector3(12,0,14)
const point14 = new Vector3(1,0,14);
const point15 = new Vector3(1,0,2);
const point16 = new Vector3(1,0,15);
const point17 = new Vector3(8,0,15);
const point18 = new Vector3(8,0,5);

const path: Vector3[] = [point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12, point13, point14, point15, point16, point17, point18];
const TURN_TIME = 0.9;

@Component("timeOut")
export class TimeOut {
  timeLeft: number;
  constructor(time: number) {
    this.timeLeft = time;
  }
}

export const paused = engine.getComponentGroup(TimeOut);

// LerpData component
@Component("lerpData")
export class LerpData {
  array: Vector3[] = path;
  origin: number = 0;
  target: number = 1;
  fraction: number = 0;
}

let mehetraAnimator = new Animator();
mehetra.addComponent(mehetraAnimator);

// //Add walk animation
const mehetraWalkClip = new AnimationState("walk");
mehetraAnimator.addClip(mehetraWalkClip);
const turnRClip = new AnimationState("turnLeft");
turnRClip.looping = false;
mehetraAnimator.addClip(turnRClip);
const raiseDeadClip = new AnimationState("talking");
mehetraAnimator.addClip(raiseDeadClip);
// const unlockSpell = new AnimationState("unlockSpell");
// oldmanriversAnimator.addClip(unlockSpell);
// const salute = new AnimationState("salute");
// oldmanriversAnimator.addClip(salute);

mehetra.addComponent(new LerpData());

// dialog.onSequenceComplete = () => {
//   riversWalkClip.pause();
//   log("in onSequenceCompleted");
//   log("trying to play unlock Spell animation");
//   unlockSpell.play();
//   unlockSpell.looping = false;
//   log("trying to play salute animation");
//   salute.play();
//   salute.looping = false;
// };

mehetraWalkClip.play();

//Walk System
export class GnarkWalk {
  update(dt: number) {
    if (!mehetra.hasComponent(TimeOut) && !raiseDeadClip.playing) {
      let transform = mehetra.getComponent(Transform);
      let path = mehetra.getComponent(LerpData);
      mehetraWalkClip.playing = true;
      turnRClip.playing = false;
      if (path.fraction < 1) {
        path.fraction += dt / 12;
        transform.position = Vector3.Lerp(
          path.array[path.origin],
          path.array[path.target],
          path.fraction
        );
      } else {
        path.origin = path.target;
        path.target += 1;
        if (path.target >= path.array.length) {
          path.target = 0;
        }
        path.fraction = 0;
        transform.lookAt(path.array[path.target]);
        mehetraWalkClip.pause();
        turnRClip.play();
        turnRClip.looping = false;
        mehetra.addComponent(new TimeOut(TURN_TIME));
      }
    }
  }
}

engine.addSystem(new GnarkWalk());

export class WaitSystem {
  update(dt: number) {
    for (let ent of paused.entities) {
      let time = ent.getComponentOrNull(TimeOut);
      if (time) {
        if (time.timeLeft > 0) {
          time.timeLeft -= dt;
        } else {
          ent.removeComponent(TimeOut);
        }
      }
    }
  }
}

engine.addSystem(new WaitSystem());

export class BattleCry {
  update() {
    let transform = mehetra.getComponent(Transform);
    let path = mehetra.getComponent(LerpData);
    let dist = distance(transform.position, camera.position);
    if (dist < 16) {
      if (raiseDeadClip.playing == false) {
        raiseDeadClip.reset();
        raiseDeadClip.playing = true;
        mehetraWalkClip.playing = false;
        turnRClip.playing = false;
      }
      let playerPos = new Vector3(camera.position.x, 0, camera.position.z);
      transform.lookAt(playerPos);
    } else if (raiseDeadClip.playing) {
      raiseDeadClip.stop();
      transform.lookAt(path.array[path.target]);
    }
  }
}

engine.addSystem(new BattleCry());

const camera = Camera.instance;

function distance(pos1: Vector3, pos2: Vector3): number {
  const a = pos1.x - pos2.x;
  const b = pos1.z - pos2.z;
  return a * a + b * b;
}


const arch = spawnEntity(8,0,1.5, 0,0,0, 1,1,1)
arch.addComponentOrReplace(resources.models.arch)

const entrance = spawnEntity(9,0,11.5, 0,0,0, 1,1,1)
entrance.addComponentOrReplace(resources.models.entrance)

const row1col1 = spawnEntity(2,0,2 ,0, 0, 0, 1, 1, 1)
row1col1.addComponentOrReplace(resources.models.stoneFloor)

const row1col2 = spawnEntity(6,0,2 ,0, 0, 0, 1, 1, 1)
row1col2.addComponentOrReplace(resources.models.stoneFloor)

const row1col3 = spawnEntity(10,0,2 ,0, 0, 0, 1, 1, 1)
row1col3.addComponentOrReplace(resources.models.stoneFloor)

const row1col4 = spawnEntity(14,0,2 ,0, 0, 0, 1, 1, 1)
row1col4.addComponentOrReplace(resources.models.stoneFloor)

const row2col1 = spawnEntity(2,0,6 ,0, 0, 0, 1, 1, 1)
row2col1.addComponentOrReplace(resources.models.stoneFloor)

const row2col2 = spawnEntity(6,0,6 ,0, 0, 0, 1, 1, 1)
row2col2.addComponentOrReplace(resources.models.stoneFloor)

const row2col3 = spawnEntity(10,0,6 ,0, 0, 0, 1, 1, 1)
row2col3.addComponentOrReplace(resources.models.stoneFloor)

const row2col4 = spawnEntity(14,0,6 ,0, 0, 0, 1, 1, 1)
row2col4.addComponentOrReplace(resources.models.stoneFloor)

const row3col1 = spawnEntity(2,0,10 ,0, 0, 0, 1, 1, 1)
row3col1.addComponentOrReplace(resources.models.stoneFloor)

const row3col2 = spawnEntity(6,0,10 ,0, 0, 0, 1, 1, 1)
row3col2.addComponentOrReplace(resources.models.stoneFloor)

const row3col3 = spawnEntity(10,0,10 ,0, 0, 0, 1, 1, 1)
row3col3.addComponentOrReplace(resources.models.stoneFloor)

const row3col4 = spawnEntity(14,0,10 ,0, 0, 0, 1, 1, 1)
row3col4.addComponentOrReplace(resources.models.stoneFloor)

const row4col1 = spawnEntity(2,0,14 ,0, 0, 0, 1, 1, 1)
row4col1.addComponentOrReplace(resources.models.stoneFloor)

const row4col2 = spawnEntity(6,0,14 ,0, 0, 0, 1, 1, 1)
row4col2.addComponentOrReplace(resources.models.stoneFloor)

const row4col3 = spawnEntity(10,0,14 ,0, 0, 0, 1, 1, 1)
row4col3.addComponentOrReplace(resources.models.stoneFloor)

const row4col4 = spawnEntity(14,0,14 ,0, 0, 0, 1, 1, 1)
row4col4.addComponentOrReplace(resources.models.stoneFloor)

const row5col1 = spawnEntity(2,0,18 ,0, 0, 0, 1, 1, 1)
row5col1.addComponentOrReplace(resources.models.stoneFloor)

const row5col2 = spawnEntity(6,0,18 ,0, 0, 0, 1, 1, 1)
row5col2.addComponentOrReplace(resources.models.stoneFloor)

const row5col3 = spawnEntity(10,0,18 ,0, 0, 0, 1, 1, 1)
row5col3.addComponentOrReplace(resources.models.stoneFloor)

const row5col4 = spawnEntity(14,0,18 ,0, 0, 0, 1, 1, 1)
row5col4.addComponentOrReplace(resources.models.stoneFloor)

const row6col1 = spawnEntity(2,0,22 ,0, 0, 0, 1, 1, 1)
row6col1.addComponentOrReplace(resources.models.stoneFloor)

const row6col2 = spawnEntity(6,0,22 ,0, 0, 0, 1, 1, 1)
row6col2.addComponentOrReplace(resources.models.stoneFloor)

const row6col3 = spawnEntity(10,0,22 ,0, 0, 0, 1, 1, 1)
row6col3.addComponentOrReplace(resources.models.stoneFloor)

const row6col4 = spawnEntity(14,0,22 ,0, 0, 0, 1, 1, 1)
row6col4.addComponentOrReplace(resources.models.stoneFloor)

const row7col1 = spawnEntity(2,0,26 ,0, 0, 0, 1, 1, 1)
row7col1.addComponentOrReplace(resources.models.stoneFloor)

const row7col2 = spawnEntity(6,0,26 ,0, 0, 0, 1, 1, 1)
row7col2.addComponentOrReplace(resources.models.stoneFloor)

const row7col3 = spawnEntity(10,0,26 ,0, 0, 0, 1, 1, 1)
row7col3.addComponentOrReplace(resources.models.stoneFloor)

const row7col4 = spawnEntity(14,0,26 ,0, 0, 0, 1, 1, 1)
row7col4.addComponentOrReplace(resources.models.stoneFloor)

const row8col1 = spawnEntity(2,0,30 ,0, 0, 0, 1, 1, 1)
row8col1.addComponentOrReplace(resources.models.stoneFloor)

const row8col2 = spawnEntity(6,0,30 ,0, 0, 0, 1, 1, 1)
row8col2.addComponentOrReplace(resources.models.stoneFloor)

const row9col3 = spawnEntity(10,0,30 ,0, 0, 0, 1, 1, 1)
row9col3.addComponentOrReplace(resources.models.stoneFloor)

const row9col4 = spawnEntity(14,0,30 ,0, 0, 0, 1, 1, 1)
row9col4.addComponentOrReplace(resources.models.stoneFloor)




const wall01 = spawnEntity(3, 0, 2.5,  0,-90,0,  1, 1,1)
wall01.addComponentOrReplace(resources.models.wall_01)

const wall02 = spawnEntity(13.3, 0, 2.5,  0,90,0,  1, 1,1)
wall02.addComponentOrReplace(resources.models.wall_01)

const wall01a = spawnEntity(3, 0, 4.5,  0,-90,0,  1, 1,1)
wall01a.addComponentOrReplace(resources.models.wall_01)

const wall02a = spawnEntity(13.3, 0, 4.5,  0,90,0,  1, 1,1)
wall02a.addComponentOrReplace(resources.models.wall_01)

const wall01b = spawnEntity(3, 0, 6.5,  0,-90,0,  1, 1,1)
wall01b.addComponentOrReplace(resources.models.wall_01)

const wall02b = spawnEntity(13.3, 0, 6.5,  0,90,0,  1, 1,1)
wall02b.addComponentOrReplace(resources.models.wall_01)

const wall01c = spawnEntity(3, 0, 8.5,  0,-90,0,  1, 1,1)
wall01c.addComponentOrReplace(resources.models.wall_01)

const wall02c = spawnEntity(13.3, 0, 8.5,  0,90,0,  1, 1,1)
wall02c.addComponentOrReplace(resources.models.wall_01)

const wall01d = spawnEntity(3, 0, 10.5,  0,-90,0,  1, 1,1)
wall01d.addComponentOrReplace(resources.models.wall_01)

const wall02d = spawnEntity(13.3, 0, 10.5,  0,90,0,  1, 1,1)
wall02d.addComponentOrReplace(resources.models.wall_01)

const wall03 = spawnEntity(12.9, 0, 10.5,  0,0,0,  1, 1,1)
wall03.addComponentOrReplace(resources.models.wall_01)

const wall03a = spawnEntity(11.9, 0, 10.5,  0,0,0,  1, 1,1)
wall03a.addComponentOrReplace(resources.models.wall_01)

const wall04 = spawnEntity(3, 0, 10.5,  0,0,0,  1, 1,1)
wall04.addComponentOrReplace(resources.models.wall_01)

const wall04a = spawnEntity(4.9, 0, 10.5,  0,0,0,  1, 1,1)
wall04a.addComponentOrReplace(resources.models.wall_01)


//const hud: BuilderHUD = new BuilderHUD();
//hud.attachToEntity(mehetra);
