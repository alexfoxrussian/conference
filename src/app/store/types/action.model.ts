import { AnyAction } from 'redux';

export interface AppAction<Type, Payload = any> extends AnyAction {
  readonly type: Type;
  readonly payload?: Payload;
}
