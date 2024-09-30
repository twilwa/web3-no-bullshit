import { PropsWithChildren } from "react";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

export const DynamicScaffoldProvider = ({ children }: PropsWithChildren) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_API_KEY || "",
        walletConnectors: [EthereumWalletConnectors, ZeroDevSmartWalletConnectors] as any,
      }}
    >
      {children}
    </DynamicContextProvider>
  );
};
