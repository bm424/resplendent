import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DetailsDrawer, DetailsDrawerButton } from "~/components";
import { listSkills } from "~/data";
import { getSkillBasicKnacks, Skill } from "~/rules/knacks";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const skills = (await listSkills()) as unknown as Skill[];

  const url = new URL(request.url);
  const detailsKey = url.searchParams.get("detailsKey");
  const detailsValue = url.searchParams.get("detailsValue");

  return { skills, detailsKey, detailsValue };
};

export default function SkillsList() {
  const { skills, detailsKey, detailsValue } = useLoaderData<typeof loader>();

  return (
    <>
      <main className="flex md:basis-1/2 flex-row">
        <div className="flex flex-col w-full overflow-x-clip md:h-screen">
          <h1 className="text-xl font-semibold p-4 border-b border-slate-200">
            Skills
          </h1>
          <div className="flex overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Basic Skills</th>
                  <th>Advanced Skills</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((skill) => (
                  <tr key={skill}>
                    <td>{skill}</td>
                    <td>
                      <ul className="flex flex-col gap-1">
                        {getSkillBasicKnacks(skill).map((knack) => (
                          <li className="text-left">
                            <DetailsDrawerButton
                              detailsKey="knack"
                              detailsValue={knack}
                            >
                              {knack}
                            </DetailsDrawerButton>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <div className="md:flex md:basis-1/2 md:m-4">
        {detailsKey && detailsValue && (
          <DetailsDrawer detailsKey={detailsKey} detailsValue={detailsValue} />
        )}
      </div>
    </>
  );
}
