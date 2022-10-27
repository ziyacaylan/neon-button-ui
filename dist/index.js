function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"test":"_3ybTi","btn":"_1Pz2d","pink":"_2_CEJ","blue":"_xHAXC","purple":"_3Iyi7","red":"_3nWpX","orange":"_2iAN7","yellow":"_3kj3e","green-dark":"_17qZj","green-light":"_2NZEL","cyan":"_3Ozbd","black":"_os8Gl","animate1":"_jNEiT","animate3":"_1g3zc","animate2":"_3JzI6","animate4":"_3pqGT"};

var NeonButton = function NeonButton(props) {
  var classNames = styles['btn'];
  var classes = function classes() {
    var classList = props.type.split(' ');
    classList.map(function (item) {
      classNames += ' ' + styles[item];
    });
  };
  if (props.type) {
    classes();
  }
  console.log(classNames);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames
  }, props), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), props.text);
};

exports.NeonButton = NeonButton;
//# sourceMappingURL=index.js.map
