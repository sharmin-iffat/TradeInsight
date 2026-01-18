// import Link from "next/link";
// import Image from "next/image";
// import NavItems from "@/components/NavItems";
// import UserDropdown from "@/components/UserDropdown";
// import {searchStocks} from "@/lib/actions/finnhub.actions";

// const Header = async ({ user }: { user: User }) => {
//     const initialStocks = await searchStocks();

//     return (
//         <header className="sticky top-0 header">
//             <div className="container header-wrapper">
//                 <Link href="/">
//                     <Image src="/assets/icons/logo.png" alt="Signalist logo" width={120} height={32} className="h-16 w-auto cursor-pointer" />
//                 </Link>
//                 <nav className="hidden sm:block">
//                     <NavItems initialStocks={initialStocks} />
//                 </nav>

//                 <UserDropdown user={user} initialStocks={initialStocks} />
//             </div>
//         </header>
//     )
// }
// export default Header

import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();

  return (
    <header className="sticky top-0 header ">
      <div className="container header-wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/logo.png"
            alt="TradeInsight logo"
            width={240}
            height={48}
            className="h-14 w-auto cursor-pointer"
            priority
          />
        </Link>

        <nav className="hidden sm:flex items-center">
          <NavItems initialStocks={initialStocks} />
        </nav>

        <div className="flex items-center">
          <UserDropdown user={user} initialStocks={initialStocks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
