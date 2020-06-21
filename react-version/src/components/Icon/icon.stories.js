import React from "react";
import Icon from ".";
import {ReactComponent as SmileIcon} from "assets/icon/smile.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon}></Icon>;

export const CustomColor = () => <Icon icon={SmileIcon} color="#ccc" />;

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} color="#ccc" />;

export const FontAwesome = () => <FontAwesomeIcon icon={faCommentDots} />

export const FontAwesomeColor = () => <FontAwesomeIcon icon={faCommentDots} color="#ccc" />

export const FontAwesomeSize = () => <FontAwesomeIcon icon={faCommentDots} style={{fontSize: "48px"}} />


