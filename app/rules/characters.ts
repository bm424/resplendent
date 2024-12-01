import {
  Buff,
  Debuff,
  getKnackTraits,
  isMentalKnack,
  isPhysicalKnack,
  Knack,
  KnackDiceDecrease,
  KnackDiceIncrease,
  KnackIncrease,
  knacks,
  Skill,
  Trait,
} from "./knacks";

type KnackLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type CharacterKnacks = {
  knack: Knack;
  level: KnackLevel;
  skill: Skill;
}[];

export type CharacterTraits = Record<Trait, TraitLevel>;

export type Character = {
  name: string;
  pk: string;
  age: number;
  portrait: string | null;
  context: {
    culture: Culture;
    religion: Religion;
    spokenLanguages: {
      language: Language;
      proficiency: LanguageProficiency;
    }[];
    socialBackground: SocialBackground;
    hubris: Hubris;
  };
  backgrounds: {
    background: Background;
    level: BackgroundLevel;
  }[];
  advantages: Advantage[];
  knacks: CharacterKnacks;
  traits: CharacterTraits;
  meta: {
    reputation: number;
    karma: number;
    experiencePoints: number;
  };
};

export type Culture = "Vuranatés" | "Takharna" | "Sevachotés";
export type Religion = "Peratiem" | "Rekomethna" | "Wardüshakeyim";
export type Language =
  | "Vuranatés"
  | "Kurvanatés"
  | "Sevachotés"
  | "Vuranahtaese"
  | "Olovistiés";
type LanguageProficiency = "Poor" | "Fluent" | "Native" | "Literate";
type SocialBackground = string;
export type Hubris = "Inattentive" | "Ambitious" | "Reckless" | "Hedonistic";
export type Background =
  | "Amnesia"
  | "Epileptic"
  | "Contentious Theory"
  | "Crisis of Faith"
  | "Ousted"
  | "Drug Addict"
  | "Fear"
  | "Fascination"
  | "Provincial";
type BackgroundLevel = 1 | 2 | 3;
export type Advantage =
  | "Accurate Slinger"
  | "Small"
  | "Eagle Eyes"
  | "Sensitive Bones"
  | "Khutrash"
  | "Island Hideaway"
  | "Guardian Angel"
  | "Vuranatés Education"
  | "University"
  | "Age and Wisdom"
  | "Debater"
  | "Man of the Cloth"
  | "Bodyguard"
  | "Property (Cottage)"
  | "Ordained"
  | "Faith"
  | "Able Drinker"
  | "Accurate Archer"
  | "Battle Frenzy"
  | "Cold Climate Conditioning"
  | "Firm Grip"
  | "Pain Tolerance"
  | "Toughness"
  | "Night Trained"
  | "Lightning Reflexes"
  | "Keen Senses"
  | "Animal Affinitity";

export type AdvantageType =
  | "Meta"
  | "Physical"
  | "Mental"
  | "Social"
  | "Follower"
  | "Item"
  | "Membership"
  | "Miscellaneous";

type TraitLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const getAdvantageType = (advantage: Advantage): AdvantageType => {
  switch (advantage) {
    case "Accurate Slinger":
    case "Small":
    case "Able Drinker":
    case "Battle Frenzy":
    case "Accurate Archer":
    case "Cold Climate Conditioning":
    case "Firm Grip":
    case "Pain Tolerance":
    case "Toughness":
    case "Lightning Reflexes":
      return "Physical";

    case "Eagle Eyes":
    case "Sensitive Bones":
    case "Age and Wisdom":
    case "Night Trained":
    case "Keen Senses":
      return "Mental";

    case "Khutrash":
    case "Bodyguard":
      return "Follower";

    case "Island Hideaway":
    case "Property (Cottage)":
      return "Item";

    case "Vuranat\u00E9s Education":
    case "University":
      return "Meta";

    case "Debater":
    case "Man of the Cloth":
    case "Animal Affinitity":
      return "Social";

    case "Ordained":
      return "Membership";

    case "Guardian Angel":
    case "Faith":
      return "Miscellaneous";
  }
};

