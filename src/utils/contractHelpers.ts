import { ethers } from "ethers";
import { getGoldenCoinContractAddress } from "./addressHelpers";
import avaxTreeContractAbi from "../config/abi/goldenCoin.json";
import { simpleRpcProvider } from "./providers";
import { CallSignerType } from "../types";

export const getContract = (abi: any, address: string, signer?: CallSignerType | undefined) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getGoldCoinContract = (signer?: CallSignerType) => {
  return getContract(avaxTreeContractAbi, getGoldenCoinContractAddress(), signer);
};
