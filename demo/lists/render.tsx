import * as React from 'react'
import {Button, ButtonGroup} from '../../../button/src'
import Modal from '../../src'

export default class Demo extends React.Component <any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleShowModal() {
        this.setState({
            show: true
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

    renderOperateButton(triggerOk:Function, triggerCancel:Function) {
        return (
            <div>
                <Button onClick={triggerOk}>我知道了</Button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleShowModal.bind(this)}>点我弹出模态框</Button>
                <Modal show={this.state.show}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}
                       renderOperateButton={this.renderOperateButton.bind(this)}>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Modal>
            </div>
        )
    }
}