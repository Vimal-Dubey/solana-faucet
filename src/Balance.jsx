import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowSolBalance() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      if (wallet.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      } else {
        setBalance(null); // Clear balance if wallet is not connected
      }
    };

    getBalance();
  }, [connection, wallet.publicKey]); // Dependency array to run effect when connection or public key changes

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <p className="text-lg font-semibold">SOL Balance:</p>
      <div className="text-gray-700 text-2xl font-bold">
        {balance !== null ? balance.toFixed(2) : "Please connect your wallet."}
      </div>
    </div>
  );
}
