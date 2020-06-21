import React from "react";
import Avatar from ".";

import face1 from "assets/images/face1.jpg";
import face2 from "assets/images/face2.jpg";
import face3 from "assets/images/face3.jpg";
import face4 from "assets/images/loading.gif";

export default {
  title: "UI 组件/Avatar",
  components: Avatar,
};

// 默认状态展示
export const Default = () => {
  return <Avatar src={face1} />;
};

// 不同大小展示
export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar src={face1} size="48px" />
      <Avatar src={face2} size="56px" />
      <Avatar src={face3} size="64px" />
      <Avatar src={face4} size="72px" />
    </div>
  );
};

// 不同登录状态展示
export const WithStatus = () => {
  return (
    <div className="row-elements">
      <Avatar src={face1} status="online" />
      <Avatar src={face2} status="offline" />
      <Avatar src={face3} status="offline" size="72px" statusIconSize="12px" />
    </div>
  );
};
