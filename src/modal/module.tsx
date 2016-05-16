export interface PropsInterface {
    /**
     * 取消按钮文字
     */
    cancelText?: string

    /**
     * 确认按钮文字
     */
    okText?: string

    /**
     * 是否显示模态框
     */
    show?: boolean

    /**
     * 模态框标题
     */
    title?: string

    /**
     * 点击确认回调
     */
    onOk?: ()=> void

    /**
     * 点击取消回调
     */
    onCancel?: ()=> void

    /**
     * 自定义按钮
     */
    renderOperateButton?: (onOk?: ()=>void, onCancel?: ()=>void)=>void

    /**
     * 背景幕
     */
    backdropClickToClose?: boolean

    /**
     * 大小
     */
    size?: string
    
    [x: string]: any
}

export class Props implements PropsInterface {
    cancelText = '取消'
    okText = '确定'
    show = false
    title = ''
    onOk = ()=> {
    }
    onCancel = ()=> {
    }
    renderOperateButton = ()=> {
    }
    backdropClickToClose = true
    size = 'normal'
}

export interface StateInterface {

}

export class State implements StateInterface {

}