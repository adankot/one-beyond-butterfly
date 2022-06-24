import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import './StatusBar.css'
import classNames from "classnames";

export const StatusBar = (props) => {
  const maxStatus = 10;

  if(props.currentStatus > 10) {
    return null;
  }

  return <div>
    <ProgressBar
      className='progress-bar'
      barContainerClassName='bar-container'
      completedClassName={classNames(props.type)}
      labelClassName="label"
      completed={props.currentStatus * 10}
      isLabelVisible={false}
      maxCompleted={maxStatus}>
  </ProgressBar>
  </div>;
};
