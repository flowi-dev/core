export class Vector {
  constructor(public x: number, public y: number) {}
}

export class Block {
  constructor(public position: Vector, public size: Vector) {}
}