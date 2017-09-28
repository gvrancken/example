import React from 'react'
import {formatTime} from './helpers'

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            request: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
        // return Math.round(this.props.timeInSeconds) != Math.round(nextProps.timeInSeconds)
    }
    render() {
        return (
            <div style={{
                zIndex: 1000,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '60px',
                width: '170px',
                textAlign: 'center',
                backgroundColor: 'white',
                fontFamily: 'Verdana',
            	fontSize: '40px',
            	fontWeight: 'bold',
            	color: '#003399',
                boxShadow: '0 8px 5px -5px #555'
            }}>
            <span style={{
                verticalAlign: 'middle'
            }}>
                {formatTime(this.props.timeInSeconds)}
            </span>
            <div style={{
                position: 'absolute',
                width: '166px',
                height: '29px',
                bottom: 0,
                left: '2px',
                borderTop: '1px solid #CCC',
                background: 'linear-gradient(rgba(240,240,240,0.5), rgba(255,255,255,0.5))'
            }}>
            </div>
            </div>
        )
    }
}
