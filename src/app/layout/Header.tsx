import IconsHeader from "../components/header/icons/IconsHeader";
import Logo from "../components/header/logo/Logo";
import NavigationLink from "../components/header/navigationLink/NavigationLink";

export default function Header() {
  return (
    <header className="bg-gray-50 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <IconsHeader />
        <NavigationLink />
      <Logo/>
      </div>
    </header>
  );
}
