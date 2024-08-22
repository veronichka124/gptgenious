import MemberProfile from "./MemberProfile";
import NavLinks from "./NavLinks";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <>
      <SidebarHeader />
      <NavLinks />
      <div className="fixed bottom-6">
        <MemberProfile />
      </div>
    </>
  );
};

export default Sidebar;
