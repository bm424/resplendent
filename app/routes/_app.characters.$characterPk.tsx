import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";
import clsx from "clsx";
import _, { cond } from "lodash";
import React from "react";
import invariant from "tiny-invariant";
import { DetailsDrawer, DetailsDrawerButton } from "~/components";
import { getCharacter } from "~/data";
import {
  describeAdvantage,
  CharacterKnacks,
  CharacterTraits,
  getModifiersForCharacterKnack,
  Character,
  getDiceModifiersForCharacterKnack,
  describeBackground,
} from "~/rules/characters";
import { getSkillType, getKnackTraits, Knack } from "~/rules/knacks";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  invariant(params.characterPk, "Missing contactId param");
  const character = await getCharacter(params.characterPk);
  if (!character) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }

  const url = new URL(request.url);
  const detailsKey = url.searchParams.get("detailsKey");
  const detailsValue = url.searchParams.get("detailsValue");

  return { character, detailsKey, detailsValue };
};

export default function CharacterDetail() {
  const { character, detailsKey, detailsValue } =
    useLoaderData<typeof loader>();

  return (
    <>
      <main className="flex md:basis-1/2 w-full flex-col">
        <div className="flex flex-col w-full overflow-x-clip md:h-screen md:overflow-y-auto">
          <div id="basic" className="flex flex-row">
            <div>
              {character.portrait && (
                <img src={character.portrait} alt={character.name} />
              )}
            </div>
            <div className="p-4">
              <h1 className="font-semibold text-xl mb-2">{character.name}</h1>
              <table className="table ">
                <tbody>
                  <tr>
                    <th>Age</th>
                    <td>{character.age}</td>
                  </tr>
                  <tr>
                    <th>Culture</th>
                    <td>{character.context.culture}</td>
                  </tr>
                  <tr>
                    <th>Religion</th>
                    <td>
                      <DetailsDrawerButton
                        detailsKey="religion"
                        detailsValue={character.context.religion}
                      >
                        {character.context.religion}
                      </DetailsDrawerButton>
                    </td>
                  </tr>
                  <tr>
                    <th>Social Background</th>
                    <td>{character.context.socialBackground}</td>
                  </tr>
                  <tr>
                    <th>Hubris</th>
                    <td>
                      <DetailsDrawerButton
                        detailsKey="hubris"
                        detailsValue={character.context.hubris}
                      >
                        {character.context.hubris}
                      </DetailsDrawerButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="meta" className="p-4">
            <h2 className="font-semibold text-lg mb-2">Meta</h2>
            <div className="stats">
              <div className="stat">
                <div className="stat-title">Experience</div>
                <div className="stat-value">
                  {character.meta.experiencePoints}
                </div>
              </div>
              <div className="stat">
                <div className="stat-title">Reputation</div>
                <div className="stat-value">{character.meta.reputation}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Karma</div>
                <div className="stat-value">{character.meta.karma}</div>
              </div>
            </div>
          </div>
          <div id="stats" className="p-4">
            <h2 className="font-semibold text-lg mb-2">Traits</h2>
            <table className="table ">
              <tbody>
                {Object.entries(character.traits).map(([trait, traitLevel]) => (
                  <tr key={trait}>
                    <td className="capitalize">{trait}</td>
                    <td>
                      <Pips n={traitLevel} total={6}></Pips>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="backgrounds" className="p-4">
            <h2 className="font-semibold text-lg mb-2">Backgrounds</h2>
            <table className="table">
              <tbody>
                {character.backgrounds.map(({ background, level }) => (
                  <tr key={background}>
                    <td>
                      <DetailsDrawerButton
                        detailsKey="background"
                        detailsValue={background}
                      >
                        {background}
                      </DetailsDrawerButton>
                    </td>
                    <td>
                      <Pips n={level} total={3} />
                    </td>
                    <td>{describeBackground(background)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="languages" className="p-4">
            <h2 className="font-semibold text-lg mb-2">Languages</h2>
            <table className="table ">
              <tbody>
                {character.context.spokenLanguages.map(
                  ({ language, proficiency }) => (
                    <tr key={language}>
                      <td>{language}</td>
                      <td>{proficiency}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div id="advantages" className="p-4">
            <h2 className="font-semibold text-lg mb-2">Advantages</h2>
            <table className="table ">
              <tbody>
                {character.advantages.map((advantage) => (
                  <tr key={advantage}>
                    <td>{advantage}</td>
                    <td>{describeAdvantage(advantage)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="civil-skills" className="w-full overflow-x-clip p-4">
            <h2 className="font-semibold text-lg mb-2">Civil Skills</h2>
            <div className="w-full overflow-x-scroll">
              <SkillsTable
                knacks={character.knacks.filter(
                  ({ skill }) => getSkillType(skill) == "Civil"
                )}
              />
            </div>
          </div>
          <div id="martial-skills" className="w-full overflow-x-clip p-4">
            <h2 className="font-semibold text-lg mb-2">Martial Skills</h2>
            <div className="w-full overflow-x-scroll">
              <SkillsTable
                knacks={character.knacks.filter(
                  ({ skill }) => getSkillType(skill) == "Martial"
                )}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="md:flex md:basis-1/2 md:m-4">
        {detailsKey && detailsValue && (
          <DetailsDrawer
            character={character}
            detailsKey={detailsKey}
            detailsValue={detailsValue}
          />
        )}
      </div>
    </>
  );
}

const SkillsTable = ({ knacks }: { knacks: CharacterKnacks }) => {
  const { character } = useLoaderData<typeof loader>();
  return (
    <table className="table">
      <tbody>
        {Object.entries(_.groupBy(knacks, "skill")).map((skill, index) => (
          <React.Fragment key={index}>
            <tr>
              <th colSpan={2} className={index > 0 ? "pt-8" : ""}>
                <DetailsDrawerButton detailsKey="skill" detailsValue={skill[0]}>
                  {skill[0]}
                </DetailsDrawerButton>
              </th>
            </tr>
            {skill[1].map((knack) => {
              const knackModifiers = getModifiersForCharacterKnack(
                character,
                knack.knack
              );
              const knackIncrease = knackModifiers.reduce(
                (total, current) => total + current.value,
                0
              );
              const knackIncreaseHasCondition = knackModifiers.some(
                ({ condition }) => condition?.length
              );
              console.log(knackIncreaseHasCondition);
              const ukdModifier = getDiceModifiersForCharacterKnack(
                character,
                knack.knack
              )
                .filter(({ which }) => which == "ukd")
                .reduce((total, { value }) => total + value, 0);

              const hasModifiers = knackIncrease > 0 || ukdModifier != 0;
              return (
                <tr key={knack.knack}>
                  <td>
                    <DetailsDrawerButton
                      detailsKey="knack"
                      detailsValue={knack.knack}
                    >
                      {knack.knack}
                    </DetailsDrawerButton>
                  </td>
                  <td>
                    <Pips n={knack.level} total={6} />
                  </td>
                  <td>
                    {hasModifiers && (
                      <ul className="flex flex-row gap-1 flex-wrap">
                        {knackIncrease > 0 && (
                          <li>
                            <div className="badge bg-green-300 font-semibold">
                              +{knackIncrease}
                              {knackIncreaseHasCondition && "*"}
                            </div>
                          </li>
                        )}
                        {ukdModifier != 0 && (
                          <li>
                            <div
                              className={clsx("badge font-semibold", {
                                "bg-green-300": ukdModifier > 0,
                                "bg-red-300": ukdModifier < 0,
                              })}
                            >
                              {ukdModifier > 0 && "+"}
                              {ukdModifier}&nbsp;ukd
                            </div>
                          </li>
                        )}
                      </ul>
                    )}
                  </td>
                  <td>{getKnackTraits(knack.knack).join("/")}</td>
                </tr>
              );
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

const getTraitLevelForKnack = (
  knack: Knack,
  traits: CharacterTraits
): number | undefined => {
  const knackTraits = getKnackTraits(knack);
  if (knackTraits.length === 0) {
    return undefined;
  }
  return knackTraits.reduce(
    (level, trait) => Math.max(level, traits[trait]),
    0
  );
};

const Pips = ({ n, total }: { n: number; total: number }) => {
  return (
    <div className="flex flex-row gap-0.5">
      {_.range(n).map((i) => (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-4"
          key={i}
        >
          <circle r="11" cx="12" cy="12"></circle>
        </svg>
      ))}
      {_.range(total - n).map((i) => (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-4"
          key={n + i}
        >
          <circle r="11" cx="12" cy="12" fill="transparent"></circle>
        </svg>
      ))}
    </div>
  );
};
