'use client'

import { useMediaQuery } from '@mui/material';
import {JSX} from 'react'

export interface LogoProps {
  def: string;
  tablet: string;
  mobile: string;
}

export default function Logo({def, tablet, mobile}: LogoProps) {
  let logo: string = def;
  let isMobile = useMediaQuery('(width <=425px)')
  let isTablet = useMediaQuery('(width <=600px)')

  try {
    if (isMobile) logo = mobile
    else if (isTablet) logo = tablet
  } catch (error) {
    console.error("Error detecting device type:", error);
  }

  return <img src={logo} alt="logo" title="logo" />;
}
