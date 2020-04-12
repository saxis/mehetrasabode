import resources from "../resources";
import { SimpleDialog } from "../modules/simpleDialog";
//import { DoorState } from "../gameObjects/doorState";
import utils from "../../node_modules/decentraland-ecs-utils/index";

function selectRandom(options: string[]): string {
  return options[Math.floor(Math.random() * (options.length - 1))];
}

export class PeasantDialog extends SimpleDialog {
  private dialogTree: SimpleDialog.DialogTree;

  public onCorrectAnswer: (questionId: number) => void;
  public onSequenceComplete: () => void;
  public onPoorChoiceMade: () => void;

  constructor(gameCanvas: UICanvas) {
    // Create a new SimpleDialog to manage the dialog tree
    super({
      canvas: gameCanvas,
      leftPortrait: {
        width: 256,
        height: 256,
        sourceWidth: 256,
        sourceHeight: 256,
        positionX: "-17%"
      },
      rightPortrait: {
        width: 256,
        height: 256,
        sourceWidth: 256,
        sourceHeight: 256,
        positionX: "15%"
      },
      dialogText: {
        //width: "25%",
        width: "50%",
        //.height: "25%",
        height: "25%",
        textSpeed: 15,
        textIdleTime: 1,
        textConfig: { fontSize: 16, paddingLeft: 25, paddingRight: 25 },
        //background: resources.textures.textContainer,
        background: resources.textures.blueContainer,
        //backgroundConfig: { sourceWidth: 512, sourceHeight: 257 }
        backgroundConfig: { sourceWidth: 200, sourceHeight: 70 }
      },
      optionsContainer: {
        stackOrientation: UIStackOrientation.VERTICAL,
        spacing: 0,
        //width: "40%",
        width: "50%",
        //height: "12%",
        height: "25%",
        vAlign: "top",
        hAlign: "center",
        positionY: "-65%",
        //background: resources.textures.optionsContainer,
        background: resources.textures.blueContainer,
        //backgroundConfig: { sourceWidth: 512, sourceHeight: 79 },
        backgroundConfig: {sourceWidth: 200, sourceHeight: 70},
        optionsTextConfig: { fontSize: 20, paddingLeft: 20, positionY: "-35%" }
      }
    });

    // Variables used in the dialog tree
    let firstTimeDialog = true;
    let unlockDoor = false;

    // Dialog text colors
    const npcColor = Color4.White();
    const playerColor = Color4.White();

  

    this.dialogTree = new SimpleDialog.DialogTree()
      .if(() => firstTimeDialog)
        .call(() => (firstTimeDialog = false))
        .say(
          () =>
          "Old Man Rivers says, \"Hail traveler. Been some time since I've seen [visitors] around these parts. How can I help you? \"",
          { color: npcColor }
        )
          .beginOptionsGroup()
            .option(() => "What kind of visitors?")
              .say(() => 'You say, "What kind of visitors?"', { color: playerColor })
            .endOption()
          .endOptionsGroup()
        .say(
          () =>
          'Old Man Rivers says, "Adventurers like yourself. Anyway, I\'m relaxing since the incident with [Agatha]."',
          { color: npcColor }
        )
          .beginOptionsGroup()
            .option(() => "Who is Agatha?")
              .say(() => 'You say, "Who is Agatha? What are you talking about Old Man?"', {
                color: playerColor
              })
            .endOption()
          .endOptionsGroup()
        .say(
          () =>
          "Old Man Rivers says, \"Agatha is a mean old sorceress. A real piece or work. Me and the [council] had to imprison her.\"",
          { color: npcColor }
        )
          .beginOptionsGroup()
            .option(() => "Why did the Council have to do that?")
              .say(() => 'You say, "Why did the Council have to imprison her?"', { color: playerColor })
              .say(
                () =>
                'Old Man Rivers says, "Sometimes its the only choice lad. We did what we thought was best"',
                { color: npcColor }
              )
              .say(() => 
                'Old Man Rivers says, "She is out to the East if you want to get a good look at her."', { color: npcColor})
              .say(() => 'Old Man Rivers says, "Over by the magic castle where maybe the king can keep an eye on her."', {color:npcColor})
              .say(() => 'Old Man Rivers says, "She may try to talk to you.. don\'t believe her lies."', {color: npcColor})
              .call(() => this.onSequenceComplete())
            .endOption()
            .option(() => "Sometimes you have to do what you have to do.")
              .say(() => 'You say, "Sometimes you have to do what you have to do".', {color: playerColor})
              .say(
                () =>
                'Old Man Rivers says, "Indeed. Fare thee well adventurer. Safe travels"',
                { color: npcColor }
              )
            .endOption()
          .endOptionsGroup()
      .else()
      .if(() => !unlockDoor)
      .say(() => 'Old Man Rivers says, "Did that old witch send you back here"')
      .beginOptionsGroup()
      .option(() => "She did. I want to free her, she said she would reward me!")
        .say(() => 'You say, "She promised me some treasure. Now how do I get past the crystals Old Man?"', { color: playerColor })
        .say(() => 'Old Man Rivers says, "Its your funeral. "', { color: npcColor})
        .say(() => 'Old Man Rivers say, "You\'ve made a poor choice. I\'ve sent for my son. After you and he have a chat we can talk crystals."', {color: npcColor})
        .call(() =>  this.onPoorChoiceMade())
      .endOption()
      .option(() => "No just wanted to say hello again.")
      .say(() => 'You say, "No, I just wanted to say hello sir".', {color: playerColor})
      .say(() => 'Old Man Rivers says, "Ah. I understand. Good to see you as well adventurer"', { color: npcColor})
      .endOption()
      .endOptionsGroup()
      .else()
      .say(() => 'Old Man Rivers says, "Hello adventurer."')
      .endif()
      .endif();
  }

  public run(): void {
    if (!this.isDialogTreeRunning()) {
      this.runDialogTree(this.dialogTree);
    }
  }
}
