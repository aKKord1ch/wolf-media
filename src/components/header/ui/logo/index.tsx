'use client'

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

export interface LogoProps {
  def: string;
  tablet: string;
  mobile: string;
}

export default function Logo({def, tablet, mobile}: LogoProps) {
  let logo: string = def;
  let isMobile = useMediaQuery('(width <=425px)')
  let isTablet = useMediaQuery('(width <=600px)')

  let width: number = 100
  let height: number = 50

  try {
    if (isMobile) logo = mobile
    else if (isTablet) logo = tablet
  } catch (error) {
    console.error("Error detecting device type:", error);
  }

  return <Image width={width} height={height} src={logo} alt="logo" title="logo" />;
}
