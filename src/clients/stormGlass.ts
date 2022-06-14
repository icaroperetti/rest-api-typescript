import { AxiosStatic } from 'axios'

export class StormGlass {
  readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed'
  readonly stormGlassAPISource = 'noaa'
  readonly stormGlassAPIEnd = '1592113802'
  constructor(protected request: AxiosStatic) {}

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    this.request.get(
      `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassAPIParams}&source=${stormGlassAPISource}&end=${stormGlassAPIEnd}&lat=${lat}&lng=${lng}`
    )
    return Promise.resolve({})
  }
}
