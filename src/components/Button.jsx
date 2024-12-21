import React from 'react'
import PropTypes from 'prop-types'


const PrimaryButton = ({
    href,
    target = "_self",
    label,
    icon,
    classess
}) => {

    if (href) {
        return (
            <a href={href}
                target={target}
                className={"btn btn-primary " + classess}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden="true">
                        {icon}
                    </span> : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classess}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden="true">
                        {icon}
                    </span> : undefined
                }
            </button>
        )
    }

}

PrimaryButton.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    target: PropTypes.string,
    icon: PropTypes.string,
    classess: PropTypes.string,
}

const OutlineButton = ({
    href,
    target = "_self",
    label,
    icon,
    classess
}) => {

    if (href) {
        return (
            <a href={href}
                target={target}
                className={"btn btn-outline " + classess}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden="true">
                        {icon}
                    </span> : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classess}>
                {label}

                {icon ?
                    <span className='material-symbols-rounded' aria-hidden="true">
                        {icon}
                    </span> : undefined
                }
            </button>
        )
    }

}

OutlineButton.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    target: PropTypes.string,
    icon: PropTypes.string,
    classess: PropTypes.string,
}

export {
    PrimaryButton,
    OutlineButton
}