export const describeAdvantage = (advantage: Advantage): string => {
  switch (advantage) {
    case "Accurate Slinger":
      return "+5 to attacks with a sling";
    case "Small":
      return "+1 unkept dice to Stealth, Shadowing, and Unobtrusive. -1 unkept dice to your first damage roll each combat";
    case "Eagle Eyes":
      return "+10 to sight at a distance";
    case "Sensitive Bones":
      return "+5 to weather checks";
    case "Khutrash":
      return "(200 XP) extremely loyal Sevachotés henchman who will become a 3 point nemesis background if you betray or abandon them";
    case "Island Hideaway":
      return "You know of an island that is not on anyone else's maps. If you spend 8 XP, you also know of reef outside the island that others must make a TN 30 Wits + Piloting check to pass through without damage.";
    case "Guardian Angel":
      return "You may spend a drama die to force an opponent to reroll a successful attack or to reroll your own defence against a trap, disease, poison, or natural hazard.";
    case "Vuranatés Education":
      return "This advantage affects the following Civil Skills: Artist, Courtier, Doctor, Engineer, Merchant, Politician, Priest, Scholar, and Teacher. You buy each of these skills at 8 XP instead of 10.";
    case "University":
      return "You buy Civil Skills for 8 XP instead of 10";
    case "Age and Wisdom":
      return "+2 or 3 ukd for mental rolls, but -1 or 2 ukd on physical rolls";
    case "Debater":
      return "+5 to Oratory rolls";
    case "Man of the Cloth":
      return "+5 reputation and +5 to philosophy rolls";
    case "Bodyguard":
      return "170 XP mercenary henchman with a sword school (any nation)";
    case "Property (Cottage)":
      return "You own property (for non-nobles). Cost is 1 XP per 1000 gold of the property's value";
    case "Ordained":
      return "You are a priest of your faith. You gain +5 to philosophy checks and you gain 40g/month";
    case "Faith":
      return "You don't know what this does. Have faith!";
    case "Able Drinker":
      return "Never suffer from inebriation penalties";
    case "Accurate Archer":
      return "+5 to attacks with a bow";
    case "Battle Frenzy":
      return "Immune to fear. May spend Drama Die to go berserk: mindlessly attack, cannot be crippled, +5 to all Brawn rolls, gain fear Rating = 1/2 Panache (rounded up), Wits reduced to 0, Wits TN 5 to tell friend from foe, age a week for every round in berserk.";
    case "Cold Climate Conditioning":
      return "Take -1 ukd of environmental effects from cold";
    case "Firm Grip":
      return "+5 to resisting Bind and Disarm; +5 to Grapple knack checks";
    case "Pain Tolerance":
      return "You may take your Resolve + 1 before being crippled (but you are still incapacitated at twice your Resolve)";
    case "Toughness":
      return "+1 kept die on wound checks";
    case "Night Trained":
      return "Penalties for darkness are halved";
    case "Lightning Reflexes":
      return "Once per round, you may use any phase's action die for interrupt Active Defence (instead of two if not ready)";
    case "Keen Senses":
      return "+5 to all perception checks";
    case "Animal Affinitity":
      return "+5 to Animal Training rolls";
  }
};

export const describeHubris = (hubris: Hubris): string => {
  switch (hubris) {
    case "Inattentive":
      return "You fail any perception or surprise check.";
    case "Ambitious":
      return "You try to seize power as it presents itself.";
    case "Reckless":
      return "You jump into a challenge hastily and without hesitation.";
    case "Hedonistic":
      return "You overindulge in food, drink, or merriment and let your guard down.";
  }
};

