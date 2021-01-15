import EventEmitter from 'event-emitter';
const _emitter = new EventEmitter();
const EMPYT_FUNCTION = () => { };
const Emitter = {
  addListener: (eventName, doFunctions) => {
    _emitter.on(eventName, doFunctions);
  },
  removeListener: (eventName, doFunctions) => {
    _emitter.off(eventName, doFunctions);
  },
  sendListener: (eventName, ...args) => {
    _emitter.emit(eventName, args);
  }
}

export default Emitter;