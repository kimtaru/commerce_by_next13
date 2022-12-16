import {
  HomeIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BottomNavigation = () => {
  return (
    <div className="tw-border-y tw-items-center tw-border-gray-300 tw-border-solid tw-h-12 tw-bg-zinc-200 tw-z-50 tw-fixed tw-bottom-0 tw-w-full tw-max-w-lg">
      <div className="tw-flex tw-justify-between tw-items-center tw-px-6">
        <Link
          href="/"
          className="tw-w-1/4 tw-flex tw-justify-center tw-items-center"
        >
          <HomeIcon className="tw-w-7 tw-h-12 tw-text-black" />
        </Link>

        <Link
          href="/categories"
          className="tw-w-1/4 tw-flex tw-justify-center tw-items-center"
        >
          <Bars3Icon className="tw-w-7 tw-h-12 tw-text-black" />
        </Link>

        <a className="tw-w-1/4 tw-flex tw-justify-center tw-items-center">
          <MagnifyingGlassIcon className="tw-w-7 tw-h-12 tw-text-black" />
        </a>
        <a className="tw-w-1/4 tw-flex tw-justify-center tw-items-center">
          <UserIcon className="tw-w-7 tw-h-12 tw-text-black" />
        </a>
      </div>
    </div>
  );
};

export default BottomNavigation;
