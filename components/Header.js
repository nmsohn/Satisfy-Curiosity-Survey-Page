import { Layout, Row, Col } from 'antd'
import styled from 'styled-components'
const Header = Layout

const StyledHeader = styled(Header)`
{
    backgroundColor: ${({ theme }) => theme.colors.primary};
    marginBottom: 25px;
}
`

const RightCol = styled(Col)`
{
    textAlign: "right";
}
`

const LeftCol = styled(Col)`
{
    textAlign: "left";
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
                    <LeftCol span={6}>
                        {leftColumn}
                    </LeftCol>
                    <CenterCol span={12}>
                        {centerColumn}
                    </CenterCol>
                    <RightCol span={6}>
                        {rightColumn}
                    </RightCol>
                </Row>
            </StyledHeader>
    );
};
