import EventEmitter from 'event-emitter';
const _emitter = new EventEmitter();
const EMPYT_FUNCTION = () => { };
const Emitter = {
  addListener: (eventName, doFunctions) => {
    _emitter.once(eventName, doFunctions);
  },
  removeListener: () => {
    _emitter.off(eventName, doFunctions);
  },
  sendListener: (eventName, ...args) => {
    _emitter.emit(eventName, args);
  }
}

export default Emitter;