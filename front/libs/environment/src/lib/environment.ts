export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly appUrls: {
    readonly ibisdev?: string;
  };
}
