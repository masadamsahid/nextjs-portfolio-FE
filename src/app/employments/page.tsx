import MainLayout from "@/components/layouts/MainLayout";
import UnderConstruction from "@/components/UnderConstruction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { BsDot } from "react-icons/bs";
import moment from "moment/moment";
import BackToTop from "@/components/BackToTop";

const DEFAULT_DESC =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid corporis culpa delectus distinctio dolorum esse eum fuga fugiat illum in inventore iure, iusto minima, molestiae non obcaecati odit officia quas quidem quis repudiandae sequi sint temporibus!\n" +
  "\n" +
  "Adipisci atque cum cupiditate, doloremque esse ex excepturi exercitationem facilis harum incidunt maiores maxime officiis provident quos voluptas, voluptate voluptatem? Cum esse, et eveniet ex minus neque praesentium quas quis saepe, similique sint tempora?\n" +
  "\n" +
  "Ab adipisci architecto consequuntur cum ducimus eligendi et eum impedit laudantium nam nihil, numquam odio porro praesentium quam quasi quis rem saepe sed temporibus?\n" +
  "\n" +
  "Aspernatur consequatur dicta exercitationem."
;

const EMPLOYMENTS = [
  {
    id: 1,
    position: "Back End Engineer",
    job_type: "Contract",
    company: "Activa Digital",
    company_img_url: "https://media.licdn.com/dms/image/C510BAQHuRrK0lljfEQ/company-logo_200_200/0/1630590826741?e=1701907200&v=beta&t=RjOKoVTX4ThyhT3nGcA-Cxd9r_OS4PvOWnLXV3n_9r4",
    location: "Indonesia",
    location_type: "Remote",
    started_at: new Date(2022, 12),
    finished_at: new Date(2023, 3),
    is_present: false,
    desc: DEFAULT_DESC,
  },
  {
    id: 2,
    position: "Front End Developer Intern",
    job_type: "Internship",
    company: "Kotakode",
    company_img_url: "https://media.licdn.com/dms/image/C560BAQEA5U2XIqodUQ/company-logo_200_200/0/1630636909346/kotakode_logo?e=1701907200&v=beta&t=9v8xz1NCZ-YC8Lt2qN-5NtX8o6RYsJ4rad2lzjpHf8o",
    location: "Indonesia",
    location_type: "Remote",
    started_at: new Date(2021, 11),
    finished_at: new Date(2022, 2),
    is_present: false,
    desc: DEFAULT_DESC,
  },
];

const EmploymentsPage = () => {
  
  const parseNewlineToHTMLLineBreaker = (str: string) => str.split("\n").join("<br/>");
  
  return (
    <MainLayout>
      <div className="flex flex-col h-full border-b-[.5px] border-neutral-700/30">
        <div className="py-2 px-4 bg-transparent backdrop-blur-md sticky top-0 border-b-[.5px] border-neutral-700/30 z-10">
          <h1 className="text-lg font-extrabold mb-2">
            Maulana Adam Sahid's Working Experiences
          </h1>
          <p className="text-xs text-neutral-500">
            🐣 &le; 1 year experience | Currently just a Junior&nbsp;
            <span className="opacity-0 hover:opacity-100 p-1 bg-red-500 text-white rounded-sm cursor-pointer">
              And soon will be your architect 🔥
            </span>
          </p>
        </div>
        
        {EMPLOYMENTS.map((e) => (
          <div key={e.id} className="p-4 flex gap-2 border-b-[.5px] border-neutral-700/30">
            <div>
              <Avatar className="w-16 h-16 rounded-md p-2 bg-white">
                <AvatarImage src={e.company_img_url}/>
                <AvatarFallback className="text-3xl font-bold text-yellow-300 rounded-md w-full h-full bg-blue-400">
                  {e.company.split(" ").map(w => w[0]).join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="text-xl font-bold">{e.position}</h1>
              <p className="flex items-center text-sm text-neutral-500">
                {e.company}
                <BsDot/>
                {e.job_type}
              </p>
              <p className="text-xs text-neutral-500">
                {moment(e.started_at).format("MMM YYYY")} - {e.is_present ? "Present" : moment(e.finished_at).format("MMM YYYY")}
              </p>
              <p className="flex items-center text-xs text-neutral-500">
                {e.location}
                <BsDot/>
                {e.location_type}
              </p>
              <p className="text-xs font-light" dangerouslySetInnerHTML={{ __html: parseNewlineToHTMLLineBreaker(e.desc)}}>
              </p>
            </div>
          </div>
        ))}
        <BackToTop/>
      </div>
    </MainLayout>
  );
};

export default EmploymentsPage;