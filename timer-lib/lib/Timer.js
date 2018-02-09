'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    return _this;
  }

  _createClass(Timer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getTimeUntil(this.props.deadline);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        return _this2.getTimeUntil(_this2.props.deadline);
      }, 1000);
    }
  }, {
    key: 'leadingZero',
    value: function leadingZero(num) {
      return num < 10 ? '0' + num : num;
    }
  }, {
    key: 'getTimeUntil',
    value: function getTimeUntil(deadline) {
      var time = Date.parse(deadline) - Date.parse(new Date());
      var seconds = Math.floor(time / 1000 % 60);
      var minutes = Math.floor(time / 1000 / 60 % 60);
      var hours = Math.floor(time / (1000 * 60 * 60) % 24);
      var days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'Clock-days',
            style: { display: 'inline', margin: '10px' }
          },
          this.leadingZero(this.state.days),
          ' days'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'Clock-hours',
            style: { display: 'inline', margin: '10px' }
          },
          this.leadingZero(this.state.hours),
          ' hours'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'Clock-minutes',
            style: { display: 'inline', margin: '10px' }
          },
          this.leadingZero(this.state.minutes),
          ' minutes'
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'Clock-seconds',
            style: { display: 'inline', margin: '10px' }
          },
          this.leadingZero(this.state.seconds),
          ' seconds'
        )
      );
    }
  }]);

  return Timer;
}(_react.Component);

exports.default = Timer;
