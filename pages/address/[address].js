import { Col, Row } from "antd";
import BlockContainer from "Components/BlockContainer";
import "./style.scss";

const AddressDetail = ({ address }) => {
  return (
    <div className="address-detail-container">
      <Row
        gutter={50}
        justify="center"
        className="ML25 MR25"
        style={{ width: "100%" }}
      >
        <Col xs={22} md={16}>
          <BlockContainer
            header={{
              left: () => "Transaction Detail",
            }}
            className="MT30 MB30"
          />
        </Col>
      </Row>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: { address: query.address },
  };
};
export default AddressDetail;
