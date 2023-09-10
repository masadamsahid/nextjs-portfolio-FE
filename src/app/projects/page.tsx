import MainLayout from "@/components/layouts/MainLayout";
import UnderConstruction from "@/components/UnderConstruction";
import { PROJECTS } from "@/dummy-data/projects";
import moment from "moment/moment";
import { Badge } from "@/components/shadcn/ui/badge";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";

const ProjectsPage = () => {
  return (
    <MainLayout>
      <div>
        <div className="px-4 py-2 border-b-[.5px] border-neutral-700/30">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-sm">
              Maulana Adam Sahid's Projects
            </h1>
            <div className="text-neutral-500 font-light text-xs">
              <p>{PROJECTS.length} Projects</p>
            </div>
          </div>
        </div>
        
        {/*Blogs*/}
        <div>
          {PROJECTS.map((project) => (
            <div key={project.id} className="p-4 flex flex-col gap-2 border-b-[.5px] border-neutral-700/30">
              <div>
                <Link href={`/projects/${project.slug}`}>
                  <h1 className="text-xl font-bold hover:underline">
                    {project.title}
                  </h1>
                </Link>
                
                <p className="text-neutral-500 text-xs font-light">
                  Authored by {project.author.name}{' '}
                  {project.updated_at?.toISOString() === project.created_at?.toISOString()
                    ? moment(project.created_at).fromNow()
                    : `(updated ${moment(project.updated_at).fromNow()})`
                  }
                </p>
              </div>
              
              <div className="dark flex gap-2">
                {project.categories.map((c) => (
                  <Link key={c.id} href={`/projects?category=${c.id}`}>
                    <Badge variant='secondary' className="rounded-sm font-light">
                      {c.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <BackToTop/>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;