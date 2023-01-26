import React from 'react'
import Header from '../Header'

import { Wrapper, Content } from './styles'

const Layout: React.FC = ({children}) => {
    return (
        <Wrapper>
            <Header />
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Layout