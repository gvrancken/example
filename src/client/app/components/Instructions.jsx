import React from 'react'

import PlaceHolderImg from '../img/notification_placeholder_img.png'

export default class Instructions extends React.Component {
    constructor(props) {
        super(props)

        this.instructions = this.props.instructions
        this.activeInstruction = null
    }

    componentDidUpdate() {
        const timeInSeconds = this.props.timeInSeconds

        if (!this.activeInstruction) {
            this.activeInstruction = this.instructions.find( (elem) => {
                return elem.time < timeInSeconds
            })
        } else {
            const timeLeft = this.activeInstruction.time + this.activeInstruction.duration - timeInSeconds
            if ((this.activeInstruction.time + this.activeInstruction.duration) < timeInSeconds) {
              this.instructions = this.instructions.filter( c => c.id != this.activeInstruction.id )
              this.activeInstruction = null
            }
        }
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: '150px',
                backgroundColor: 'white',
                width: '270px',
                height: '70px',
                transformOrigin: 'center left',
                transform: !this.activeInstruction ? 'scale(0)' : 'scale(1)',
                transition: 'cubic-bezier(0, 1.4, 1, 1) 0.4s',
                borderRadius: '0 10px 10px 0',
                boxShadow: '1px 1px 7px #000, inset -1px -1px 1px #666',
                overflow: 'hidden',
            }}>

            {this.activeInstruction &&
                <Instruction
                playSound={this.props.playSound}
                title={this.activeInstruction.title}
                text={this.activeInstruction.bodytext}
                image={null} />
            }

            </div>
        )
    }
}

class Instruction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show: true}
    }

    componentDidMount() {
        this.props.playSound('InstructionShow')
    }

    render() {
        return (
            <div>
                <img src={this.props.image} style={{
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginRight: '5px',
                    width: '70px',
                }} />
                <div style={{
                    display: 'inline-block',
                    width: '190px',
                }}>
                    <span style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: '#ab200a',
                        lineHeight: '15px',
                    }}>{this.props.title}</span>
                    <div style={{
                        fontSize: '10.6px',
                        lineHeight: '13px',
                    }}>{this.props.text}</div>
                    </div>
            </div>
        )
    }
}
