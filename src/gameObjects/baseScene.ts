import resources from "../resources";
import { spawnEntity } from '../modules/SpawnerFunctions'
//import { BuilderHUD } from "../modules/BuilderHUD";

export class BaseScene extends Entity {
  constructor() {
    super();
    //engine.addEntity(this);
    //    const tower = new Entity()
    //    tower.setParent(this)
    //    const gltfShape = new GLTFShape('models/skeletontower16.glb')
    //    tower.addComponentOrReplace(gltfShape)
    //    const transform_2 = new Transform({
    //      position: new Vector3(24, 1.6, 12),
    //      rotation: new Quaternion(0, 0, 0, 1),
    //      scale: new Vector3(1, 1, 1)
    //    })
    //    tower.addComponentOrReplace(transform_2)
    //    engine.addEntity(tower)

    

    const _scene = new Entity("_scene");
    engine.addEntity(_scene);
    const transform = new Transform({
      position: new Vector3(0, 0, 0),
      rotation: new Quaternion(0, 0, 0, 1),
      scale: new Vector3(1, 1, 1)
    });
    _scene.addComponentOrReplace(transform);


    const row1col1 = spawnEntity(2,0,2 ,0, 0, 0, 1, 1, 1)
    row1col1.addComponentOrReplace(resources.models.stoneFloor)

    // const row1col2 = spawnEntity(4,0,8 ,0, 0, 0, 1, 1, 1)
    // row1col2.addComponentOrReplace(resources.models.blackStone)

    // const row1col3 = spawnEntity(4,0,12 ,0, 0, 0, 1, 1, 1)
    // row1col3.addComponentOrReplace(resources.models.blackStone)

    // const row1col4 = spawnEntity(4,0,16 ,0, 0, 0, 1, 1, 1)
    // row1col4.addComponentOrReplace(resources.models.blackStone)
    
    // const row2col1 = spawnEntity(8,0,4 ,0, 0, 0, 1, 1, 1)
    // row2col1.addComponentOrReplace(resources.models.blackStone)

    // const row2col2 = spawnEntity(8,0,8 ,0, 0, 0, 1, 1, 1)
    // row2col2.addComponentOrReplace(resources.models.blackStone)

    // const row2col3 = spawnEntity(8,0,12 ,0, 0, 0, 1, 1, 1)
    // row2col3.addComponentOrReplace(resources.models.blackStone)    

    // const row2col4 = spawnEntity(8,0,16 ,0, 0, 0, 1, 1, 1)
    // row2col4.addComponentOrReplace(resources.models.blackStone)

    // const row3col1 = spawnEntity(12,0,4 ,0, 0, 0, 1, 1, 1)
    // row3col1.addComponentOrReplace(resources.models.blackStone)

    // const row3col2 = spawnEntity(12,0,8 ,0, 0, 0, 1, 1, 1)
    // row3col2.addComponentOrReplace(resources.models.blackStone) 
    
    // const row3col3 = spawnEntity(12,0,12 ,0, 0, 0, 1, 1, 1)
    // row3col3.addComponentOrReplace(resources.models.blackStone)

    // const row3col4 = spawnEntity(12,0,16 ,0, 0, 0, 1, 1, 1)
    // row3col4.addComponentOrReplace(resources.models.blackStone) 

    // const row4col1 = spawnEntity(16,0,4 ,0, 0, 0, 1, 1, 1)
    // row4col1.addComponentOrReplace(resources.models.blackStone)

    // const row4col2 = spawnEntity(16,0,8 ,0, 0, 0, 1, 1, 1)
    // row4col2.addComponentOrReplace(resources.models.blackStone) 

    // const row4col3 = spawnEntity(16,0,12 ,0, 0, 0, 1, 1, 1)
    // row4col3.addComponentOrReplace(resources.models.blackStone)

    // const row4col4 = spawnEntity(16,0,16 ,0, 0, 0, 1, 1, 1)
    // row4col4.addComponentOrReplace(resources.models.blackStone)


    // s

//     const circlebase = new Entity("circlebase");
//     engine.addEntity(circlebase);
//     circlebase.setParent(_scene);
//     const gltfShape = new GLTFShape("models/CircleBase_01/CircleBase_01.glb");
//     gltfShape.withCollisions = true;
//     gltfShape.visible = true;
//     circlebase.addComponentOrReplace(gltfShape);
//     const transform2 = new Transform({
//       position: new Vector3(13.5, 0, 3),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     circlebase.addComponentOrReplace(transform2);

//     const stonePedestal = new Entity("stonePedestal");
//     engine.addEntity(stonePedestal);
//     stonePedestal.setParent(_scene);
//     const gltfShape2 = new GLTFShape(
//       "models/Stone_Pedestal_01/Stone_Pedestal_01.glb"
//     );
//     gltfShape2.withCollisions = true;
//     gltfShape2.visible = true;
//     stonePedestal.addComponentOrReplace(gltfShape2);
//     const transform3 = new Transform({
//       position: new Vector3(8, 0, 8),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     stonePedestal.addComponentOrReplace(transform3);

//     const circlebase2 = new Entity("circlebase2");
//     engine.addEntity(circlebase2);
//     circlebase2.setParent(_scene);
//     circlebase2.addComponentOrReplace(gltfShape);
//     const transform4 = new Transform({
//       position: new Vector3(13.5, 0, 13),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     circlebase2.addComponentOrReplace(transform4);

//     const circlebase3 = new Entity("circlebase3");
//     engine.addEntity(circlebase3);
//     circlebase3.setParent(_scene);
//     circlebase3.addComponentOrReplace(gltfShape);
//     const transform5 = new Transform({
//       position: new Vector3(3, 0, 3),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     circlebase3.addComponentOrReplace(transform5);

//     const circlebase4 = new Entity("circlebase4");
//     engine.addEntity(circlebase4);
//     circlebase4.setParent(_scene);
//     circlebase4.addComponentOrReplace(gltfShape);
//     const transform6 = new Transform({
//       position: new Vector3(3, 0, 13),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     circlebase4.addComponentOrReplace(transform6);

//     const crystal = new Entity("crystal");
//     engine.addEntity(crystal);
//     crystal.setParent(_scene);
//     const gltfShape3 = new GLTFShape("models/Crystal_03/Crystal_03.glb");
//     gltfShape3.withCollisions = true;
//     gltfShape3.visible = true;
//     crystal.addComponentOrReplace(gltfShape3);
//     const transform7 = new Transform({
//       position: new Vector3(13.5, 0, 3),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     crystal.addComponentOrReplace(transform7);

//     const crystal2 = new Entity("crystal2");
//     engine.addEntity(crystal2);
//     crystal2.setParent(_scene);
//     const gltfShape4 = new GLTFShape("models/Crystal_05/Crystal_05.glb");
//     gltfShape4.withCollisions = true;
//     gltfShape4.visible = true;
//     crystal2.addComponentOrReplace(gltfShape4);
//     const transform8 = new Transform({
//       position: new Vector3(13.5, 0, 13),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     crystal2.addComponentOrReplace(transform8);

//     const crystal3 = new Entity("crystal3");
//     engine.addEntity(crystal3);
//     crystal3.setParent(_scene);
//     const gltfShape5 = new GLTFShape("models/Crystal_01/Crystal_01.glb");
//     gltfShape5.withCollisions = true;
//     gltfShape5.visible = true;
//     crystal3.addComponentOrReplace(gltfShape5);
//     const transform9 = new Transform({
//       position: new Vector3(3, 0, 3),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     crystal3.addComponentOrReplace(transform9);

//     const crystal4 = new Entity("crystal4");
//     engine.addEntity(crystal4);
//     crystal4.setParent(_scene);
//     const gltfShape6 = new GLTFShape("models/Crystal_02/Crystal_02.glb");
//     gltfShape6.withCollisions = true;
//     gltfShape6.visible = true;
//     crystal4.addComponentOrReplace(gltfShape6);
//     const transform10 = new Transform({
//       position: new Vector3(3, 0, 13),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     crystal4.addComponentOrReplace(transform10);

//     const carpet = new Entity("carpet");
//     engine.addEntity(carpet);
//     carpet.setParent(_scene);
//     const gltfShape7 = new GLTFShape("models/Carpet_02/Carpet_02.glb");
//     gltfShape7.withCollisions = true;
//     gltfShape7.visible = true;
//     carpet.addComponentOrReplace(gltfShape7);
//     const transform11 = new Transform({
//       position: new Vector3(8.5, 0, 9),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     carpet.addComponentOrReplace(transform11);

//     const entity = new Entity("entity");
//     engine.addEntity(entity);
//     entity.setParent(_scene);
//     const gltfShape8 = new GLTFShape(
//       "models/GroundFloorSciFi_04/GroundFloorSciFi_04.glb"
//     );
//     gltfShape8.withCollisions = true;
//     gltfShape8.visible = true;
//     entity.addComponentOrReplace(gltfShape8);
//     const transform12 = new Transform({
//       position: new Vector3(8, 0, 8),
//       rotation: new Quaternion(0, 0, 0, 1),
//       scale: new Vector3(1, 1, 1)
//     });
//     entity.addComponentOrReplace(transform12);
   }
}
