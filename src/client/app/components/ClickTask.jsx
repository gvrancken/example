import React from 'react'
import Pie from './Pie.jsx'

export default class ClickTask extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }
    componentDidMount() {
        this.props.playSound('ClickTaskStart');
    }
    onClick() {
        this.props.onClick(this.props.data)
    }
    render() {

        return (
            <div style={{
                position: 'absolute',
                top: this.props.station.y - 12,
                left: this.props.station.x - 12,
                cursor: 'pointer'
            }}

            onClick={this.onClick}>
                <Pie value={this.props.percent} size="24" fillSize="18" />
            </div>
        )
    }
}
