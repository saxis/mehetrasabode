@Component("timeOut")
export class TimeOut {
  timeLeft: number;
  constructor(time: number) {
    this.timeLeft = time;
  }
}