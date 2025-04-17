"use client"

import clsx from "clsx";
import css from "./index.module.css";
import header from "@/components/header/index.module.css";

import { LinkItem } from "../shared/link-item";
import Logo from "../header/ui/logo";
import FooterMobile from "./ui/mobile-section";
import FooterDefault from "./ui/default";
import { useMediaQuery } from "@mui/material";

interface FooterProps {
  className?: string
}

export default function Footer ({className}: FooterProps) {
  const isMobile = useMediaQuery('(width <= 425px)')

  return (
    <footer className={clsx(css.footer, className)}>
      {(!isMobile) && <FooterDefault />}

      {!isMobile && (
        <section className={css.hidden_section}>
          <span>Copyright 2019 (c) All rights reserved.</span>
        </section>
      )}

      {isMobile && <FooterMobile />}
    </footer>
  );
}
