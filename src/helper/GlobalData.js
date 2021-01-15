import FakeData from '../../FakeData';

const GlobalData = {
  _todoTask: [],
  _doneTask: [],
  _isSliderVisible: false,
  get TodoTask() {
    return this._todoTask;
  },
  set TodoTask(todo) {
    this._todoTask = todo;
  },
  get DoneTask() {
    return this._doneTask;
  },
  set DoneTask(done) {
    this._doneTask = done;
  },
  get IsSliderVisible() {
    return this._isSliderVisible;
  },
  set IsSliderVisible(isVisible) {
    this._isSliderVisible = isVisible;
  },
};

export default GlobalData;
