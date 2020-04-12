// LerpData component
@Component("lerpData")
export class LerpData {
  point1 = new Vector3(0, 0, 0);
  point2 = new Vector3(0, 0, 2);
  point3 = new Vector3(2, 0, 0);
  point4 = new Vector3(0, 2, 0);
  point5 = new Vector3(3, 0, 1);

  path: Vector3[] = [
    this.point1,
    this.point2,
    this.point3,
    this.point4,
    this.point5
  ];
  array: Vector3[] = this.path;
  origin: number = 0;
  target: number = 1;
  fraction: number = 0;
}
