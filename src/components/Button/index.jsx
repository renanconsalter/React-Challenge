import React from 'react';

import { HostGatorButton } from './index.style';

const Button = ({ color, children }) => <HostGatorButton color={color}>{children}</HostGatorButton>;

export default Button;
