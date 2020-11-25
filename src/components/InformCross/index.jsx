import React from "react";

const InformCross = ({item}) => {
  return (
    <>
      <div>
        <div>{item.ovrpsNm}</div>
        <div>{item.rdnmadr}</div>
        <div>{item.handicapCvntlType}</div>
      </div>
      <div>star:{item.star_num}</div>
    </>
  );
};

export default InformCross;