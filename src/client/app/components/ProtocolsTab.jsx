import React from 'react'
import ArrowRight from '../assets/tabs/arrow-right.png'
import TabImg from '../assets/tabs/protocol-tab.png'

export default class Protocols extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openTab: -1
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.openTab != this.state.openTab
    }
    openTab(tab) {
        this.props.playSound('ProtocolOpen');
        this.setState({openTab: tab})
        this.props.setTrackingData('Protocoltab_Opened', {
            "protocolID": tab,
            "time": this.props.timeInSeconds
        })
    }
    closeTab(tab) {
        this.props.playSound('ProtocolClose');
        this.setState({openTab: -1})
        this.props.setTrackingData('Protocoltab_Closed', {
            "protocolID": tab,
            "time": this.props.timeInSeconds
        })
    }
    render() {
        const protocols = this.props.protocols

        return (
          <div style={{
            position: 'absolute',
            right: 0,
            top: '70px',
          }}>
            {protocols.map((proto, i) => {
                let onClick = this.openTab.bind(this)
                if (this.state.openTab == i) {
                    onClick = this.closeTab.bind(this)
                }
                return (
                    <div key={proto.title}>
                        <Protocol num={i} isOpen={this.state.openTab == i} onClick={onClick} text={proto.text} title={proto.title} />
                    </div>
                )
            })}
          </div>
        )
    }
};

class Protocol extends React.Component {
    render() {
        let xRight = 0
        let zIndex = 2000
        let showArrow

        if (this.props.isOpen) {
            xRight = 650
            zIndex = 1000
            showArrow = (<img style={{
                position: 'absolute',
                left: '0',
                top: '25px'
            }} src={ArrowRight} />)
        }
        return (
            <div>
                <div style={{
                    zIndex: zIndex,
                    position: 'absolute',
                    right: '-400px',
                    transform: `translate(-${xRight}px, 0)`,
                    width: '400px',
                    height: '530px',
                    backgroundColor: 'white',
                    borderRadius: '10px 10px 10px 10px',
                    transition: '1.1s',
                    boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.5)',
                }}>
                    <div onClick={() => this.props.onClick(this.props.num)} style={{
                        position: 'absolute',
                        left: '-40px',
                        top: this.props.num * 60 + 'px',
                        cursor: 'pointer',
                        width: '40px',
                        height: '100px',
                        background: 'url('+ TabImg + ')'
                    }}>
                        <span style={{
                            position: 'absolute',
                            top: '30px',
                            left: '16px',
                            fontWeight: 'bold',
                            fontFamily: 'Verdana',
                        	fontSize: '18px',
                        	color:'#AA0000'
                        }}>
                            {this.props.num + 1}
                            {showArrow}
                        </span>

                    </div>
                    <div style={{ padding: '10px 30px' }}>
                        <h2 style={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#ab200a',
                            marginBottom: '20px',
                        }}>{this.props.title}</h2>
                        <div style={{
                            marginLeft: '-20px',
                            lineHeight: '25px'
                        }} dangerouslySetInnerHTML={{__html:this.props.text}}></div>

                    </div>
                </div>

            </div>
        )
    }
}
