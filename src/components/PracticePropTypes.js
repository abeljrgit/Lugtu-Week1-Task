import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PracticePropTypes extends Component {
  render() {
    return <div></div>;
  }
}

PracticePropTypes.propTypes = {
  valArray: PropTypes.array,
  valBigInt: PropTypes.bigint,
  valBool: PropTypes.bool,
  valFunc: PropTypes.func,
  valNumber: PropTypes.number,
  valObj: PropTypes.object,
  valString: PropTypes.string,
  valSymbol: PropTypes.symbol,

  valNode: PropTypes.node,
  valElement: PropTypes.element,
  valElementType: PropTypes.elementType,

  valMessage: PropTypes.instanceOf(Message),

  valEnum: PropTypes.oneOf(['News', 'Photos']),

  valUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message),
  ]),

  valArrayOf: PropTypes.arrayOf(PropTypes.number),

  valObjectOf: PropTypes.objectOf(PropTypes.number),

  valObjectWithShape: PropTypes.shape({
    valProperty1: PropTypes.string,
    valProperty2: PropTypes.number.isRequired,
  }),

  valObjectWithStrictShape: PropTypes.exact({
    valProperty1: PropTypes.string,
    valProperty2: PropTypes.number.isRequired,
  }),

  valRequiredFunc: PropTypes.func.isRequired,

  valRequiredAny: PropTypes.any.isRequired,
  valRequiredString: PropTypes.string.isRequired,

  customProp: function (props, propName, componentName) {},
};
