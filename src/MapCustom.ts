import { User } from "./User"
import { Company } from "./Company"

export interface MapConfig {
  maps: any
  el: string
  config: {
    center: [lat: number, lng: number]
    zoom: number
  }
}

export interface Mappable {
  location: { lat: number; lng: number }
  markerContent(): string
  selfName(): string
  color: string
}

export class MapCustom {
  private maps: ymaps.Map
  private map: ymaps.Map

  constructor(mapConfig: MapConfig) {
    const { maps, el, config } = mapConfig
    this.maps = maps

    this.addMap(el, config)
  }

  addMap(el, config): void {
    this.map = new this.maps.Map(el, config)
  }

  addMarker(mappable: Mappable): void {
    const myGeoObject = new this.maps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [mappable.location.lat, mappable.location.lng],
      },

      properties: {
        iconContent: mappable.selfName(),
        hintContent: mappable.markerContent(),
      },
    })

    this.map.geoObjects.add(myGeoObject)
  }
}
