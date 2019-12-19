import { Layout, Row, Col } from 'antd'
import styled from 'styled-components'
const Footer = Layout

const StyledHeader = styled(Footer)`
{
    backgroundColor: ${({ theme }) => theme.colors.primary};
    marginTop: 25px;
}
`

const LeftCol = styled(Col)`
{
    textAlign: "left";
}
`

const RightCol = styled(Col)`
{
    textAlign: "right";
}
`

const CenterCol = styled(Col)`
{
    textAlign: "center";
    fontWeight: 600;
    textTransform: "uppercase";
}
`

export default ({ centerColumn, rightColumn, leftColumn }) => {
    return (
            <StyledHeader theme="dark" className="header">
                <Row>
                    <LeftCol span={8}>
                        {leftColumn}
                    </LeftCol>
                    <CenterCol span={8}>
                        {centerColumn}
                    </CenterCol>
                    <RightCol span={8}>
                        {rightColumn}
                    </RightCol>
                </Row>
            </StyledHeader>
    );
};
