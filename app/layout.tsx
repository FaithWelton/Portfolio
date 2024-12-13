import type { Metadata } from "next";
import { config } from "@/app/util/config";
import getConfig from "next/config";
import SocialLinks from "@/app/components/Social/socialLinks";
import GlitchyText from "./components/Glitch/GlitchyText";
import { format } from "date-fns";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: config.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const { publicRuntimeConfig } = getConfig();
  const modifiedDate = new Date(publicRuntimeConfig.modifiedDate).toString();
  const version = "1.0.";

  return <html lang="en">
    <body>
      <GlitchyText style={{ width: "fit-content", position: "absolute" }}>
        <span style={{ fontSize: "10px" }}>
          { `Last Update: ${ format(modifiedDate, "EEEEE MMMMM dd yyyy") }` }
        </span>

        <span style={{ fontSize: "10px" }}>
          { `${ format(new Date(), "EEEEE MMMMM dd yyyy") }` }
        </span>

        <span style={{ fontSize: "10px" }}>
          { `V.${ version }` }
        </span>
      </GlitchyText>
      
      { children }

      <SocialLinks />
    </body>
  </html>
};