import React from 'react'
import classNames from 'classnames'
import RenderTo from 'fit-render-to'
import './index.scss'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    // 确定
    handleOk() {
        this.props.onOk()
    }

    // 取消
    handleCancel() {
        this.props.onCancel()
    }

    handleOutClick() {
        this.handleCancel()
    }

    handleModalClick(event) {
        event.stopPropagation()
    }

    render() {
        const {className, show, title, children, renderOperateButton, cancelText, okText, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            'modal'     : true,
            'fade'      : true,
            'in'        : true,
            [className] : className
        })

        others.style = others.style || {}
        others.style.display = show ? 'block' : null

        const extraModalSizeClass = classNames({
            'modal-dialog': true,
            'modal-lg'    : this.props.size === 'large',
            'modal-sm'    : this.props.size === 'small'
        })

        return (
            <RenderTo>
                <div {...others} className={classes}
                                 onClick={this.handleOutClick.bind(this)}
                                 data-modal-backdrop={this.props.backdrop}
                                 tabIndex="-1">
                    <div className={extraModalSizeClass}
                         onClick={this.handleModalClick.bind(this)}>
                        <div className="modal-content">
                            {title === '' ? null :
                                <div className="modal-header">
                                    <button type="button"
                                            className="close">
                                        <span onClick={this.handleCancel.bind(this)}>×</span>
                                        <span className="sr-only">Close</span>
                                    </button>
                                    <h4 className="modal-title">{title}</h4>
                                </div>
                            }
                            <div className="modal-body"
                                 style={{marginTop:title===''?20:null}}>
                                {children}
                            </div>
                            <div className="modal-footer">
                                {renderOperateButton() ? renderOperateButton(this.handleOk.bind(this), this.handleCancel.bind(this)) :
                                    <div>
                                        <button type="button"
                                                onClick={this.handleCancel.bind(this)}
                                                className="btn btn-secondary">
                                            {cancelText}
                                        </button>
                                        <button type="button"
                                                className="btn btn-primary"
                                                onClick={this.handleOk.bind(this)}>{okText}</button>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </RenderTo>
        )
    }
}

Modal.defaultProps = {
    // @desc 取消按钮文字
    cancelText: '取消',

    // @desc 确认按钮文字
    okText: '确定',

    // @desc 是否显示模态框
    show: false,

    // @desc 模态框标题
    title: '',

    // @desc 点击确认回调
    onOk: ()=> {
    },

    // @desc 点击取消回调
    onCancel: ()=> {
    },

    // @desc 自定义按钮
    renderOperateButton: ()=> {
    },

    // @desc 背景幕
    // @enum true false static
    backdrop: true,

    // @desc 大小
    size: 'normal'
}