import React, { Fragment } from 'react';
import ReactSVG from 'react-svg';

const LayoutSwitch = ({ layout, onLayoutChange }) => {
    return(
        <Fragment>
            <button>
                {/* // IconButton */}
                <ReactSVG path="/svg/icon-block-layout.svg" />
            </button>
        </Fragment>
    );
}

export default LayoutSwitch;