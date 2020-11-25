import React from "react";

const InformAddr = ({ item }) => {
  return (
    <>
      <div>
        <div>{item.buldNm}</div>
        <div>{item.address1}</div>
        <div>{item.ratedCap} {item.elvtrKindNm}</div>
        <div>{item.liveLoad}</div>
        <div>{item.elvtrMgtNo1} - {item.elvtrMgtNo2}</div>
      </div>
    </>
  );
};

export default InformAddr