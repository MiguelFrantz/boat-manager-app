import { Col, Empty, Row, Skeleton } from "antd";
import { BoatPreview } from "~metadata/boats.model";
import { CardBoat } from "../card-boat/card-boat";
import { useNavigate } from "react-router-dom";

interface Props {
  boats?: BoatPreview[];
  loading: boolean;
  emptyDescription: string;
  emptyImage: string;
}

const CardBoatList = ({ boats, loading, emptyDescription, emptyImage }: Props) => {
  const navigate = useNavigate();

  if (!loading && (!boats || !boats.length)) {
    return <Empty image={emptyImage} description={emptyDescription} />;
  }

  return (
    <Row gutter={16}>
      <Skeleton loading={loading} avatar active />
      {
        boats?.map((boat =>
          <Col span={24} key={boat.code}>
            <CardBoat {...boat} loading={loading} onDetail={(codeBoat) => navigate(`/${codeBoat}`)} />
          </Col>
        ))
      }
    </Row>
  );
}

export { CardBoatList }