import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RtButton: typeof components.Button;
    RtIcon: typeof components.Icon;
  }
}
export {};