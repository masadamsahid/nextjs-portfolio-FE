import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { PiCertificateFill } from "react-icons/pi";
import moment from "moment/moment";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import { BiLinkExternal } from "react-icons/bi";
import BackToTop from "@/components/BackToTop";

const DEFAULT_DESC = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aspernatur delectus dolores fugiat impedit iusto, labore nam nemo nihil, nisi non ratione saepe sequi unde veritatis, voluptates? Praesentium, quod?";
const DEFAULT_DOC_LINK = "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.microsoft-azure-fundamentals-describe-cloud-concepts.trophy?username=masadamsahid&sharingId=C8B449D29FFBB2F9";

const CERTIFICATES = [
  {
    id: 1,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issued_by: "Microsoft Azure",
    link: "https://learn.microsoft.com/en-us/certifications/exams/az-900/",
    image_url: "https://blogs.sap.com/wp-content/uploads/2021/05/azure-fundamentals-600x600-1.png",
    issued_at: new Date(2023, 8, 15),
    expired_at: new Date(2025, 8, 15),
    documents: [
      {
        id: 1,
        title: "Badge",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 2,
        title: "Certificate",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 3,
        title: "Verify",
        url: DEFAULT_DOC_LINK,
      },
    ],
    desc: DEFAULT_DESC,
  },
  {
    id: 2,
    title: "Microsoft Data Fundamentals (DP-900)",
    issued_by: "Microsoft Azure",
    link: "https://learn.microsoft.com/en-us/certifications/exams/dp-900/",
    image_url: "https://promsbi.files.wordpress.com/2021/08/azure-data-fundamentals-600x600-1.png",
    issued_at: new Date(2023, 8, 15),
    expired_at: null,
    documents: [
      {
        id: 1,
        title: "Badge",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 2,
        title: "Certificate",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 3,
        title: "Verify",
        url: DEFAULT_DOC_LINK,
      },
    ],
    desc: DEFAULT_DESC,
  },
  {
    id: 3,
    title: "Microsoft AI Fundamentals (AI-900)",
    issued_by: "Microsoft Azure",
    link: "https://learn.microsoft.com/en-us/certifications/exams/ai-900/",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0E_MxOGxw6oy2ENXmcEWNHYpd1v14K0p8zdpJeq0dKHL1gfq0sp5HPnFtgGB4KOlmdU&usqp=CAU",
    issued_at: new Date(2023, 8, 15),
    expired_at: null,
    documents: [
      {
        id: 1,
        title: "Badge",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 2,
        title: "Certificate",
        url: DEFAULT_DOC_LINK,
      },
      {
        id: 3,
        title: "Verify",
        url: DEFAULT_DOC_LINK,
      },
    ],
    desc: DEFAULT_DESC,
  },
];

const MyCertificates = () => {
  return (
    <div className="flex flex-col gap-2">
      {CERTIFICATES.map((c) => (
        <div key={c.id} className="p-4 flex flex-col gap-4 border-b-[.5px] border-neutral-700/30">
          <div className="flex gap-4">
            <div>
              <Avatar className="w-20 h-20 p-2 bg-white">
                <AvatarImage src={c.image_url}/>
                <AvatarFallback className="text-4xl text-yellow-300 bg-blue-400">
                  <PiCertificateFill/>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="my-auto">
              <h1 className="text-xl font-bold">
                {c.title}
              </h1>
              <p className="text-neutral-500 text-xs flex items-center">
                {c.issued_by} | Issued at {moment(c.issued_at.toISOString()).format("MMM YYYY")}
                <BsDot/>
                {c.expired_at ? moment(c.expired_at.toISOString()).format("MMM YYYY") : "No Expiry Date"}
              </p>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-light">
              {DEFAULT_DESC}
            </p>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {c.documents.map((doc) => (
              <Link key={doc.id} href={doc.url} target="_blank">
                <Button className="hover:bg-blue-600">
                  {doc.title}&nbsp;<BiLinkExternal/>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <BackToTop/>
    </div>
  );
};

export default MyCertificates;