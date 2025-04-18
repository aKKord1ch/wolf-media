"use client";

import { useMediaQuery } from "@mui/material";
import Image from "next/image";

export interface LogoProps {
  def: string;
  tablet: string;
  mobile: string;
}

export default function Logo({ def, tablet, mobile }: LogoProps) {
  let logo: string = def;
  let isMobile = useMediaQuery("(width <=425px)");
  let isTablet = useMediaQuery("(width <=600px)");

  let width: number = 208;
  let height: number = 51;

  if (isMobile) {
    width = 51;
    logo = mobile;
  } else if (isTablet) {
    width = 208;
    logo = tablet;
  }

  return (
    <Image width={width} height={height} src={logo} alt="logo" title="logo" />
  );
}
