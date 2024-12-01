import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DetailsDrawer, DetailsDrawerButton } from "~/components";
import { listKnacks } from "~/data";
import {
  describeKnack,
  getKnackSkills,
  getKnackTraits,
  Knack,
} from "~/rules/knacks";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const knacks = (await listKnacks()) as unknown as Knack[];

  const url = new URL(request.url);
  const detailsKey = url.searchParams.get("detailsKey");
  const detailsValue = url.searchParams.get("detailsValue");

  return { knacks, detailsKey, detailsValue };
};

export default function KnacksList() {
  const { knacks, detailsKey, detailsValue } = useLoaderData<typeof loader>();

  return (
    <>
      <main className="flex md:basis-1/2 flex-row w-full md:w-unset">
        <div className="flex flex-col w-full overflow-x-clip md:h-screen">
          <h1 className="text-xl font-semibold p-4 border-b border-slate-200">
            Knacks
          </h1>
          <div className="flex overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Parent Skills</th>
                  <th>About</th>
                  <th>Traits</th>
                </tr>
              </thead>
              <tbody>
                {knacks.map((knack) => (
                  <tr key={knack}>
                    <th>{knack}</th>
                    <td>
                      <ul className="flex flex-col gap-1">
                        {getKnackSkills(knack).map((skill) => (
                          <li className="text-left">
                            <DetailsDrawerButton
                              detailsKey="skill"
                              detailsValue={skill}
                            >
                              {skill}
                            </DetailsDrawerButton>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{describeKnack(knack)}</td>
                    <td>{getKnackTraits(knack).join("/")}</td>
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
