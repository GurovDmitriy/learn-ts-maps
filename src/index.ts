import ymaps from "ymaps"

import { MapCustom } from "./MapCustom"
import { User } from "./User"
import { Company } from "./Company"

const user = new User()
const company = new Company()

async function loadMap(): Promise<void> {
  const maps = await ymaps.load()

  const map = new MapCustom({
    maps,
    el: "map",
    config: {
      center: [0, 0],
      zoom: 0,
    },
  })

  map.addMarker(user)
  map.addMarker(company)
}

try {
  loadMap()
} catch (err) {
  console.log(err)
}
