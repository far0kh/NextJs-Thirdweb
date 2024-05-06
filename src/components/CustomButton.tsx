"use client";

import { client } from "@/lib/client";
import { useConnect, useActiveWalletConnectionStatus, useActiveWallet, useDisconnect } from "thirdweb/react";
import { createWallet, injectedProvider } from "thirdweb/wallets";

const CustomButton = () => {
  const { connect, isConnecting, error } = useConnect();
  const connectionStatus = useActiveWalletConnectionStatus();
  // const wallets = useActiveWallet();
  const disconnect = () => {
    useDisconnect();
    alert("Disconnected");
  };

  return (
    (connectionStatus === "connected" &&
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => disconnect()}
      >Disconnect</button>
    ) ||
    (isConnecting && "Connecting...") ||
    <button
      onClick={() =>
        connect(async () => {
          const metamask = createWallet("io.metamask"); // pass the wallet id

          // if user has metamask installed, connect to it
          if (injectedProvider("io.metamask")) {
            await metamask.connect({ client });
          }

          // open wallet connect modal so user can scan the QR code and connect
          else {
            await metamask.connect({
              client,
              walletConnect: { showQrModal: true },
            });
          }

          // return the wallet
          return metamask;
        })
      }
    >
      Connect
    </button>
  );
}

export default CustomButton