export const describeBackground = (background: Background): string => {
  switch (background) {
    case "Amnesia":
      return "You do not know who you are or how you got here.";
    case "Contentious Theory":
      return "You have developed or published a theory or invention that the establishment may find wrong, dangerous, blasphemous, or threatening.";
    case "Crisis of Faith":
      return "Your faith in your religion is shaken, which causes problems with members of that religious sect and may impair your own decision-making.";
    case "Ousted":
      return "You used to be a member of an organization but your membership was revoked. You cannot regain the membership advantage or that group until you have resolved this background.";
    case "Drug Addict":
      return "You are addicted to a potent narcotic. Your dots in this background make your cravings more frequent and your withdrawal more severe.";
    case "Fear":
      return "You are deathly afraid of something. You lose a number of actions each round equal to your dots in this background when exposed to your fear.";
    case "Epileptic":
      return "No description available.";
    case "Fascination":
      return "You led a sheltered existence as a youth, so when you meet strangers or new cultures, culture shock affects you more. You become fascinated by a particular sight, sound, smell, or other experience related to this culture shock.";
    case "Provincial":
      return "You are from a provincial area. People tend to treat you like a yokel and you sometimes have culture shock.";
  }
};

export const describeReligion = (religion: Religion): string => {
  switch (religion) {
    case "Peratiem":
      return "Peratiem simply means the “good/right/true path/way” in Vuranatés, and is generally used to refer to the institutionalised form of the majority religion of much of Aneksom and Olovista that is particularly predominant in much of heartland Aneksom from Vuranat to Tenavat, and increasingly in Latavuran and the north (Farvanat and Kurvanat). Mainstream Peratiem is highly legalistic and thereby looks down on most sorts of mysticism. The Peratiem clergy likewise from upon sectarianism and are quicker than most to brand their rivals as heretics and unbelievers. Nonetheless, every powerful man and woman in Aneksom knows that the relative stability of the realm is in large part due precisely to the predominance, even at times harshness, of this very same institution.";
    case "Rekomethna":
      return "The geographical separation of “eastern” and “western” Aneksom has not only meant linguistic political separation but also a religious divergence that in many ways underpins the political aspect of the divergence. The Rekomethna faith is similar in many ways to the Peratiem faith, but differs significantly in matters of theology and eschatology. It was once the state religion of the Latanesi Empire, and continues to perform a similar role for its successor, the Empire of Herthualla. Other peoples once part of or affiliated with the old Empire also practice some form of this religion, though lack of political unity as well as ethnic and cultural differences have led to significant differences between the different variants.";
    case "Wardüshakeyim":
      return "During the dominion of the Vuranatés Empire, a preacher from Meraganat named Verdevas attempted to create a new faith by combining the existing religious beliefs existing in Aneksom at the time. His religion soon found followers in Farvanat, and from there spread far afield into Vanuguara and Takharna and even beyond through itinerant preachers founding numerous communities. While the Wardüshakeyim faith, as it has come to be known, has important features in common with the Peratiem and Rekomethna faiths, it is also distinct in its strong emphasis on asceticism, mystical practices, independent networks of monastic communities, and incorporation of local deities. To this day, there are scattered monastic communities of this faith in remote parts of northern Aneksom as well as Vitstantikh and even Kamvanat. It also still thrives in Vanuguara and part of Jomen as well as Takharna.";
  }
};

export const characterHasKnack = (
  character: Character,
  knack: Knack
): boolean =>
  character.knacks.some(({ knack: characterKnack }) => knack == characterKnack);

export const characterHasSkill = (
  character: Character,
  skill: Skill
): boolean =>
  character.knacks.some(({ skill: characterSkill }) => characterSkill == skill);

