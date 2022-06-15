import React from "react";
import ttebLogo from "../../images/tteb-logo.png";
import SiteLogo from "../SiteLogo";
import Section from "./Section";

type SocialIconTypes = "twitter" | "facebook" | "telegram" | "whatsapp";

const socials: { name: SocialIconTypes; url: string }[] = [
  { name: "telegram", url: "https://t.me/KryptoliteNews" },
  { name: "whatsapp", url: "https://t.me/KryptoliteNews" },
  { name: "facebook", url: "https://fb.me/KryptoliteCommunity" },
  { name: "twitter", url: "https://twitter.com/KryptoliteSwap" },
];

interface FooterProps extends React.ComponentProps<"footer"> {}
export default function Footer(_props: FooterProps) {
  return (
    <Section containerClass="py-10 px-2 bg-primary">
      <footer className="text-center px-2 py-3 flex flex-col space-y-2 items-center text-base ">
        <SiteLogo text="GCOIN" />
        <div>
          <p className="uppercase">We are on</p>
          <div className="flex items-start justify-center space-x-4 flex-wrap">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline inline-block hover:no-underline"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="text-xs">&copy;{new Date().getFullYear()} goldencoinweb.com</div>
      </footer>
    </Section>
  );
}
