import clsx from "clsx";
import React from "react";

interface fieldProps {
  classContainer: string;
  classInputWrapper: string;
  classInputType: string;
  children: React.ReactNode
}

export default function FieldsetWrapper(
  { classContainer, classInputType, classInputWrapper, children }: fieldProps,
) {
  return (
    <fieldset className={classContainer}>
      <div className={clsx(classInputWrapper, classInputType)}>{children}</div>
    </fieldset>
  );
}
