import React from 'react'
import { shallow, mount } from 'enzyme'
import Modal from 'fit-modal'

describe('fit-modal', ()=> {
    it('内容渲染成功', ()=> {
        const node = mount(
            <Modal show={true}>
                <p>测试内容</p>
            </Modal>
        )
        expect(node.text()).to.contain('测试内容')
    })
})
