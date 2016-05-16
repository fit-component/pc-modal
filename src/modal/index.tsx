import * as React from 'react'
import * as classNames from 'classnames'
import RenderTo from '../../../../common/render-to/src'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Modal extends React.Component <module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any) {
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
        if (!this.props.backdropClickToClose)return
        this.handleCancel()
    }

    handleModalClick(event: TouchEvent) {
        event.stopPropagation()
    }

    render() {
        const {className, show, title, children, renderOperateButton, cancelText, okText} = this.props
        const classes = classNames({
            '_namespace': true,
            'modal': true,
            'fade': true,
            'in': true,
            [className]: className
        })
        let _others: any = others(new module.Props(), this.props)

        _others.style = _others.style || {}
        _others.style.display = show ? 'block' : null

        const extraModalSizeClass = classNames({
            'modal-dialog': true,
            'modal-lg': this.props.size === 'large',
            'modal-sm': this.props.size === 'small'
        })

        return (
            <RenderTo>
                <div {..._others} className={classes}
                                  onClick={this.handleOutClick.bind(this)}
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