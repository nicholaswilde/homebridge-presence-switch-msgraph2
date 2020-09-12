import { PositionAngles, StatusPositions } from ".";

export interface PresenceConfig {
  name: string;
  accessory: string;
  appId: string;
  hostname: string;
  port: number;
  servoApi: string;
  interval: number;
  offApi: string;
  onApi: string;
  startTime: string;
  endTime: string;
  positionAngles: PositionAngles;
  statusPositions: StatusPositions;
  weekend: boolean;
  debug: boolean;
}