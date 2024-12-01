import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import React, { FunctionComponent } from "react";
import { Optional } from "typescript-optional";
import { divide } from "lodash";
const { ofNullable } = Optional;

import { FC, ReactElement, ReactNode } from "react";
import { Form, useSubmit } from "@remix-run/react";
import { links } from "./root";
import {
  describeKnack,
  getKnackSkills,
  getKnackTraits,
  getSkillBasicKnacks,
  getSkillType,
  Knack,
  Skill,
} from "./rules/knacks";
import {
  Advantage,
  Background,
  Character,
  characterHasKnack,
  characterHasSkill,
  describeAdvantage,
  describeBackground,
  describeHubris,
  describeReligion,
  getDiceModifiersForCharacterKnack,
  getModifiersForCharacterKnack,
  Hubris,
  Religion,
} from "./rules/characters";
import { CheckIcon } from "@heroicons/react/16/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface CaseProps {
  children?: ReactNode;
  when: string | number;
}

interface DefaultProps {
  children?: ReactNode;
  when?: never;
}

interface SwitchComponentProps {
  condition: undefined | string | number;
  children?:
    | ReactElement<CaseProps | DefaultProps>
    | ReactElement<CaseProps | DefaultProps>[];
}

interface SwitchComponentType extends FC<SwitchComponentProps> {
  Case: FC<CaseProps>;
  Default: FC<DefaultProps>;
}

export const Switch: SwitchComponentType = ({ condition, children }) => {
  if (!children) {
    return null;
  }

  const arrayOfChildren = Array.isArray(children) ? children : [children];
  const cases = arrayOfChildren.filter(
    (child) => child.props.when == condition
  );
  const defaultCases = arrayOfChildren.filter((child) => !child.props.when);
  if (defaultCases.length > 1) {
    throw new Error("Only one <Switch.Default> is allowed");
  }
  const defaultCase = defaultCases[0];

  return cases.length > 0 ? <>{cases}</> : <>{defaultCase}</>;
};

Switch.Case = ({ children }) => {
  return <>{children}</>;
};

Switch.Default = ({ children }) => {
  return <>{children}</>;
};

