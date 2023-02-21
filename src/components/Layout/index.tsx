import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Header'
import { Wrapper, Content } from './styles'

const Layout: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Wrapper>
    )
}

export default Layout