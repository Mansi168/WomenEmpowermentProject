import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const OpenStore = () => {
  return (
    <>
    <Meta title={"Open Store"} />
    <BreadCrumb title="Open Store" />
      <div className='banner'>
        <img src="https://www.dailyneeds247.com/wp-content/uploads/2020/05/seller-banner.png"/>
       </div>
    </>
    
  )
}

export default OpenStore