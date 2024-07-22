class Natural_Motion {
  constructor(to, stiffness, damping, pauseFactor) {
    this.x = 0
    this.target = to
    this.v = 0
    this.k = stiffness
    this.damp = damping
    this.ticker = 0
    this.pause = 0
    this.pauseFactor = pauseFactor
  }

  update(dts) {
    this.x += this.v * dts
    this.v += (this.k * (this.target - this.x) - this.damp * this.v) * dts

    //randomness
    //   this.ticker += dts //dts;
    //   if (this.ticker > this.pause) {
    //     this.pause = this.pauseFactor * Math.random() //new delay
    //     this.target = Math.random() //  *2; new target
    //     console.log(this.target)
    //     this.ticker = 0 // reset ticker
    //   }

  }

  updateTicker(dts) {
    this.ticker += dts
  }

  setTarget(newTarget) {
    this.target = newTarget
  }

  getPosition() {
    return this.x
  }
}

export default Natural_Motion
