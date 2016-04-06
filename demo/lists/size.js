import React from 'react'
import {Button, ButtonGroup} from 'fit-button'
import Modal from 'fit-modal'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            size: 'normal'
        }
    }

    handleShowModal(size = 'normal') {
        this.setState({
            show: true,
            size: size
        })
    }

    handleOk() {
        this.setState({
            show: false
        })
    }

    handleCancel() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={this.handleShowModal.bind(this,'small')}>小尺寸</Button>
                    <Button onClick={this.handleShowModal.bind(this)}>中尺寸</Button>
                    <Button onClick={this.handleShowModal.bind(this,'large')}>大尺寸</Button>
                </ButtonGroup>
                <Modal show={this.state.show}
                       size={this.state.size}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Modal>
            </div>
        )
    }
}