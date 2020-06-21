import styled, { css } from 'styled-components'
import { circle } from "utils/mixin" 

// 类似于CSS预处理器中的Mixin，用于复用CSS代码片段
const circleMixinFunc = (color, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;

  ${circle(color, size)}
`

// 最外层包裹
const StyledAvatar = styled.div`
  position: relative;
`

// 状态图标
const StateIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({ size }) => circleMixinFunc("white", size)}

    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
      if (status === "online") {
        return circleMixinFunc(theme.green, size)
      } else if (status === "offline") {
        return circleMixinFunc(theme.gray, size)
      }
    }}
  }
`

// 头像包裹层
const AvatarClip = styled.div`
  width: ${ ({ size }) => size };
  height: ${ ({ size }) => size };
  border-radius: 50%;
  overflow: hidden;
`

// 头像图片
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default StyledAvatar

export { StateIcon, AvatarClip, AvatarImage }