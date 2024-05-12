import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import Button from '../button/button.jsx';

import newStyles from './tag-button.css';
import oldStyles from './old-tag-button.css';

const useLegacyTheme = localStorage.getItem("sn:useOldTheme") ?? "false";
let styles;
if (useLegacyTheme == "true") {
    styles = oldStyles;
} else {
    styles = newStyles;
}


const TagButtonComponent = ({
    active,
    iconClassName,
    className,
    tag, // eslint-disable-line no-unused-vars
    intlLabel,
    ...props
}) => (
    <Button
        className={classNames(
            styles.tagButton,
            className, {
                [styles.active]: active
            }
        )}
        iconClassName={classNames(
            styles.tagButtonIcon,
            iconClassName
        )}
        {...props}
    >
        {typeof intlLabel === 'string' ? intlLabel : (
            <FormattedMessage {...intlLabel} />
        )}
    </Button>
);

TagButtonComponent.propTypes = {
    ...Button.propTypes,
    active: PropTypes.bool,
    intlLabel: PropTypes.oneOfType([
        PropTypes.shape({
            defaultMessage: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.string
        }),
        PropTypes.string
    ]).isRequired,
    tag: PropTypes.string.isRequired
};

TagButtonComponent.defaultProps = {
    active: false
};

export default TagButtonComponent;
