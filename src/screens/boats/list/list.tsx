import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import { useEffect, useState } from "react";
import { listBoats } from "../../../services/boats.service";

import { BoatPreview } from "~metadata/boats.model";

import { CardBoatList } from "../../card-boat-list/card-boat-list";
import { CardHeader } from "../card-header";

import EmptyReviewImage from "./empty-review.png";
import EmptyBoatsImage from "./empty-boats.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/header/header";
import { ListContainer } from "./styles";

const BoatsList = () => {
  const [pendingBoats, setPendingBoats] = useState<BoatPreview[]>();
  const [registeredBoats, setRegisteredBoats] = useState<BoatPreview[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [reload, setReload] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!reload) {
      return;
    }
    setPendingBoats([]);
    setRegisteredBoats([]);

    setLoading(true);
    listBoats()
      .then((response) => {
        const [pending, registered] = response.list.reduce(([pend, reg]: BoatPreview[][], boat) => {
          return boat.status === 'PENDING_REVIEW' ? [[...pend, boat], reg] : [pend, [...reg, boat]];
        }, [[], []]);

        setPendingBoats(pending);
        setRegisteredBoats(registered);
        console.log(response);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
        setReload(false);
      });
  }, [reload])

  return (
    <>
      <Header />
      <ListContainer>
        <h1>My fleet</h1>
        <section>
          <Col flex="auto">
            <Button size="large" icon={<PlusOutlined />} onClick={() => navigate('/new')}>
              Add boat
            </Button>
          </Col>
          <Col>
            <SearchOutlined className="search-icon" onClick={() => setReload(true)} />
          </Col>
        </section>

        <CardHeader title="Pending review" totalItems={pendingBoats?.length} />
        <CardBoatList boats={pendingBoats} loading={loading} emptyDescription="No boats to review" emptyImage={EmptyReviewImage} />

        <CardHeader title="Registered" totalItems={registeredBoats?.length} />
        <CardBoatList boats={registeredBoats} loading={loading} emptyDescription="No boats registered" emptyImage={EmptyBoatsImage} />
      </ListContainer >
    </>
  )
}

export default BoatsList;