import ThemeToggle from "../components/darkMode/ThemeToggle";
import Logo from "../components/header/logo/Logo";
import InputSearch from "../components/header/search/InputSearch";
import NavigationLink from "../components/header/navigationLink/NavigationLink";
import IconsHeader from "../components/header/icons/IconsHeader";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
        <Logo />
        <InputSearch />
        <ThemeToggle />
        <IconsHeader />
        <NavigationLink />
      </div>
    </header>
  );
}
