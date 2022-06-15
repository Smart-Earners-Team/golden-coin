import React, { Fragment } from "react";
import Navbar from "../components/layouts/Navbar";
import Section from "../components/layouts/Section";
import SEO from "../components/SEO";
import CopyToClipboard from "../components/Tools/copyToClipboard";
import CountDownTimer from "../components/Tools/CountDownTimer";

const IndexPage = () => {
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
        <Section padding className="space-y-8">
          <h1 className="max-w-xl">Golden Coin, The New generation platform.</h1>
          <p>
            Golden Coin is the most unique project at the worldwide market of NFT investment with the first crypto
            ecosystem or a community with digital currency for everyday people and for every transaction globally on
            Blockchain promoting goodness, promoting love, unity, oneness, peace and equitable distribution of wealth.
            Our native currency is called Golden Coin (GCOIN) and will be used to transact within the ecosystem, across
            the community globally. Golden Coin (GCOIN) is an ideal Crypto Currency For African and Global Everyday
            Transactions that includes possibilities to combine investments and tokens.
          </p>
        </Section>
        <Section padding containerClass="px-4" className="bg-[#191039]/90 px-5">
          <div>
            <h2 className="uppercase text-white">Tokenomics</h2>
            <ol className="list-decimal list-inside pl-3 space-y-1">
              <li>Total supply = 500,000</li>
              <li>Private Sale = 20%</li>
              <li>Pre-sale = 20%</li>
              <li>Liquidity = 30% (to be locked for years)</li>
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
            <ol className="list-decimal list-inside pl-3 space-y-1">
              <li>Referral Count is Unlimited</li>
              <li>10% BUSD Per Referral</li>
            </ol>
          </div>
        </Section>
        <Section padding className="text-center space-y-5">
          <h2 className="text-5xl">Pre-sale &amp; Airdrop</h2>
          <h3 className="text-3xl text-white">Join Presale and Claim free Airdrops.</h3>
          <div className="space-y-5">
            <p className="text-[#FF61B6]">Presale Ends Feb 10th, 2022.</p>
            <p>100,000 GCOIN available only BUY and CLAIM 2% airdrop, refer and earn 2% referral bonus all in GCOIN.</p>
            <div className="bg-[#191039] p-5">
              <CountDownTimer timestamp={10000000} handleDisableButton={() => {}} />
            </div>
          </div>
        </Section>
        <Section padding className="space-y-5">
          <h2>The Referral Programe</h2>
          <p>Share your referral link or get commission for referred token purchases instantly to your wallet.</p>
          <div className="bg-[#191039] p-5">
            <CopyToClipboard content="https://www.goldencoinweb.com/?ref=0xe99a98A77439B049b0B721D4D225bcE77BF79d84" />
          </div>
        </Section>
        <Section padding>
          <h2>Beyond The Moon</h2>
          <ul className="list-disc list-inside pl-2">
            <li>Pancakeswap listing 1 GCOIN = 0.6USD</li>
            <li>Presale 1 GCOIN = 0.5 BUSD</li>
            <li>0.01 BUSD = 90,000 GCOIN</li>
            <li>0.1 BUSD = 900,000 GCOIN</li>
            <li>0.5 BUSD = 4,500,000 GCOIN</li>
            <li>1 BUSD = 9,000,000 GCOIN</li>
            <li>10 BUSD = 90, 000,000 GCOIN</li>
          </ul>
        </Section>
        <Section padding containerClass="w-full">
          <h2>Contract Address</h2>
          <p className="break-words">0x9fe8228563EC4135C8c553f7419C0C1954f990C8</p>
        </Section>
      </main>
    </div>
  );
};

export default IndexPage;
