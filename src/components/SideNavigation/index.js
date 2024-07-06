import "./index.css";
import "@spectrum-web-components/sidenav/sp-sidenav.js";
import "@spectrum-web-components/sidenav/sp-sidenav-heading.js";
import "@spectrum-web-components/sidenav/sp-sidenav-item.js";
import { IoMdHome } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const SideNavigation = () => {
  return (
    <sp-sidenav style={{ width: "100%" }}>
      <sp-sidenav-item
        value="Section Title 1"
        label="Home"
        href="/"
        className="home"
      >
        <IoMdHome slot="icon" className="nav-icon" />
      </sp-sidenav-item>
      <sp-sidenav-item value="Section Title 2" label="Dashboard">
        <PiDotsNineBold slot="icon" className="nav-icon" />
      </sp-sidenav-item>

      <sp-sidenav-heading label="Services" className="heading-style">
        <sp-sidenav-item
          value="Section 3"
          label="Airports"
          href="/airports"
        ></sp-sidenav-item>
        <sp-sidenav-item value="Section 4" label="Videos"></sp-sidenav-item>
      </sp-sidenav-heading>

      <sp-sidenav-heading label="Others">
        <sp-sidenav-item value="Section 5" label="List-1"></sp-sidenav-item>
        <sp-sidenav-item value="Section 6" label="List-2"></sp-sidenav-item>
      </sp-sidenav-heading>
    </sp-sidenav>
  );
};

export default SideNavigation;
