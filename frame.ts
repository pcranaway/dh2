import { Stream } from "./stream.ts";

export enum FrameType {
  HEADERS,
  DATA,
  SETTINGS,
  WINDOW_UPDATE,
  PUSH_PROMSE,
  GOAWAY,
}

export interface Frame {
  stream: Stream;
  type: FrameType;
  data: Uint8Array;
  flags?: Record<string, boolean>;
}
