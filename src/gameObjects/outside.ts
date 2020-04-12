import { spawnEntity } from '../modules/SpawnerFunctions'
import resources from '../resources';

export function CreateOutside(): void {
    const tree_Dead_01 = new Entity();
    const gltfShape_2 = new GLTFShape("models/Tree_Dead_01.glb");
    tree_Dead_01.addComponentOrReplace(gltfShape_2);
    const transform_3 = new Transform({
      position: new Vector3(10, 0, 8.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    });
    tree_Dead_01.addComponentOrReplace(transform_3);
    engine.addEntity(tree_Dead_01);
  
  
  
    // const tree_Dead_04 = new Entity();
    // const gltfShape_4 = new GLTFShape("models/Tree_Dead_04.glb");
    // tree_Dead_04.addComponentOrReplace(gltfShape_4);
    // const transform_5 = new Transform({
    //   position: new Vector3(10.5, 0, 12.51),
    //   rotation: new Quaternion(0, 0, 0, 1),
    //   scale: new Vector3(1, 1, 1)
    // });
    // tree_Dead_04.addComponentOrReplace(transform_5);
    // engine.addEntity(tree_Dead_04);
  
  
    const grass032 = new Entity()
    const transform_91 = new Transform({
      position: new Vector3(12.5, 0, 8),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    })
    grass032.addComponent(transform_91)
    grass032.addComponent(resources.models.twoBladesOfGrassShape)
    engine.addEntity(grass032)
  
    const grass05 = new Entity();
    const gltfShape_11 = new GLTFShape("models/Grass05.glb");
    grass05.addComponentOrReplace(gltfShape_11);
    const transform_14 = new Transform({
      position: new Vector3(11, 0, 11),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    });
    grass05.addComponentOrReplace(transform_14);
    engine.addEntity(grass05);
  
    const grassPatchLarge_04 = new Entity();
    const gltfShape_12 = new GLTFShape(
      "models/GrassPatchLarge_04.glb"
    );
    grassPatchLarge_04.addComponentOrReplace(gltfShape_12);
    const transform_15 = new Transform({
      position: new Vector3(12, 0, 12.5),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    });
    grassPatchLarge_04.addComponentOrReplace(transform_15);
    engine.addEntity(grassPatchLarge_04);
  
    const grassPatchSmall_04 = new Entity();
    const gltfShape_13 = new GLTFShape(
      "models/GrassPatchSmall_04.glb"
    );
    grassPatchSmall_04.addComponentOrReplace(gltfShape_13);
    const transform_16 = new Transform({
      position: new Vector3(12.5, 0, 9),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    });
    grassPatchSmall_04.addComponentOrReplace(transform_16);
    engine.addEntity(grassPatchSmall_04); 
}