export const DetailsDrawerButton = ({
  detailsKey,
  detailsValue,
  children,
  ...attributes
}: {
  detailsKey: string;
  detailsValue: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const submit = useSubmit();
  return (
    <Form onSubmit={(event) => submit(event.currentTarget)}>
      <input type="hidden" name="detailsKey" value={detailsKey} />
      <input type="hidden" name="detailsValue" value={detailsValue} />
      <button className="link text-left" type="submit" {...attributes}>
        {children || "Details"}
      </button>
    </Form>
  );
};

export type DetailsDrawerProps = {
  character?: Character;
  detailsKey: string; // todo: stricter typing
  detailsValue: string;
};

export const DetailsDrawer = ({
  character,
  detailsKey,
  detailsValue,
}: DetailsDrawerProps) => {
  const submit = useSubmit();
  return (
    <div className="absolute top-0 bottom-0 md:shadow md:static h-screen w-screen bg-white md:border md:border-slate-200 md:w-full md:h-auto md:rounded flex flex-col overflow-y-clip">
      <Form
        preventScrollReset
        onSubmit={(event) => submit(event.currentTarget)}
        className="border-b border-slate-20 px-4 py-2"
      >
        <button type="submit" className="text-sm underline font-semibold">
          Close
        </button>
      </Form>
      <div className="flex flex-col grow overflow-y-auto p-4">
        {detailsKey && detailsValue && (
          <Switch condition={detailsKey}>
            <Switch.Case when="advantage">
              <AdvantageDetailsDrawerContents
                advantage={detailsValue as Advantage}
              />
            </Switch.Case>
            <Switch.Case when="knack">
              <KnackDetailsDrawerContents
                knack={detailsValue as Knack}
                character={character}
              />
            </Switch.Case>
            <Switch.Case when="skill">
              <SkillDetailsDrawerContents
                skill={detailsValue as Skill}
                character={character}
              />
            </Switch.Case>
            <Switch.Case when="hubris">
              <HubrisDetailsDrawerContents hubris={detailsValue as Hubris} />
            </Switch.Case>
            <Switch.Case when="background">
              <BackgroundDetailsDrawerContents
                background={detailsValue as Background}
              />
            </Switch.Case>
            <Switch.Case when="religion">
              <ReligionDetailsDrawerContents
                religion={detailsValue as Religion}
              />
            </Switch.Case>
            <Switch.Default>
              <div className="alert alert-warning" role="alert">
                <span>Unknown details type!</span>
              </div>
            </Switch.Default>
          </Switch>
        )}
      </div>
    </div>
  );
};

const AdvantageDetailsDrawerContents = ({
  advantage,
}: {
  advantage: Advantage;
}) => (
  <div className="flex flex-col">
    <h2 className="font-semibold text-lg mb-4">Advantage: {advantage}</h2>
    <p>{describeAdvantage(advantage)}</p>
  </div>
);

const KnackDetailsDrawerContents = ({
  knack,
  character,
}: {
  knack: Knack;
  character?: Character;
}) => {
  const knackDescription = describeKnack(knack);
  const knackTraits = getKnackTraits(knack);
  const modifiersForCharacterKnack = character
    ? getModifiersForCharacterKnack(character, knack)
    : [];
  const diceModifiersForCharacterKnack = character
    ? getDiceModifiersForCharacterKnack(character, knack)
    : [];
  const modifiersForKnack = [
    ...modifiersForCharacterKnack,
    ...diceModifiersForCharacterKnack,
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <h2 className="font-semibold text-lg">Knack: {knack}</h2>
        {character && characterHasKnack(character, knack) && (
          <CheckIcon className="size-8 text-blue-500" />
        )}
      </div>
      <p>
        {knackDescription ? (
          knackDescription
        ) : (
          <WarningAlert>No descripition for {knack}</WarningAlert>
        )}
      </p>
      <h3 className="font-semibold mt-4">Traits</h3>
      {knackTraits.length ? (
        <ul>
          {knackTraits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      ) : (
        <WarningAlert>No known traits for {knack}</WarningAlert>
      )}
      <h3 className="font-semibold mt-4">Parent Skills</h3>
      <table className="table">
        <tbody>
          {getKnackSkills(knack).map((skill) => (
            <tr key={skill}>
              <td>
                <DetailsDrawerButton detailsKey="skill" detailsValue={skill}>
                  {skill}
                </DetailsDrawerButton>
              </td>
              {character && characterHasSkill(character, skill) && (
                <td>
                  <CheckIcon className="size-6 text-blue-500" />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {modifiersForKnack.length ? (
        <>
          <h3 className="font-semibold mt-4">Modifiers ({character?.name})</h3>
          <table className="table">
            <thead>
              <th></th>
              <th>Source</th>
              <th>Condition</th>
            </thead>
            {modifiersForCharacterKnack.map(
              ({ value, source, condition }, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="badge bg-green-300">+{value}</div>
                  </td>
                  <td>
                    <DetailsDrawerButton
                      detailsKey="advantage"
                      detailsValue={source}
                    >
                      {source}
                    </DetailsDrawerButton>
                  </td>
                  <td>{condition ?? "None"}</td>
                </tr>
              )
            )}
            {diceModifiersForCharacterKnack.map(
              ({ value, source, which }, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="badge bg-green-300">
                      +{value}&nbsp;{which}
                    </div>
                  </td>
                  <td>
                    <DetailsDrawerButton
                      detailsKey="advantage"
                      detailsValue={source}
                    >
                      {source}
                    </DetailsDrawerButton>
                  </td>
                </tr>
              )
            )}
          </table>
        </>
      ) : null}
    </div>
  );
};

const SkillDetailsDrawerContents = ({
  skill,
  character,
}: {
  skill: Skill;
  character?: Character;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-row gap-2 items-center">
      <h2 className="font-semibold text-lg">Skill: {skill}</h2>
      {character && characterHasSkill(character, skill) && (
        <CheckIcon className="size-8 text-blue-500" />
      )}
    </div>
    <h3 className="font-semibold">Type</h3>
    <p>{getSkillType(skill)}</p>
    <h3 className="font-semibold mt-4">Basic Knacks</h3>
    <p>
      Basic knacks can be bought for 2 XP, or upgraded for 2&times; the new
      skill level.
    </p>
    <table className="table">
      <tbody>
        {getSkillBasicKnacks(skill).map((knack) => (
          <tr key={knack}>
            <th>
              <DetailsDrawerButton detailsKey="knack" detailsValue={knack}>
                {knack}
              </DetailsDrawerButton>
            </th>
            {character && (
              <td>
                {characterHasKnack(character, knack) ? (
                  <CheckIcon className="size-6 text-blue-500" />
                ) : null}
              </td>
            )}
            <td>{describeKnack(knack)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const HubrisDetailsDrawerContents = ({ hubris }: { hubris: Hubris }) => (
  <div className="flex flex-col gap-4">
    <h2 className="font-semibold text-lg">Hubris: {hubris}</h2>
    <p>{describeHubris(hubris)}</p>
  </div>
);

const BackgroundDetailsDrawerContents = ({
  background,
}: {
  background: Background;
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="font-semibold text-lg">Background: {background}</h2>
    <p>{describeBackground(background)}</p>
  </div>
);

const ReligionDetailsDrawerContents = ({
  religion,
}: {
  religion: Religion;
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="font-semibold text-lg">Religion: {religion}</h2>
    <p>{describeReligion(religion)}</p>
  </div>
);

const WarningAlert = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <span>
        <ExclamationTriangleIcon className="size-6 text-yellow-500" />
      </span>
      {children}
    </div>
  );
};
