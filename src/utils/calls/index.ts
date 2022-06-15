import BigNumber from "bignumber.js";
import type { CallSignerType } from "../../types";
import { getGoldCoinContract } from "../contractHelpers";
import { BIG_TEN } from "../bigNumber";

export const claimAirdrop = async (signer: CallSignerType) => {
  const contract = getGoldCoinContract(signer);
  const value = new BigNumber("0.001").times(BIG_TEN.pow(18)).toJSON();
  const tx = await contract.claimAirdrop(value);
  const receipt = await tx.wait();
  return receipt.status;
};

export const buyGoldCoin = async (amount: string, ref: string, signer: CallSignerType) => {
  const contract = getGoldCoinContract(signer);
  const value = new BigNumber(amount).times(BIG_TEN.pow(18)).toJSON();
  const tx = await contract.buyGoldenCoin(value, ref);
  const receipt = await tx.wait();
  return receipt.status;
};
