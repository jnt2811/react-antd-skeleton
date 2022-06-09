import { Col, Typography, Row } from "antd";
import style from "../tncg.module.less";
import { avaliable } from "../../../assets/imgs";
import i18n, { languageKeys } from "../../../i18n";
function Avalaible() {
  return (
    <>
      <div className="site-layout-content">
        <Row>
          <Col span={8}>
            <img src={avaliable} alt={"Call-center"} />
          </Col>
          <Col span={16}>
            <div className={style.contentDefault}>
              <div className={style.contentDefaultTitle}>
                <Typography.Title
                  level={2}
                  style={{ color: "#2C3782", marginBottom: "0.5rem" }}
                >
                  CRM-Call Center
                </Typography.Title>
                <Typography.Text
                  style={{ color: "#2C3782", marginBottom: "0.5rem" }}
                >
                  {i18n.t(languageKeys.txt_chua_co_cuoc_goi)}. <br /> 
                  {i18n.t(languageKeys.txt_thuc_hien_cuoc_goi)}!
                </Typography.Text>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Avalaible;
