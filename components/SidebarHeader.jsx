import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="flex justify-between px-8 py-8">
      <h2>GPDGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
