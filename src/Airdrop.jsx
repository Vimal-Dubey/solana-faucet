import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdrop() {
    const amt = document.getElementById("inp_amt").value;
    try {
      await connection.requestAirdrop(wallet.publicKey, amt * 1000000000);
      alert('Airdrop successful!');
    } catch (error) {
      alert('Error sending airdrop:', error);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-md">
      {!wallet.connected ? (
        <p className="text-gray-600">Please connect your wallet.</p>
      ) : (
        <>
          <b className="text-green-600">Connected!</b>
          <br />
          <h2 className="text-lg font-semibold mt-2">Your public key:</h2>
          <span className="text-gray-700">{wallet.publicKey?.toBase58()}</span>
          <div className="mt-4">
            <input
              id="inp_amt"
              type="text"
              placeholder="Amount (in SOL)"
              className="border rounded-lg px-3 py-2 w-full mb-2"
            />
            <button
              onClick={sendAirdrop}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
            >
              Send Airdrop
            </button>
          </div>
        </>
      )}
    </div>
  );
}
