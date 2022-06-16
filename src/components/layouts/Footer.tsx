import React from "react";
import SiteLogo from "../SiteLogo";
import Section from "./Section";

type SocialIconTypes = "twitter" | "facebook" | "telegram" | "whatsapp";

const socials: { name: SocialIconTypes; url: string }[] = [
  { name: "telegram", url: "https://t.me/+WPjFWZHtYOdiMzE8" },
  { name: "whatsapp", url: "https://chat.whatsapp.com/G5tAPAeQ0AzGRHqATfrrXe" },
  { name: "facebook", url: "https://www.facebook.com/G-Connect-107421151609293/" },
  { name: "twitter", url: "https://twitter.com/GCOIN2022?t=RFp6JSflcF_XnLZu-uNZpQ&s=09" },
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
