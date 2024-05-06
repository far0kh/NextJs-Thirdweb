import { client } from "@/lib/client";
import { ConnectButton } from "thirdweb/react";

const Navbar = () => {
  return (
    <nav className="flex justify-end w-full bg-white p-4">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Next.js Thirdweb Example",
          url: process.env.NEXT_PUBLIC_APP_URL,
        }}
      />
    </nav>
  )
}

export default Navbar