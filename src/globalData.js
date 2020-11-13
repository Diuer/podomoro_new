export default {
  _isOpenedSlider: false,
  get _isOpenedSlider() {
    return this.__isOpenedSlider
  },
  set _isOpenedSlider(opened) {
    this.__isOpenedSlider = opened
  }
}