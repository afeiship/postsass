import React from 'react';
import PropTypes from 'prop-types';
export declare type Props = {
    text: string;
};
export default class BoilerplateReactTsComponent extends React.Component<Props> {
    static defaultProps: {
        /**
         * The extended className for component.
         */
        className: PropTypes.Requireable<string>;
        /**
         * Default value.
         */
        value: PropTypes.Requireable<object>;
        /**
         * The change handler.
         */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /**
         * If element destroyed when visible to false.
         * In modal case:
         * 1. set the value to true, you need not care z-index
         * 2. If only has one modal, you can set this to false.
         */
        destroyable: PropTypes.Requireable<boolean>;
        /**
         * Backdrop props or not display backdrop.
         */
        backdrop: PropTypes.Requireable<boolean | object>;
    };
    render(): JSX.Element;
}
