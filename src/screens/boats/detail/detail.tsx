import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { BoatModel } from "~metadata/boats.model";
import { getBoat } from "../../../services/boats.service";
import { Col, Input, Row, Skeleton, notification } from "antd";
import { Header } from "../../../components/header/header";
import { DetailContainer } from "./styles";
import { DetailOption } from "../../detail-options/detail-options";

const Detail = () => {
  const navigate = useNavigate();
  let { boatId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [boat, setBoat] = useState<BoatModel>();
  const [readonly, setReadonly] = useState<boolean>(true);

  useEffect(() => {
    if (!boatId) {
      navigate('/');
      return;
    }

    if (boatId === 'new') {
      setReadonly(false)
      return;
    }

    setLoading(true)
    getBoat(boatId)
      .then((response) => {
        setBoat(response)
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => setLoading(false))
  }, [boatId, navigate])

  const handleSubmit = () => {
    notification.success({
      message: `Boat "${'1'}" was sended to revision and will be available soon.`
    });
    navigate('/');
  }
  const handleEdit = () => {
    setReadonly(false);
  }

  const handleDelete = () => {
    notification.success({
      message: `Boat "${'1'}" deleted`
    });
    navigate('/');
  }

  return (
    <>
      <Header showBackButton onBackButtonClick={() => navigate('/')} />
      <DetailContainer>
        <h2>Boat details</h2>
        {
          (!boat && loading)
            ? <Skeleton />
            : <form onSubmit={handleSubmit}>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <label htmlFor="city">Name</label>
                  {
                    readonly
                      ? <p>{boat?.name}</p>
                      : <Input name="name" />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="city">City</label>
                  {
                    readonly
                      ? <p>{boat?.city}</p>
                      : <Input name="city" />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="address">Address</label>
                  {
                    readonly
                      ? <p>{boat?.address}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="state">State</label>
                  {
                    readonly
                      ? <p>{boat?.state}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="zip">ZIP</label>
                  {
                    readonly
                      ? <p>{boat?.zip}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="category">Category</label>
                  {
                    readonly
                      ? <p>{boat?.category}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="engines">Engines</label>
                  {
                    readonly
                      ? <p>{boat?.engines}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="horsepower">Horse power</label>
                  {
                    readonly
                      ? <p>{boat?.horsepower}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="length">Length</label>
                  {
                    readonly
                      ? <p>{boat?.length}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="boatMake">Boat make</label>
                  {
                    readonly
                      ? <p>{boat?.boatMake}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="passengers">Passengers</label>
                  {
                    readonly
                      ? <p>{boat?.passengers}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="value">Value</label>
                  {
                    readonly
                      ? <p>{boat?.value}</p>
                      : <Input />
                  }
                </Col>
                <Col xs={24} sm={12}>
                  <label htmlFor="year">Year</label>
                  {
                    readonly
                      ? <p>{boat?.year}</p>
                      : <Input />
                  }
                </Col>
              </Row>
            </form>
        }

      </DetailContainer>
      <DetailOption newBoat={boatId === 'new'} readonly={readonly} onSave={handleSubmit} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  )
}

export default Detail;