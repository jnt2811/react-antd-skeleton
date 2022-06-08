import i18n, { languageKeys } from "../../i18n";
import style from "./tncg.module.less";

import React, { useState } from "react";
import { Button, Modal } from "antd";

import { CallingChapNhan } from "../../assets/svgs";


import { PicInTiepNhan, ProfilePic } from "../../assets/imgs";

import { ChonHoSo } from "./chonHoSo/ChonHoSo";

export const TiepNhanCuocGoi = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [noCall, setNoCall] = useState(true);
  const [Calling, setCalling] = useState(true);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setNoCall(!noCall);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={style["container"]}>
      <div className={style["title"]}>
        {" "}
        <p>{i18n.t(languageKeys.menu_Tiep_nhan_cuoc_goi)}</p>
      </div>

      <Button type="primary" onClick={showModal}>
        No call change button
      </Button>

      <Modal
        title="Cuộc gọi đến"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={style["modalWrap"]}
        okText={
          <div className={style["modalChapNhan"]}>
            <CallingChapNhan />
            <div>Chấp nhận</div>
          </div>
        }
        closable={false}
        cancelText="Từ chối"
      >
        <div className={style["callingWrap"]}>
          <img src={ProfilePic} alt="" />
          <div className={style["profileText"]}>
            <div>0832230555</div>
          </div>
        </div>
      </Modal>

      {noCall === true ? (
        <div className={style["noCallDiv"]}>
          <div className={style["picNoCall"]}>
            <img src={PicInTiepNhan} alt="" />
          </div>
          <div className={style["noCallDivTextwrap"]}>
            <div className={style["noCallDivTitle"]}>CRM - Call Center</div>
            <div className={style["noCallDivText"]}>
              Bạn chưa có cuộc gọi nào đang diễn ra. Vui lòng thực hiện cuộc
              gọi!
            </div>
          </div>
        </div>
      ) : noCall === false && Calling === true ? (
        <div>
          <ChonHoSo />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
