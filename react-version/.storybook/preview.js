import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

// 可以导入外部CSS，来对组件预览的页面进行美化
import "story.css";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

addParameters({
  options: {
    showRoots: true,
  },
});
