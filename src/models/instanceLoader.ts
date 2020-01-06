import * as qcNamespace from '../question-calculations/index';

export class InstanceLoader<T> {
  public getInstance(name: string, ...args: any[]): T {
    const instance = new (qcNamespace as any)[name](args);
    return instance as T;
  }
}
