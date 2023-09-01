import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { BsDot, BsTrophyFill } from "react-icons/bs";
import moment from "moment/moment";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

const DEFAULT_IMG_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKL6wul-p6jmhSLsDbmJPaLWSPDOXNtCq6R0v1P9nKnDN35ERlvTA2v_bZs9zxQ-i_gA&usqp=CAU";

const LOREM_25 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at consectetur deserunt doloribus error explicabo illo laudantium maxime non, optio quae quod repellendus voluptatum. Quasi!";
const LOREM_50 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nesciunt voluptate. Amet atque consectetur eos est in? A aliquid animi aspernatur assumenda consequatur cupiditate dignissimos doloribus est explicabo facilis, fugiat fugit incidunt ipsa iste iure maiores maxime nam nulla optio perferendis quos saepe sapiente suscipit temporibus tenetur totam ullam.";
const LOREM_100 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci, at delectus deleniti distinctio dolore doloribus earum ex excepturi facere, facilis incidunt iure minus modi, molestiae non odit omnis quasi rerum saepe sint sunt tenetur voluptatum. Aspernatur assumenda consectetur cumque deleniti, deserunt dolorem, ducimus, eius explicabo fugit id in laudantium minus modi natus nesciunt nulla officia omnis perspiciatis quisquam repellendus soluta suscipit tempora tenetur vel vero voluptas voluptatibus. A adipisci autem consequatur dignissimos distinctio dolorem, eius enim eum, excepturi explicabo hic impedit ipsam magnam minus, modi molestias mollitia nemo nobis non odio quia rerum saepe ut voluptatem voluptates? Aut, nihil!";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Steam Pro Player: Played 1000 hours",
    institution_name: "Steam",
    achieved_at: new Date(2022, 4, 22).toISOString(),
    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/800px-Steam_icon_logo.svg.png",
    link: "https://steamcommunity.com/",
    desc: LOREM_25,
  },
  {
    id: 2,
    title: "Data Science Bootcamp Scholarship Awardee",
    institution_name: "Digital Talent Scholarship",
    achieved_at: new Date(2023, 2, 24).toISOString(),
    img_url: "https://digitalent.kominfo.go.id/assets/img/digitalent-mobile.png",
    link: "https://digitalent.kominfo.go.id/akademi/FGA",
    desc: LOREM_50,
  },
];

const MyAchievements = () => {
  return (
    <div className="flex flex-col">
      {ACHIEVEMENTS.reverse().map((a) => (
        <div className="p-4 flex gap-2 border-b-[.5px] border-gray-700/50">
          <div>
            <Avatar className="w-24 h-24 rounded-md p-2 bg-white">
              <AvatarImage src={a?.img_url}/>
              <AvatarFallback className="text-3xl text-yellow-300 bg-blue-400">
                <BsTrophyFill/>
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1">
            <Link href={a.link} className="font-bold hover:underline">
              {a.title}
            </Link>
            <div className="flex items-center gap-1 text-xs text-neutral-500 font-normal mb-2">
              <p>{a.institution_name}</p>
              <BsDot/>
              <p>Achieved on {moment(a.achieved_at).format("MMM YYYY")}</p>
            </div>
            <div>
              <p className="text-xs">
                {a.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
      <BackToTop/>
    </div>
  );
};

export default MyAchievements;