export const getBuffsForAdvantage = (advantage: Advantage): Buff[] => {
  switch (advantage) {
    case "Accurate Slinger":
      return [{ target: "Sling Attack", type: "knackIncrease", value: 5 }];
    case "Small":
      return [
        {
          target: "Stealth",
          type: "knackDiceIncrease",
          which: "ukd",
          value: 1,
        },
        { target: "Shadow", type: "knackDiceIncrease", which: "ukd", value: 1 },
        {
          target: "Unobtrusive",
          type: "knackDiceIncrease",
          which: "ukd",
          value: 1,
        },
      ];
    case "Man of the Cloth":
      return [
        { target: "Philosophy", type: "knackIncrease", value: 5 },
        { type: "reputationIncrease", value: 5 },
      ];
    case "Age and Wisdom":
      return knacks.filter(isMentalKnack).map(
        (knack) =>
          ({
            target: knack,
            type: "knackDiceIncrease",
            which: "ukd",
            value: 2,
          }) as KnackDiceIncrease
      );
    case "Debater":
      return [
        {
          target: "Oratory",
          type: "knackIncrease",
          value: 5,
        },
      ];

    case "Accurate Archer":
      return [{ target: "Bow Attack", type: "knackIncrease", value: 5 }];
    case "Battle Frenzy":
      return knacks
        .filter((knack) => getKnackTraits(knack).includes("Brawn"))
        .map((knack) => ({
          target: knack,
          type: "knackIncrease",
          value: 5,
          condition: "spend drama die to go berserk",
        }));
    case "Ordained":
      return [{ target: "Philosophy", type: "knackIncrease", value: 5 }];
    case "Firm Grip":
      return [{ target: "Grapple", type: "knackIncrease", value: 5 }];
    case "Keen Senses":
      return [{ target: "Perception", type: "knackIncrease", value: 5 }];
    case "Animal Affinitity":
      return [{ target: "Animal Training", type: "knackIncrease", value: 5 }];
    default:
      return [];
  }
};

export const getDebuffsForAdvantage = (advantage: Advantage): Debuff[] => {
  switch (advantage) {
    case "Age and Wisdom":
      return knacks.filter(isPhysicalKnack).map((knack) => ({
        target: knack,
        type: "knackDiceDecrease",
        which: "ukd",
        value: 1,
      }));

    default:
      return [];
  }
};

const isBuffForKnack =
  (knack: Knack) =>
  (buff: Buff): buff is KnackIncrease =>
    buff.type === "knackIncrease" && buff.target === knack;

const isBuffForKnackDice =
  (knack: Knack) =>
  (buff: Buff): buff is KnackDiceIncrease =>
    buff.type === "knackDiceIncrease" && buff.target === knack;

const isDebuffForKnackDice =
  (knack: Knack) =>
  (debuff: Debuff): debuff is KnackDiceDecrease =>
    debuff.type === "knackDiceDecrease" && debuff.target === knack;

type KnackModifier = {
  type: "knackModifier";
  value: number;
  source: Advantage;
  condition?: string;
};

type KnackDiceModifier = {
  type: "knackDiceModifier";
  value: number;
  which: "kept" | "ukd";
  source: Advantage;
  condition?: string;
};

export const getModifiersForCharacterKnack = (
  character: Character,
  knack: Knack
): KnackModifier[] => {
  return character.advantages.flatMap((advantage) =>
    getBuffsForAdvantage(advantage)
      .filter(isBuffForKnack(knack))
      .map(
        ({ value, condition }) =>
          ({
            type: "knackModifier",
            value,
            source: advantage,
            condition,
          }) as KnackModifier
      )
  );
};

export const getDiceModifiersForCharacterKnack = (
  character: Character,
  knack: Knack
): KnackDiceModifier[] => {
  return [
    ...character.advantages.flatMap((advantage) =>
      getBuffsForAdvantage(advantage)
        .filter(isBuffForKnackDice(knack))
        .map(
          ({ type, which, value }) =>
            ({
              type: "knackDiceModifier",
              value,
              which,
              source: advantage,
            }) as KnackDiceModifier
        )
    ),
    ...character.advantages.flatMap((advantage) =>
      getDebuffsForAdvantage(advantage)
        .filter(isDebuffForKnackDice(knack))
        .map(
          ({ value, which }) =>
            ({
              type: "knackDiceModifier",
              value: -value,
              which,
              source: advantage,
            }) as KnackDiceModifier
        )
    ),
  ];
};
