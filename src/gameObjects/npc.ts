export class Npc extends Entity {
    private _hp: number;
    //private _walkClip: AnimationState
  
    constructor(sound: AudioClip, model: GLTFShape, startingHp: number) {
      super();
      engine.addEntity(this);
      this.addComponent(model);
      this.addComponent(
        new Transform({
          position: new Vector3(12, 0, 5)
        })
      );
      this.addComponent(new AudioSource(sound));
      this._hp = startingHp;
    }
  
    public playAudio() {
      this.getComponent(AudioSource).playOnce();
    }
  
    get hp() {
      return this._hp;
    }
  
    set hp(val: number) {
      if (val > 0) {
        this._hp = val;
      }
    }
  
    heal(amount: number) {
      this.hp += amount;
    }
  
    takedamage(amount: number) {
      this.hp -= amount;
    }
  }
  