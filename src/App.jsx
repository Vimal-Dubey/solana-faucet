import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { ShowSolBalance } from './Balance';
import './index.css';

function App() {
   const endpoint ="https://solana-devnet.g.alchemy.com/v2/6dxfxaGayOgV4LnC-6oURvI0DRAoGc_e"; //put your own key here
 
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Solana Faucet (Devnet)</h1>
            <div className="flex space-x-4 mb-4">
              <WalletMultiButton className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" />
              <WalletDisconnectButton className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" />
            </div>
            <Airdrop />
            <ShowSolBalance />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
