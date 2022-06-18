import faker from "faker"
import { Mappable } from "./MapCustom"

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  color: string

  markerContent(): string {
    return `User Name is ${this.name}`
  }

  selfName(): string {
    return "user"
  }
}
