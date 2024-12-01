import _ from "lodash";
import { Character } from "./rules/characters";
import { Knack, knacks, skills } from "./rules/knacks";

const chikurnat: Character = {
  name: "Chikurnat",
  age: 13,
  pk: "chikurnat",
  portrait: null,
  context: {
    culture: "Vuranatés",
    religion: "Peratiem",
    spokenLanguages: [
      { language: "Vuranatés", proficiency: "Native" },
      { language: "Kurvanatés", proficiency: "Poor" },
      { language: "Sevachotés", proficiency: "Poor" },
    ],
    socialBackground: "Cleric",
    hubris: "Inattentive",
  },
  backgrounds: [
    { background: "Amnesia", level: 1 },
    { background: "Epileptic", level: 2 },
  ],
  advantages: [
    "Accurate Slinger",
    "Eagle Eyes",
    "Sensitive Bones",
    "Small",
    "Khutrash",
    "Island Hideaway",
    "Guardian Angel",
  ],
  knacks: [
    { knack: "Balance", level: 1, skill: "Acrobat" },
    { knack: "Roll", level: 1, skill: "Acrobat" },
    { knack: "Contortion", level: 1, skill: "Acrobat" },
    { knack: "Act", level: 1, skill: "Performer" },
    { knack: "Dance", level: 1, skill: "Performer" },
    { knack: "Sing", level: 1, skill: "Performer" },
    { knack: "Scrounge", level: 2, skill: "Urchin" },
    { knack: "Stealth", level: 1, skill: "Urchin" },
    { knack: "Survival", level: 1, skill: "Urchin" },
    { knack: "Street Navigation", level: 1, skill: "Urchin" },
    { knack: "Eye Gouge", level: 1, skill: "Dirty Fighting" },
    { knack: "Strike Vitals", level: 1, skill: "Dirty Fighting" },
    { knack: "Knife Attack", level: 1, skill: "Knife" },
    { knack: "Knife Parry", level: 1, skill: "Knife" },
    { knack: "Knife Throw", level: 1, skill: "Knife" },
    { knack: "Sling Attack", level: 2, skill: "Sling" },
    { knack: "Sling Trick Shot", level: 1, skill: "Sling" },
  ],
  traits: {
    Brawn: 1,
    Panache: 3,
    Resolve: 3,
    Wits: 4,
    Finesse: 4,
  },
  meta: {
    reputation: 2,
    karma: 2,
    experiencePoints: 8,
  },
};

const vaznarvet: Character = {
  name: "Vaznarvet Marzayat",
  pk: "vaznarvet",
  age: 65,
  portrait: null,
  context: {
    culture: "Vuranatés",
    religion: "Peratiem",
    spokenLanguages: [
      { language: "Vuranatés", proficiency: "Native" },
      { language: "Vuranahtaese", proficiency: "Literate" },
      { language: "Olovistiés", proficiency: "Fluent" },
    ],
    socialBackground: "Cleric",
    hubris: "Ambitious",
  },
  backgrounds: [
    { background: "Contentious Theory", level: 1 },
    { background: "Crisis of Faith", level: 1 },
    { background: "Ousted", level: 1 },
  ],
  advantages: [
    "Vuranatés Education",
    "University",
    "Age and Wisdom",
    "Debater",
    "Man of the Cloth",
    "Bodyguard",
    "Property (Cottage)",
    "Ordained",
    "Faith",
  ],
  knacks: [
    { knack: "Diagnosis", skill: "Physician", level: 3 },
    { knack: "First Aid", skill: "Physician", level: 2 },
    { knack: "Dentist", skill: "Physician", level: 1 },
    { knack: "Divination", skill: "Fortune Teller", level: 3 },
    { knack: "Astronomy", skill: "Fortune Teller", level: 2 },
    { knack: "Oratory", skill: "Priest", level: 2 },
    { knack: "Philosophy", skill: "Priest", level: 3 },
    { knack: "Writing", skill: "Priest", level: 3 },
    { knack: "History", skill: "Priest", level: 4 },
    { knack: "Research", skill: "Teacher", level: 3 },
    { knack: "Politics", skill: "Teacher", level: 2 },
    { knack: "Law", skill: "Teacher", level: 2 },
    { knack: "Staff Attack", skill: "Staff", level: 1 },
    { knack: "Staff Parry", skill: "Staff", level: 1 },
  ],
  traits: {
    Brawn: 1,
    Panache: 3,
    Resolve: 3,
    Wits: 5,
    Finesse: 1,
  },
  meta: {
    reputation: 0,
    karma: 0,
    experiencePoints: 0,
  },
};

