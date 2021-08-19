import { Stream } from "./stream.ts";

export enum FrameType {
  DATA,
  HEADERS,
  PRIORITY,
  RST_STREAM,
  SETTINGS,
  PUSH_PROMISE,
  PING,
  GOAWAY,
  WINDOW_UPDATE,
  CONTINUATION,
  ALTSVC,
  ORIGIN,
}

export interface Frame {
  stream: Stream;
  type: FrameType;
  data: Uint8Array;
  flags?: Record<string, boolean>;
}
