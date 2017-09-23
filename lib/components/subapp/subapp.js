'use strict';

exports.__esModule = true;

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubApp = function (_Component) {
  _inherits(SubApp, _Component);

  function SubApp(props) {
    _classCallCheck(this, SubApp);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  SubApp.prototype.componentWillMount = function componentWillMount() {
    console.log('subApp componentWillMount');
  };

  SubApp.prototype.componentDidMount = function componentDidMount() {
    console.log('subApp componentDidMount');
  };

  SubApp.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    console.log('subApp componentWillReceiveProps', nextProps);
  };

  SubApp.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    console.log('subApp shouldComponentUpdate', nextProps, nextState);
  };

  SubApp.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    console.log('subApp componentWillUpdate', nextProps, nextState);
  };

  SubApp.prototype.render = function render() {
    return (0, _preact.h)(
      'div',
      null,
      'Hello This is SubApp'
    );
  };

  return SubApp;
}(_preact.Component);

exports.default = SubApp;