const gresmarin: Character = {
  name: "Gresmarin",
  pk: "gresmarin",
  age: 26,
  portrait: null,
  context: {
    culture: "Takharna",
    religion: "Rekomethna",
    spokenLanguages: [],
    socialBackground: "Hunter",
    hubris: "Reckless",
  },
  backgrounds: [
    { background: "Drug Addict", level: 1 },
    { background: "Fear", level: 2 },
  ],
  advantages: [
    "Able Drinker",
    "Accurate Archer",
    "Battle Frenzy",
    "Cold Climate Conditioning",
    "Firm Grip",
    "Pain Tolerance",
    "Toughness",
    "Night Trained",
  ],
  knacks: [
    { knack: "Flora", skill: "Herbalist", level: 2 },
    { knack: "Perception", skill: "Herbalist", level: 2 },
    { knack: "Cook Basic Food", skill: "Cook", level: 2 },
    { knack: "Preserve Food", skill: "Cook", level: 2 },
    { knack: "Survival", skill: "Hunter", level: 3 },
    { knack: "Track", skill: "Hunter", level: 1 },
    { knack: "Climb", skill: "Athlete", level: 1 },
    { knack: "Footwork", skill: "Athlete", level: 1 },
    { knack: "Sprint", skill: "Athlete", level: 2 },
    { knack: "Bow Attack", skill: "Archer", level: 2 },
    { knack: "Fletcher", skill: "Archer", level: 2 },
    { knack: "Heavy Weapon Attack", skill: "Heavy Weapons", level: 2 },
    { knack: "Heavy Weapon Parry", skill: "Heavy Weapons", level: 2 },
    { knack: "Unarmed Attack", skill: "Dirty Fighting", level: 1 },
    { knack: "Tactics", skill: "Dirty Fighting", level: 1 },
    { knack: "Kick", skill: "Dirty Fighting", level: 1 },
    { knack: "Grapple", skill: "Wrestling", level: 2 },
    { knack: "Throw", skill: "Wrestling", level: 2 },
  ],
  traits: {
    Brawn: 3,
    Panache: 2,
    Resolve: 4,
    Wits: 3,
    Finesse: 3,
  },
  meta: {
    reputation: 0,
    karma: 0,
    experiencePoints: 0,
  },
};

const atrukh: Character = {
  name: "Atrukh",
  pk: "atrukh",
  age: 19,
  portrait: null,
  context: {
    culture: "Sevachotés",
    religion: "Wardüshakeyim",
    spokenLanguages: [
      { language: "Sevachotés", proficiency: "Native" },
      { language: "Kurvanatés", proficiency: "Poor" },
    ],
    socialBackground: "Nomad",
    hubris: "Hedonistic",
  },
  backgrounds: [
    { background: "Fascination", level: 1 },
    { background: "Provincial", level: 2 },
  ],
  advantages: [
    "Accurate Archer",
    "Cold Climate Conditioning",
    "Lightning Reflexes",
    "Toughness",
    "Eagle Eyes",
    "Keen Senses",
    "Sensitive Bones",
    "Animal Affinitity",
  ],
  knacks: [
    { knack: "Sing", skill: "Bard", level: 1 },
    { knack: "Storytelling", skill: "Bard", level: 1 },
    { knack: "Flora", skill: "Herbalist", level: 2 },
    { knack: "Perception", skill: "Herbalist", level: 2 },
    { knack: "Survival", skill: "Hunter", level: 1 },
    { knack: "Track", skill: "Hunter", level: 1 },
    { knack: "Animal Training", skill: "Hunter", level: 1 },
    { knack: "Climb", skill: "Athlete", level: 1 },
    { knack: "Footwork", skill: "Athlete", level: 2 },
    { knack: "Sprint", skill: "Athlete", level: 1 },
    { knack: "Bow Attack", skill: "Archer", level: 1 },
    { knack: "Fletcher", skill: "Archer", level: 1 },
    { knack: "Horse Archery", skill: "Archer", level: 1 },
    { knack: "Fencing Attack", skill: "Fencing", level: 1 },
    { knack: "Fencing Parry", skill: "Fencing", level: 1 },
    { knack: "Cavalry Attack", skill: "Fencing", level: 1 },
    { knack: "Ride", skill: "Rider", level: 2 },
    { knack: "Mount", skill: "Rider", level: 1 },
    { knack: "Whip Attack", skill: "Whip", level: 2 },
    { knack: "Entangle", skill: "Whip", level: 2 },
  ],
  traits: {
    Brawn: 3,
    Panache: 2,
    Resolve: 3,
    Wits: 3,
    Finesse: 3,
  },
  meta: {
    reputation: 0,
    karma: 0,
    experiencePoints: 0,
  },
};

const characters: Character[] = [chikurnat, vaznarvet, gresmarin, atrukh];

export async function listCharacters() {
  return characters;
}

export async function getCharacter(pk: string) {
  return _.find(characters, { pk });
}

export async function listKnacks() {
  return knacks;
}

export async function listSkills() {
  return skills;
}
