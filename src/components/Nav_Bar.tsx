"use client";

import { client } from "@/lib/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
const NavBar = () => {
  const account = useActiveAccount();

  return (
    <div className="flex w-full item-center justify-center fixed bg-transparent backdrop-blur-[5px] z-10">
      <nav className="flex w-[98%] ite-center justify-between max-w-[1260px] bg-transparent px-8 py-5">
        <div className="flex flex-row item-center gap-3 transition ease-in-out delay-150">
          <Link href="/" className="flex flex-row item-center gap-3 hover:opacity-80">
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className="flex flex-row items-center gap-6 ml-3">
            <Link href="/buy" className="text-white opacity-70 hover:opacity-100 transition ease-in-out delay-150">
              Buy
            </Link>
            <Link href="/sell" className="text-white opacity-70 hover:opacity-100 transition ease-in-out delay-250">
              Sell
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Next.js Thirdweb Example",
                url: process.env.NEXT_PUBLIC_APP_URL,
              }}
            />
          </div>
          {account?.address && (
            <Link className="text-white opacity-70 hover:opacity-100 transition ease-in-out delay-250" href={`/profile/${account?.address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar
