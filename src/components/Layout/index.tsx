import React from 'react'
import { Outlet } from 'react-router-dom'

import { HeaderProvider } from '../../utils/HeaderThemeHook'
import Header from '../Header'
import Footer from '../Footer'
import { Wrapper, Content } from './styles'

const Layout: React.FC = () => {
    return (
        <Wrapper>
            <HeaderProvider>
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </HeaderProvider>
        </Wrapper>
    )
}

export default Layout