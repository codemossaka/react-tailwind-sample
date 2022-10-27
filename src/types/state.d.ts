import Language from "./language";

export default interface StateType {
  status: 'idle' | 'loading' | 'error';
  movies?: Language[];
  error?: Error | null;
}
