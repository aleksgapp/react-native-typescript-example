// AndroidChartView.js
import { requireNativeComponent, View, ViewPropTypes } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Inbox item component. Maps directly to a single inbox message
 */
/*
class AndroidChartView extends React.PureComponent {
    
    render() {
        return <ReactChartManager backgroundColour={0xFF000000} chartColour={0xFFFFFF0} />
    }
}

AndroidChartView.propTypes = {
    backgroundColour: PropTypes.number,
    chartColour: PropTypes.number
}
*/

const ReactChartManager = requireNativeComponent('ReactChartManager', {name: 'ReactChartManager', propTypes: {
    ...ViewPropTypes,
    backgroundColour: PropTypes.number,
    chartColour: PropTypes.number
}});
export default ReactChartManager;
