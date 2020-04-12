export default {
    sounds: {
        grobb: new AudioClip("sounds/GROBB.mp3"),
        lava: new AudioClip("sounds/LAVASTOR.mp3"),
        fear: new AudioClip("sounds/FEARPLAN.mp3"),
    },
    models: {
        arch: new GLTFShape("models/mobile_arch.glb"),
        entrance: new GLTFShape("models/mobile_entrance.glb"),
        wall_01: new GLTFShape("models/mobile_wall_01.glb"),
        stoneFloor: new GLTFShape('models/mobile_floor_big_plane.glb'),
        priestess: new GLTFShape("models/priestess.glb"),
    },
    textures: {
        textContainer: new Texture("src/images/dialogs/textContainer.png"),
        optionsContainer: new Texture("src/images/dialogs/optionsContainer.png"),
        blueContainer: new Texture("src/images/dialogs/Sax_Text_Box_blue.png")
      }
}