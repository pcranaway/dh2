export enum FrameType {
    HEADERS,
    DATA,
    SETTINGS,
    WINDOW_UPDATE,
    PUSH_PROMSE,
    GOAWAY
};

export interface Frame {
    type: FrameType,
    data: Uint8Array
};
