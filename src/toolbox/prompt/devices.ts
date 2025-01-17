import { Device } from '../../types'

export const DEVICE_ALIAS: Record<Device | 'esp8266', string> = Object.freeze({
  esp8266: 'esp',
  darwin: 'mac',
  mac: 'mac',
  windows_nt: 'win',
  win: 'win',
  linux: 'lin',
  lin: 'lin',
  esp: 'esp',
  esp32: 'esp32',
  wasm: 'wasm',
  pico: 'pico',
})
