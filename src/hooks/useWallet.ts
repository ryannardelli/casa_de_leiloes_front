import { useContext } from "react";
import { WalletContext } from "../providers/WalletProvider/WalletContext";

export function useWallet() {
    return useContext(WalletContext)
}