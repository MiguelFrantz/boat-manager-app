import { Col } from "antd"
import { TotalBoats } from "./total-boats"
import { styled } from "styled-components";

interface Props {
  title: string;
  totalItems?: number;
}

const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 28px 0px 8px 0px;
  h2{
    margin: 0px;
  }
  p {
    margin: 0px;
  }
`

const CardHeader = ({ title, totalItems }: Props) => (
  <Container>
    <Col flex="auto">
      <h2>{title}</h2>
    </Col>
    <Col>
      <TotalBoats total={totalItems} />
    </Col>
  </Container>
)

export { CardHeader }