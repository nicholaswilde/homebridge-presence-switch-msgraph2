import { StatusAngles } from ".";

export interface PresenceConfig {
  name: string;
  accessory: string;
  appId: string;
  hostname: string;
  port: number;
  servoApi: string;
  upAngle: number;
  downAngle: number;
  interval: number;
  offApi: string;
  onApi: string;
  startTime: string;
  endTime: string;
  statusAngles: StatusAngles;
  weekend: boolean;
  debug: boolean;
}