import clsx from "clsx";
import css from "./index.module.css";
import React, { useState } from "react";
import handleClickOutside from "./lib/handleClickOutside";
import schema, { FormData } from "./assets/schema";
import DefaultInput from "./ui/DefaultInput";
import { ButtonSubmit } from "./ui/ButtonSubmit";
import FieldsetWrapper from "./ui/FieldsetWrapper";
import PhoneInput from "./ui/PhoneInput";
import AsideList from "./assets/asideList";

export {
   clsx,
   css,
   React,
   useState,
   handleClickOutside,
   schema,
   DefaultInput,
   ButtonSubmit,
   FieldsetWrapper,
   PhoneInput,
   AsideList
}

export type {
   FormData
}