import { MapCustom } from "./MapCustom"
import { User } from "./User"
import { Company } from "./Company"

const user = new User()
const company = new Company()

ymaps.ready(function () {
  const map = new MapCustom({
    el: "map",
    config: {
      center: [0, 0],
      zoom: 0,
    },
  })

  map.addMarker(user)
  map.addMarker(company)
})
