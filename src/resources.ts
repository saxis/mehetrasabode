export default {
    sounds: {
        grobb: new AudioClip("sounds/GROBB.mp3"),
        lava: new AudioClip("sounds/LAVASTOR.mp3"),
        fear: new AudioClip("sounds/FEARPLAN.mp3"),
    },
    models: {
        arch: new GLTFShape("models/arch.glb"),
        entrance: new GLTFShape("models/entrance.glb"),
        wall_01: new GLTFShape("models/wall_01.glb"),
        stoneFloor: new GLTFShape('models/floor_big_plane.glb'),
        priestess: new GLTFShape("models/priestess.glb"),
        dagger: new GLTFShape('models/floor2/Dagger_01/Dagger_01.glb'),
    },
    textures: {
        textContainer: new Texture("src/images/dialogs/textContainer.png"),
        optionsContainer: new Texture("src/images/dialogs/optionsContainer.png"),
        blueContainer: new Texture("src/images/dialogs/Sax_Text_Box_blue.png")
      }
}