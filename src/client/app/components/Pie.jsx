import React from 'react'

export default class Pie extends React.Component {
    constructor(props) {
        super(props)
    }
  render() {
    const hue=(100 - this.props.value).toString(10)
    const color = `hsl(${hue}, 80%, 40%)`
    const outerSize = this.props.size
    const innerSize = this.props.fillSize

    return (
      <div style={{
          background: 'linear-gradient(120deg, #FFF, #d7d7d7)',
          borderRadius: '50%',
          boxShadow: '0 0 10px #666',
          display: 'inline-block',
          position: 'absolute',
          top: '0',
          left: '0',
          width: outerSize + 'px',
          height: outerSize + 'px' }} >

        <svg style={{
            position: 'absolute',
            top: (outerSize - innerSize) / 2 + 'px',
            left: (outerSize - innerSize) / 2 + 'px',
            width: innerSize + 'px',
            height: innerSize + 'px',
            borderRadius: '50%',
            fill: 'none',
            transform: 'rotate(-90deg)' }} viewBox="0 0 32 32">

          <circle
            r="16" cx="16" cy="16"
            style={{ stroke: color, strokeWidth: '32px', strokeDasharray: this.props.value +' 100' }}
            />
        </svg>

      </div>
    )
  }
}
