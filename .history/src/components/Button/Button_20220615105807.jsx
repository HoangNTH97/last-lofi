import React from 'react';
import { Link } from 'react-router-dom';

import 'Button.scss';

function Button({
  to,
  href,
  children,
  outLine,
  primary,
  disabled = false,
  text = false,
  className,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps, // này để sử dụng  1 số prop mà ta truyền thêm
  }; // tạo 1 cái props để sử dụng nội bộ, ta truyền các props ở ngoài vào và truyền prop xuống dưới (...props)

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link; // nếu xài to ở đây sẽ là Link nội bộ nên sẽ chuyển đến các trang nội bộ
  } else if (href) {
    props.href = href;
    Comp = 'a'; // dùng href sẽ chuyển được đến các trang bên ngoài
  }
  // nếu có các thuộc tính này thì nó sẽ tự động chuyển thành thẻ tương ứng

  const classes = `wrapper ${disabled} ${outLine} ${primary} ${text}`;

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="icon">{leftIcon}</span>}
      <span className="title">{children}</span>
      {rightIcon && <span className="icon">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
