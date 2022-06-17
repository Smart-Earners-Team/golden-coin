import BigNumber from "bignumber.js";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import Button from "../components/Buttons/Button";
import ConnectWalletButton from "../components/Buttons/ConnectWalletButton";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Section from "../components/layouts/Section";
import SEO from "../components/SEO";
import CopyToClipboard from "../components/Tools/copyToClipboard";
import CountDownTimer from "../components/Tools/CountDownTimer";
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import { useAppContext } from "../hooks/useAppContext";
import useToast from "../hooks/useToast";
import { buyGoldCoin, claimAirdrop } from "../utils/calls";
import { getGoldCoinContract } from "../utils/contractHelpers";
import cls from "classnames";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const [fetching, setFetching] = useState(false);
  const [airdropClaimed, setAirdropClaimed] = useState(false);
  const {
    refAddress,
    triggerFetchTokens,
    wallet: { balance },
  } = useAppContext();
  const { active, account, library } = useActiveWeb3React();
  const { toastSuccess, toastError } = useToast();
  const [errorMsg, setErrorMsg] = useState("");
  const [amountToPay, setAmountToPay] = useState("");

  useEffect(() => {
    (async () => {
      if (account) {
        const contract = getGoldCoinContract();
        try {
          const result = await contract.hasClaimedAirdrop(account);
          setAirdropClaimed(result);
        } catch (err) {
          // console.error(err);
          setAirdropClaimed(false);
        }
      } else {
        setAirdropClaimed(false);
      }
    })();
  });

  const handleClaimAirdrop = useCallback(async () => {
    if (library) {
      setFetching(true);
      try {
        await claimAirdrop(library.getSigner());
        toastSuccess("You have claimed your GCOIN.");
        triggerFetchTokens();
      } catch (err) {
        console.error(err);
        toastError("Error", "Something went wrong while trying to perform the transaction.");
      } finally {
        setFetching(false);
      }
    }
  }, [library]);

  const handleBuyGoldCoin = useCallback(async () => {
    if (library) {
      setFetching(true);
      try {
        await buyGoldCoin(amountToPay, refAddress, library.getSigner());
        toastSuccess("You have claimed your GCOIN.");
        triggerFetchTokens();
      } catch (err) {
        console.error(err);
        toastError("Error", "Something went wrong while trying to perform the transaction.");
      } finally {
        setFetching(false);
      }
    }
  }, [library, refAddress]);

  const handleInputChange: React.FormEventHandler<HTMLInputElement> = useCallback(
    async (e) => {
      const val = e.currentTarget.value.replace(/,/g, ".");
      const pattern = /^[0-9]*[.,]?[0-9]{0,18}$/g;
      if (!pattern.test(val)) return;

      const amount = new BigNumber(val);
      const bal = new BigNumber(balance);
      if (amount.isGreaterThan(bal)) {
        setErrorMsg("Insufficient funds in your wallet");
      } else {
        setErrorMsg("");
      }
      setAmountToPay(val);
    },
    [balance],
  );

  return (
    <div className="flex flex-col">
      <Section className="w-full">
        <Navbar />
      </Section>
      <main className="w-full">
        <SEO
          title="GOLDEN COIN"
          description="Is a decentralized peer to peer  digital currency just like Bitcoin. It's a new medium of exchange for goods and services. You can use Gcoin to pay for products and services within and outside G-CONNECT ecosystem."
          slug="/"
        />
        <Section padding className="space-y-8 relative">
          <div className="absolute top-40 md:top-1/2 -translate-y-1/2 right-0 w-56 md:w-1/3 max-w-md opacity-40">
            <StaticImage alt="" src="../images/bg-gcoin-logo.png" placeholder="blurred" />
          </div>
          <h1 className="max-w-xl relative">Golden Coin, The New generation platform.</h1>
          <p className="max-w-2xl relative">
            Golden Coin is the most unique project at the worldwide market of NFT investment with the first crypto
            ecosystem or a community with digital currency for everyday people and for every transaction globally on
            Blockchain promoting goodness, promoting love, unity, oneness, peace and equitable distribution of wealth.
            Our native currency is called Golden Coin (GCOIN) and will be used to transact within the ecosystem, across
            the community globally. Golden Coin (GCOIN) is an ideal Crypto Currency For African and Global Everyday
            Transactions that includes possibilities to combine investments and tokens.
          </p>
        </Section>
        <Section
          padding
          containerClass="px-4"
          className="bg-[#191039]/90 w-full flex flex-col md:flex-row rounded md:justify-between !max-w-4xl"
        >
          <div>
            <h2 className="uppercase text-white">Tokenomics</h2>
            <ol className="list-decimal list-inside pl-3 space-y-1 text-base">
              <li>Total supply = 500,000</li>
              <li>Private Sale = 5%</li>
              <li>Pre-sale = 25%</li>
              <li>Liquidity = 30% (to be locked for 3 years)</li>
              <li>Marketing and partnerships/advisory = 10%</li>
              <li>Charity = 10%</li>
              <li>Products development = 10%</li>
              <li>Airdrops = 5%</li>
              <li>Referral rewards = 5%</li>
              <li>Buy back = 5%</li>
              <li>Charity = 5%</li>
            </ol>
          </div>
          <div>
            <h2 className="uppercase text-white">Benefits</h2>
            <ol className="list-decimal list-inside pl-3 space-y-1 text-base">
              <li>Referral Count is Unlimited</li>
              <li>10% BUSD Per Referral</li>
            </ol>
          </div>
        </Section>
        <Section padding className="text-center space-y-5 relative">
          <div className="absolute top-40 left-0 w-56 opacity-40">
            <StaticImage alt="" src="../images/bg-gcoin-logo.png" placeholder="blurred" />
          </div>
          <h2 className="text-5xl relative">Pre-sale &amp; Airdrop</h2>
          <h3 className="text-3xl text-white relative">Join Presale and Claim free Airdrops.</h3>
          <div className="space-y-5 relative">
            <p className="text-[#FF61B6] font-bold">Presale Ends Feb 10th, 2022.</p>
            <p className="max-w-lg mx-auto">
              100,000 GCOIN available only. BUY and CLAIM 1 GCOIN airdrop, refer and earn 10% referral bonus in BUSD.
            </p>
            <div className="bg-[#191039] p-5 max-w-sm space-y-3 mx-auto rounded">
              <CountDownTimer timestamp={1656629940} handleDisableButton={() => {}} />
              {active && !airdropClaimed && (
                <Fragment>
                  <Button onClick={handleClaimAirdrop} loading={fetching} disabled={fetching}>
                    Claim Airdrop
                  </Button>
                  <p className="text-sm">Cost 0.001 BNB to get 9000 GCOIN</p>
                </Fragment>
              )}
              {active && airdropClaimed && (
                <TextInput
                  errorMsg={errorMsg}
                  onChangeHandler={handleInputChange}
                  value={amountToPay}
                  onSubmit={handleBuyGoldCoin}
                  trx={fetching}
                  isDisabled={fetching || errorMsg.length > 0 || Number.isNaN(Number.parseFloat(amountToPay))}
                />
              )}
              {!active && (
                <Fragment>
                  <ConnectWalletButton />
                  <p className="text-sm">Connect your wallet.</p>
                </Fragment>
              )}
            </div>
          </div>
        </Section>
        <Section padding className="space-y-5 relative text-center">
          <div className="absolute top-0 right-0 w-56 opacity-40">
            <StaticImage alt="" src="../images/bg-gcoin-logo.png" placeholder="blurred" />
          </div>
          <h2 className="relative">The Referral Programe</h2>
          <p className="relative">
            Share your referral link or get commission for referred token purchases instantly to your wallet.
          </p>
          <div className="bg-[#191039] p-5 relative rounded">
            <CopyToClipboard
              canCopy={active && account != null}
              content={`https://www.goldencoinweb.com/?ref=${account}`}
            />
          </div>
        </Section>
        <Section padding className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h2>Contract Address</h2>
            <p className="break-words">0xf47D10f3f6683F71dc42DBBAf8223F49612f1d89</p>
          </div>
          <div>
            <h2>Beyond The Moon</h2>
            <ul className="list-disc list-inside pl-2">
              <li>Pancakeswap listing 1 GCOIN = 0.6USD</li>
              <li>Presale 1 GCOIN = 0.5 BUSD</li>
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

interface TextInputProps {
  errorMsg: string;
  onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  value: string;
  isDisabled: boolean;
  trx: boolean; // transaction
}

const TextInput = ({ onChangeHandler, onSubmit, errorMsg, value, isDisabled, trx }: TextInputProps) => {
  const hasError = errorMsg.length > 0;
  const {
    wallet: { balance },
  } = useAppContext();
  return (
    <div className="w-full space-y-2 mx-auto">
      <div className="p-3 rounded-lg transition-transform duration-200 ease-linear">
        <div>
          <div className="mb-2 text-xs font-light text-left">Amount</div>
          <div className="relative flex items-center justify-between space-x-1">
            <div className=" w-full">
              <input
                type="text"
                className={cls(
                  "placeholder-gray-400 outline-none border-b border-[#7B8BA5] font-medium",
                  "transition-all duration-200 text-gray-300 p-2 disabled:opacity-70 text-xl",
                  "disabled:cursor-not-allowed block bg-transparent w-full leading-none",
                  "bg-primary/20 rounded",
                  {
                    "text-red-400": hasError,
                  },
                )}
                placeholder="0"
                value={value}
                onChange={onChangeHandler}
              />
              <div
                className={cls("flex justify-between text-opacity-80 py-0.5 px-1 text-xs", {
                  "text-red-400 font-normal": hasError,
                })}
              >
                <span>BUSD Bal.</span>
                <span>{hasError ? errorMsg : balance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onSubmit} className="block mx-auto w-full" disabled={isDisabled} loading={trx}>
        Buy Gold Coin
      </Button>
    </div>
  );
};

export default IndexPage;
