import React from 'react'
import {Button, ButtonGroup} from 'fit-button'
import Modal from 'fit-modal'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show    : false,
            backdrop: true
        }
    }

    handleShowModal(backdrop = true) {
        this.setState({
            show    : true,
            backdrop: backdrop
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
                    <Button onClick={this.handleShowModal.bind(this,true)}>有背景幕,点击关闭</Button>
                    <Button onClick={this.handleShowModal.bind(this,false)}>无背景幕</Button>
                    <Button onClick={this.handleShowModal.bind(this,'static')}>有背景幕,点击不关闭</Button>
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