declare module 'lottie-web' {
  export interface AnimationConfig {
    container: Element;
    renderer?: 'svg' | 'canvas' | 'html';
    loop?: boolean | number;
    autoplay?: boolean;
    name?: string;
    animationData?: unknown;
    path?: string;
    rendererSettings?: unknown;
  }

  export interface AnimationItem {
    play(): void;
    stop(): void;
    pause(): void;
    setSpeed(speed: number): void;
    goToAndStop(value: number, isFrame?: boolean): void;
    goToAndPlay(value: number, isFrame?: boolean): void;
    setDirection(direction: number): void;
    playSegments(segments: number[] | number[][], forceFlag?: boolean): void;
    setSubframe(useSubFrames: boolean): void;
    destroy(): void;
  }

  export function loadAnimation(params: AnimationConfig): AnimationItem;
  // export function setQuality(quality: string | number): void;
  // export function setLocationHref(href: string): void;
  // export function searchAnimations(
  //   animationData?: unknown,
  //   standalone?: boolean,
  //   renderer?: 'svg' | 'canvas' | 'html'
  // ): void;
}