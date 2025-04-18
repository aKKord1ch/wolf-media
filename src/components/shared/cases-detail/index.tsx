import decodeString from "@/helpers/decodeString";
import React, { useState } from "react";
import css from "./index.module.css";
import clsx from "clsx";
import Image from "next/image";

interface DetailItenProps {
  data: any;
  index: number;
  className?: string;
}

export default function DetailItem({
  data,
  index,
  className,
}: DetailItenProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = data?.poster?.image?.src;
  const imageAlt = data?.poster?.image?.alt || "";
  const imageKey = data?.poster?.image?.current || `img-${index}`;

  return (
    <div
      className={clsx(css.item, className)}
      key={`div-${data.slug}-${index}`}
    >
      <div
        className={clsx(css.img_container, {
          [css.custom_height]: !imageLoaded,
        })}
        style={{
          backgroundColor: imageLoaded ? "transparent" : "var(--color4)",
        }}
        key={`div-${data.slug}-${index}`}
      >
        {imageSrc && (
          <Image
            width={500}
            height={1000}
            src={`${imageSrc}?q=100`}
            alt={imageAlt}
            key={imageKey}
            onLoad={() => setImageLoaded(true)}
          />
        )}
        {!imageLoaded && <div className={css.slide}></div>}
      </div>
      <span className={css.title} key={`title-${data.slug}-${index}`}>
        {decodeString(data.tagsDisplayed)}
      </span>
      <span className={css.sub_title} key={`sub_title-${data.slug}-${index}`}>
        {decodeString(data.title)}
      </span>
    </div>
  );
}
