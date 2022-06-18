import faker from "faker"
import { Mappable } from "./MapCustom"

export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
  color: string

  markerContent(): string {
    return `User Name is ${this.companyName}`
  }

  selfName(): string {
    return "company"
  }
}
