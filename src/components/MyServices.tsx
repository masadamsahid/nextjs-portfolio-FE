import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { BsChat, BsDot, BsFillPatchCheckFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";

const LOREM_25 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur deserunt doloribus error explicabo illo laudantium maxime non, optio quae quod repellendus voluptatum. Quasi!";
const LOREM_50 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nesciunt voluptate. Amet atque consectetur eos est in? A aliquid animi aspernatur assumenda consequatur cupiditate dignissimos doloribus est explicabo facilis, fugiat fugit incidunt ipsa iste iure maiores maxime nam nulla optio perferendis quos saepe sapiente suscipit temporibus tenetur totam ullam.";
const LOREM_100 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, at delectus deleniti distinctio dolore doloribus earum ex excepturi facere, facilis incidunt iure minus modi, molestiae non odit omnis quasi rerum saepe sint sunt tenetur voluptatum. Aspernatur assumenda consectetur cumque deleniti, deserunt dolorem, ducimus, eius explicabo fugit id in laudantium minus modi natus nesciunt nulla officia omnis perspiciatis quisquam repellendus soluta suscipit tempora tenetur vel vero voluptas voluptatibus. A adipisci autem consequatur dignissimos distinctio dolorem, eius enim eum, excepturi explicabo hic impedit ipsam magnam minus, modi molestias mollitia nemo nobis non odio quia rerum saepe ut voluptatem voluptates? Aut, nihil!";

const SERVICES = [
  {
    title: "Software Development",
    abbreviation: "SD",
    base_color: "#00B8A9",
    img_url: "/services/software-development.png",
    desc: LOREM_50,
  },
  {
    title: "Big Data & AI",
    abbreviation: "DA",
    base_color: "#3E4149",
    img_url: "/services/big-data-ai.png",
    desc: LOREM_25,
  },
  {
    title: "UI-UX Design",
    abbreviation: "UIX",
    base_color: "#F6416C",
    img_url: "/services/ui-ux.png",
    desc: LOREM_100,
  },
];

const MyServices = () => {
  return (
    <div className="flex flex-col gap-2">
      {SERVICES.map((service) => (
        <div key={service.title} className="p-3 flex gap-2 border-b-[.5px] border-gray-700/50">
          <div>
            <Avatar>
              <AvatarImage/>
              <AvatarFallback className="font-bold" style={{backgroundColor: service.base_color}}>
                {service.abbreviation}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <h1 className="font-semibold text-sm">{service.title}</h1>
              <BsFillPatchCheckFill/>
              <p className="text-neutral-500 text-sm font-light">
                @masadamsahid
              </p>
              {/*<p className="p-0 text-gray-500 text-sm font-light">
                <BsDot/>
              </p>
              <p className="p-0 text-gray-500 text-sm font-light flex items-center gap-1">
                Fast Delivery <FaTruckFast/>
              </p>*/}
            </div>
            <div className="font-light text-sm">
              {service.desc}
            </div>
            <Card className="bg-transparent text-white border-gray-600/30 w-fit">
              {/*<CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>*/}
              <CardContent className="p-0">
                <Image
                  className="max-w-[400px] w-auto mx-auto"
                  src={service.img_url}
                  width={400}
                  height={400}
                  alt=""
                />
              </CardContent>
              {/*<CardFooter></CardFooter>*/}
            </Card>
          </div>
          
        </div>
      ))}
      <BackToTop/>
    </div>
  );
};

export default MyServices;