import { Avatar, Button, Card, Col, Row } from "antd";
import { BoatPreview } from "~metadata/boats.model";
import BoatImage from './boat.png'
import { CaretRightFilled } from "@ant-design/icons";

const { Meta } = Card;

interface CardProps {
  loading: boolean;
  onDetail: (code: string) => void;
}

const CardBoat = ({ code, name, photo, loading, onDetail }: BoatPreview & CardProps) => {
  return (
    <Card style={{ marginTop: 16 }} loading={loading} >
      <Row>
        <Col flex="auto">
          <Meta
            avatar={<Avatar src={photo || BoatImage} size="large" />}
            title={name}
            description={code}
          />
        </Col>
        <Col>
          <Button type="link" onClick={() => onDetail(code)}>
            More
            <CaretRightFilled />
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export { CardBoat }