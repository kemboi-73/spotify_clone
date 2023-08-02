import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://www.facebook.com/photo/?fbid=1340255516918159&set=a.273728876904167&__cft__[0]=AZV8kjYZ50IUqsMAoFlY0hbqInslvAlzqYucTaIgE38yUHEhxNYUYBQeiYmA5O0PjZXFJxHZXScT7hbeJkPKTlZkkxBXxKYotHhaCXdmDkWeBg&__tn__=EH-R"
        alt="Kemboi"
      />
      <SidebarOption Icon={HomeIcon} option="Home" />

      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
