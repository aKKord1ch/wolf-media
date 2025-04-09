import { getDeviceType } from "@/common/helpers";

export default async function Logo() {
  let logo: string = "header/WolfMEdia.svg";

  if (await getDeviceType() === "desktop") {
    logo = "header/WolfMEdia.svg";
  } else if (await getDeviceType() === "tablet") {
    logo = "header/logo600.svg";
  } else {
    logo = "header/WolfMEdia.svg";
  }

  return <img src={logo} alt="logo" title="logo" />;
}
