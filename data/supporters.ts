import janeStreet from "../assets/jane_street.svg";
import rs from "../assets/rs.png";
import rp from "../assets/rp.png";
import sig from "../assets/sig.png";
import imc from "../assets/imc.png";
import sc from "../assets/sc.png";
import quickli from "../assets/quickli.png";
import qrt from "../assets/qrt.svg";
import zurich from "../assets/zurich.png";
import citadel from "../assets/citadel.png";
import optiver from "../assets/optiver.png";
import macquarie from "../assets/macquarie.svg";
import tiktok from "../assets/tiktok.svg";
import acnc from "../assets/acnc.png";
import cse from "../assets/CSE.jpeg";
import arc from "../assets/arc.png";
import tradedesk from "../assets/thetradedesk.png";
import lyra from "../assets/lyra.svg";
import arista from "../assets/arista.png";
import airwallex from "../assets/airwallex-light.png";
import flowtraders from "../assets/flowtraders.png";
import neara from "../assets/neara.webp";
import zip from '../assets/zip.png'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface SponsorInfo {
  name: string;
  logo: StaticImport | string;
  url: string;
}

export interface SupporterData {
  infoBar?: string;
  title: string;
  subtitle?: string;
  logos: SponsorInfo[];
}

export const affilateData: SupporterData = {
  title: "Affiliations",
  logos: [
    {
      name: "Arc",
      logo: arc,
      url: "https://www.arc.unsw.edu.au/",
    },
    {
      name: "Registered Charity",
      logo: acnc,
      url: "https://www.acnc.gov.au/charity/charities/7fa763bf-0876-ee11-8179-00224893b0ed/profile",
    },
    {
      name: "School of CSE",
      logo: cse,
      url: "https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering",
    },
  ],
};
export const projectSupporterData: { [year: number]: SupporterData[] } = {
  2026: [
    {
      title: "Platinum Tier",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "The Trade Desk",
          logo: tradedesk,
          url: "https://careers.thetradedesk.com/",
        },
        {
          name: "Lyra Technologies",
          logo: lyra,
          url: "https://www.lyratechnologies.com.au/",
        },
      ],
    },
    {
      title: "Gold Tier",
      logos: [
        {
          name: "Airwallex",
          logo: airwallex,
          url: "https://www.airwallex.com/au",
        },
        {
          name: "Arista",
          logo: arista,
          url: "https://www.arista.com/en/",
        },
      ],
    },
    {
      title: "Silver Tier",
      logos: [
        {
          name: "Citadel",
          logo: citadel,
          url: "https://www.citadelsecurities.com/",
        },
        {
          name: "imc",
          logo: imc,
          url: "https://www.imc.com/",
        },
      ],
    },
  ],
  2025: [
    {
      title: "Platinum Tier",
      logos: [
        {
          name: "Arista",
          logo: arista,
          url: "https://www.arista.com/en/",
        },
        {
          name: "The Trade Desk",
          logo: tradedesk,
          url: "https://careers.thetradedesk.com/",
        },
      ],
    },
    {
      title: "Gold Tier",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "Safety Culture",
          logo: sc,
          url: "https://safetyculture.com/",
        },
      ],
    },
    {
      title: "Silver Tier",
      logos: [
        {
          name: "Citadel",
          logo: citadel,
          url: "https://www.citadelsecurities.com/",
        },
        {
          name: "imc",
          logo: imc,
          url: "https://www.imc.com/",
        },
        {
          name: "Lyra Technologies",
          logo: lyra,
          url: "https://www.lyratechnologies.com.au/",
        },
        {
          name: "QRT",
          logo: qrt,
          url: "https://www.qube-rt.com/careers/",
        },
        {
          name: "Record Point",
          logo: rp,
          url: "https://www.recordpoint.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
      ],
    },
  ],
  2024: [
    {
      infoBar:
        "In 2024, CSESoc and DevSoc collaborated on a joint sponsorship programme.",
      title: "Project Sponsors",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
        {
          name: "Macquarie",
          logo: macquarie,
          url: "https://www.macquarie.com",
        },
      ],
    },
    {
      title: "Diamond Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "Jane Street",
          logo: janeStreet,
          url: "https://www.janestreet.com/",
        },
        {
          name: "TikTok",
          logo: tiktok,
          url: "https://careers.tiktok.com/",
        },
      ],
    },
    {
      title: "Gold Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "Atlassian",
          logo: "https://www.skillfinder.com.au/media/wysiwyg/atlassian-logo-gradient-horizontal-white.png",
          url: "https://www.atlassian.com/",
        },
        {
          name: "Citadel",
          logo: citadel,
          url: "https://www.citadelsecurities.com/",
        },
        {
          name: "imc",
          logo: imc,
          url: "https://www.imc.com/",
        },
        {
          name: "neara",
          logo: neara,
          url: "https://neara.com/",
        },
        {
          name: "Safety Culture",
          logo: sc,
          url: "https://safetyculture.com/",
        },
        {
          name: "Zurich",
          logo: zurich,
          url: "https://www.zurich.com.au/",
        },
      ],
    },
    {
      title: "Silver Tier",
      // subtitle: "CSESoc & DevSoc Joint Sponsorship Drive",
      logos: [
        {
          name: "appian",
          logo: "https://www.cds.co.uk/hs-fs/hubfs/Appian-white-logo.png?width=1200&height=627&name=Appian-white-logo.png",
          url: "https://appian.com/",
        },
        {
          name: "FlowTraders",
          logo: flowtraders,
          url: "https://www.flowtraders.com/",
        },
        {
          name: "Macquarie",
          logo: macquarie,
          url: "https://www.macquarie.com",
        },
        {
          name: "Optiver",
          logo: optiver,
          url: "https://optiver.com/",
        },
        {
          name: "quantium",
          logo: "https://becarwise.com.au/wp-content/uploads/2022/04/quantium-logo-w.png",
          url: "https://quantium.com/",
        },
        {
          name: "Quickli",
          logo: quickli,
          url: "https://quickli.com.au/",
        },
        {
          name: "revolutioniseSPORT",
          logo: rs,
          url: "https://www.revolutionise.com.au/",
        },
        {
          name: "RecordPoint",
          logo: rp,
          url: "https://www.recordpoint.com/",
        },
        {
          name: "SIG",
          logo: sig,
          url: "https://sig.com/",
        },
        {
          name: "ZIP",
          logo: zip,
          url: "https://zip.co/au",
        },
        {
          name: "Canva",
          logo: "https://www.edigitalagency.com.au/wp-content/uploads/Canva-wordmark-logo-white-font-png.png",
          url: "https://www.canva.com/",
        },
      ],
    },
  ],
};
