export interface MapConfig {
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
  private map: ymaps.Map

  constructor(mapConfig: MapConfig) {
    this.map = new ymaps.Map(mapConfig.el, mapConfig.config)
  }

  addMarker(mappable: Mappable): void {
    const coords = [mappable.location.lat, mappable.location.lng]
    const configIcon = {
      iconContent: mappable.selfName(),
      hintContent: mappable.markerContent(),
    }

    const myGeoObject = new ymaps.Placemark(coords, configIcon)

    this.map.geoObjects.add(myGeoObject)
  }
}
