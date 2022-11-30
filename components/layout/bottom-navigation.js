import {
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className="border-y items-center border-gray-300 border-solid h-12 bg-zinc-200 z-50 fixed bottom-0 w-full">
      <div className="flex justify-between items-center px-6">
        <Link href="/" legacyBehavior>
          <a className="w-1/4 flex justify-center items-center">
            <HomeIcon className="w-9 h-12" />
          </a>
        </Link>
        <a className="w-1/4 flex justify-center items-center">
          <Bars3Icon className="w-9 h-12" />
        </a>
        <a className="w-1/4 flex justify-center items-center">
          <MagnifyingGlassIcon className="w-9 h-12" />
        </a>
        <a className="w-1/4 flex justify-center items-center">
          <UserIcon className="w-9 h-12" />
        </a>
      </div>
    </div>
  );
};

export default BottomNavigation;
