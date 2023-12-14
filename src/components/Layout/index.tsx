import React from 'react'
import { Outlet } from 'react-router-dom'

import { useInterface } from '../../utils/InterfaceHook'
import Header from '../Header'
import Footer from '../Footer'
import { Wrapper, Content } from './styles'

const Layout: React.FC = () => {
    const { footerState } = useInterface();

    return (
        <Wrapper>
            <Header />
            <Content>
                <Outlet />
            </Content>
            {footerState.isVisible && <Footer />}
        </Wrapper>
    )
}

export default Layout