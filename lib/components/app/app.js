'use strict';

exports.__esModule = true;

var _preact = require('preact');

var _subapp = require('../subapp/subapp.jsx');

var _subapp2 = _interopRequireDefault(_subapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      val: 1
    };
    return _this;
  }

  App.prototype.componentWillMount = function componentWillMount() {
    console.log('get into componentWillMount');
  };

  App.prototype.componentDidMount = function componentDidMount() {
    console.log('get into componentDidMount');
  };

  App.prototype.render = function render() {
    console.log('get into render');
    var time = new Date().toLocaleTimeString();
    return (0, _preact.h)(
      'div',
      null,
      (0, _preact.h)(
        'span',
        null,
        time
      ),
      (0, _preact.h)('br', null),
      (0, _preact.h)(
        'span',
        { id: 'helloWorld' },
        '\'hello world\''
      ),
      (0, _preact.h)('br', null),
      (0, _preact.h)('subApp', null)
    );
  };

  return App;
}(_preact.Component);

exports.default = App;