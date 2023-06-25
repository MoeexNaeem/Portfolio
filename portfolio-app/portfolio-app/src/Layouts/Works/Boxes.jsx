/* eslint-disable no-unused-vars */
import React from "react";
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import BarChartIcon from '@mui/icons-material/BarChart';

const Boxes = () => {
  return (
    <>
      <div className="my-5 card-container">
        <div className="cards">
        <div className="containeres">
           <BrushIcon className="icon_design i"/>
          <span className="my-3 icon_heading">UI/UX Design</span>
        </div>
        </div>
        <div className="cards">
        <div className="containeres">
           <DevicesIcon className="icon_design i"/>
          <span className="my-3 icon_heading">Web Design</span>
        </div>
        </div>
        <div className="cards">
        <div className="containeres">
           <DataObjectIcon className="icon_design i"/>
          <span className="my-3 icon_heading">React Js</span>
        </div>
        </div>
        <div className="cards">
        <div className="containeres">
           <BarChartIcon className="icon_design i"/>
          <span className="my-3 icon_heading">SEO</span>
        </div>
        </div>  
      </div>
    </>
  );
};

export default Boxes;
