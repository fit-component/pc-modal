import * as React from 'react'
import {Button, ButtonGroup} from '../../../button/src'
import Modal from '../../src'

export default class Demo extends React.Component <any,any> {
    constructor(props:any) {
        super(props)
        this.state = {
            show    : false,
            backdropClickToClose: true
        }
    }

    handleShowModal(backdrop:boolean = true) {
        this.setState({
            show    : true,
            backdropClickToClose: backdrop
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
                    <Button onClick={this.handleShowModal.bind(this,false)}>有背景幕,点击不关闭</Button>
                </ButtonGroup>
                <Modal show={this.state.show}
                       backdropClickToClose={this.state.backdropClickToClose}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Modal>
            </div>
        )
    }
}