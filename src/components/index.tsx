import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

const CLASS_NAME = 'boilerplate-react-ts-component';

export type BoilerplateReactTsComponentProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class BoilerplateReactTsComponent extends Component<BoilerplateReactTsComponentProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...theProps}>
        <button
          style={{ padding: 20, width: '100%' }}
          onClick={this.handleClick}
          className="icon-play">
          Enjoy coding.
        </button>
      </div>
    );
  }
}
