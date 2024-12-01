export type Trait = "Brawn" | "Panache" | "Resolve" | "Wits" | "Finesse";

export const knacks = [
  "Act",
  "Animal Training",
  "Appraise",
  "Architecture",
  "Astronomy",
  "Balance",
  "Blowpipe Attack",
  "Bow Attack",
  "Cavalry Attack",
  "Chain Attack",
  "Climb",
  "Cloak Parry",
  "Compounds",
  "Contortion",
  "Cook Basic Food",
  "Craft Basic Armour",
  "Craft Basic Clothes",
  "Craft Basic Weapons",
  "Craft",
  "Crossbow Attack",
  "Crossbow Reload",
  "Dance",
  "Dentist",
  "Diagnosis",
  "Diplomacy",
  "Disguise",
  "Divination",
  "Draw",
  "Entangle",
  "Etiquette",
  "Eye Gouge",
  "Fashion",
  "Fencing Attack",
  "Fencing Parry",
  "First Aid",
  "Fletcher",
  "Flora",
  "Footwork",
  "Forgery",
  "Grapple",
  "Heavy Weapon Attack",
  "Heavy Weapon Parry",
  "History",
  "Horse Archery",
  "Interpose",
  "Jab",
  "Kick",
  "Knife Attack",
  "Knife Parry",
  "Knife Throw",
  "Knotwork",
  "Law",
  "Leadership",
  "Leap",
  "Mathematics",
  "Mount",
  "Music",
  "Occult",
  "Oratory",
  "Perception",
  "Philosophy",
  "Politics",
  "Preserve Food",
  "Research",
  "Restore Basic Armour",
  "Restore Basic Weapons",
  "Ride",
  "Rigging",
  "Roll",
  "Scrounge",
  "Sculpt",
  "Shadow",
  "Sharpen Blades",
  "Sincerity",
  "Sing",
  "Sling Attack",
  "Sling Trick Shot",
  "Socialize",
  "Sprint",
  "Staff Attack",
  "Staff Parry",
  "Stealth",
  "Storytelling",
  "Strategy",
  "Street Navigation",
  "Strike Vitals",
  "Survival",
  "Tactics",
  "Throw",
  "Track",
  "Unarmed Attack",
  "Underworld Lore",
  "Unobtrusive",
  "Whip Attack",
  "Writing",
] as const;
export type Knack = (typeof knacks)[number];

export const skills = [
  "Acrobat",
  "Alchemy",
  "Archaeologist",
  "Archer",
  "Arsonist",
  "Artist",
  "Athlete",
  "Bard",
  "Blacksmith",
  "Blowpipe",
  "Bodyguard",
  "Bomb-Maker",
  "Captain",
  "Chain",
  "Cloak",
  "Commander",
  "Cook",
  "Courtesan",
  "Courtier",
  "Criminal",
  "Crossbow",
  "Dirty Fighting",
  "Engineer",
  "Fencing",
  "Forger",
  "Fortune Teller",
  "Heavy Weapons",
  "Herbalist",
  "Hunter",
  "Knife",
  "Maintenance",
  "Merchant",
  "Performer",
  "Physician",
  "Politician",
  "Priest",
  "Pugilism",
  "Rider",
  "Sailor",
  "Scholar",
  "Servant",
  "Sling",
  "Spy",
  "Staff",
  "Streetwise",
  "Tailor",
  "Teacher",
  "Urchin",
  "Whip",
  "Wrestling",
] as const;
export type Skill = (typeof skills)[number];

type SkillType = "Martial" | "Civil";

export const describeKnack = (knack: Knack): string => {
  switch (knack) {
    case "Act":
      return "Stage acting, but may be used to act in any context.";
    case "Animal Training":
      return "May teach tamed animals tricks at a TN dependent on the complexity of the trick.";
    case "Appraise":
      return "Determines the authenticity and monetary value of items.";
    case "Architecture":
      return "Knowledge of the layout and construction of any type of building.";
    case "Astronomy":
      return "Knowledge of the stars, their positions, and their meanings";
    case "Cavalry Attack":
      return "(F)+(Cavalry Attack)k(F) to attack from horseback, dealing +1 ukd of damage if successful";
    case "Contortion":
      return "Used to move through small spaces or to break out of bindings.";
    case "Craft":
      return "Specify a craft; knowledge of how to make, repair, or identify that craft.";
    case "Balance":
      return "Used to maintain balance in feet and the rest of the body; used for “sea legs” and Passive Defence at sea";
    case "Chain Attack":
      return "Basic chain attack";
    case "Climb":
      return "Used to scale climbable surfaces, with or without tools.";
    case "Cloak Parry":
      return "Basic defensive knack for cloaks";
    case "Compounds":
      return "Create natural tinctures from items gathered from the wild";
    case "Crossbow Attack":
      return "Basic crossbow attack";
    case "Crossbow Reload":
      return "(F)+(Reload)k(F) to reload a crossbow. Base TN is 10, and (6-Reload) raises must be taken over any number of actions to finish reloading";
    case "Dance":
      return "Used to dance, in any style or context";
    case "Dentist":
      return "Used to repair teeth";
    case "Diagnosis":
      return "Determines the cause of illness, injury, or death; lowers TN of Surgery.";
    case "Diplomacy":
      return "Used to mollify hostile or neutral characters";
    case "Disguise":
      return "Used to look and dress in another appearance, or to notice someone doing the same";
    case "Divination":
      return "Use cards, bones, or some other method to vaguely predict the future, or pretend to do so.";
    case "Draw":
      return "Artistic or technical drawing; the ability to reproduce images in a visual medium";
    case "Entangle":
      return "Attack with (F)+(Entangle)k(F) to raise your opponent's next action die by 1 + 1 for each raise. If that action is raised above 10, it is lost for the round.";
    case "Etiquette":
      return "Knowledge of customs and acting properly in any context.";
    case "Eye Gouge":
      return "(F)+(Eye Gouge)k(F) to inflict 1k1 damage and raise the opponent's next action die by 1/2 your dots in this knack (rounded up). If that action is raised above 10, it is lost.";
    case "Fashion":
      return "Knowledge of how to look one's best and current fashion trends in courts around the world.";
    case "Fletcher":
      return "Used to make and repair arrows or other missiles with feathered fletching";
    case "First Aid":
      return "(W)+(First Aid)k(W) against a TN equal to a subject's Flesh Wounds heals all those Flesh Wounds, takes one action in combat; may also be used to stabilize an incapacitated person and prevent complication or death for a short time.";
    case "Flora":
      return "Used to find, identify and utilize plants from the wild";
    case "Footwork":
      return "Freedom of movement in the feet, usually used in combat (as Passive Defence)";
    case "Forgery":
      return "Used to replicate written or drawn works";
    case "History":
      return "Knowledge of the past, TN determined by the obscurity and geography of the knowledge";
    case "Horse Archery":
      return "Basic bow attack used while on horseback (negates significant penalties to shooting while riding and avoids a ride check to stay on the horse when shooting)";
    case "Interpose":
      return "(W)+(Interpose)k(W) as an Active Defence for someone else in melee range. Success intercepts and parries the attack; failure intercepts the attack, which then succeeds upon you. You gain reputation if you are dealt a Dramatic Wound";
    case "Jab":
      return "(F)+(Jab)k(F) to attack twice with this die pool in one action. Both attacks must take two raises and deal the weapon's damage as per a normal attack.";
    case "Knotwork":
      return "Used to tie and untie knots. Contested (B)+(Knotwork)k(B) to bind or break bindings.";
    case "Law":
      return "Used to know about and manipulate laws of various lands.";
    case "Leadership":
      return "Used to inspire troops, lead by example, guide henchmen, and boost morale";
    case "Leap":
      return "Used to jump high or long";
    case "Mathematics":
      return "Knowledge of mathematical formulae and their applications.";
    case "Music":
      return "Used to perform or compose instrumental music";
    case "Occult":
      return "Knowledge of secret societies, ancient mysteries, and forbidden knowledge";
    case "Oratory":
      return "Used to give speeches (not dialogue) to individuals or groups";
    case "Perception":
      return "Opposes stealth and similar knacks, used to notice things";
    case "Philosophy":
      return "Knowledge of logic and philosophical constructions. May be used to persuade.";
    case "Politics":
      return "Used to know a person's reputation and social standing and how to best contact or deal with them.";
    case "Research":
      return "Used as generic ability to find information in anything but word-of-mouth. Specific subjects may use their own knacks, but this may be used instead at higher TN. If no specific knack exists for what is being researched, this knack applies normally.";
    case "Ride":
      return "Used to ride a horse or any other beast of burden";
    case "Rigging":
      return "Used to operate or repair a ship's sailing apparatus";
    case "Roll":
      return "Used to tumble around or through tight spots or to dodge missiles";
    case "Scrounge":
      return "Used to find items in a scene either quickly or carefully.";
    case "Sculpt":
      return "Used to shape stone, clay, or other materials into art";
    case "Shadow":
      return "Used to follow a target while remaining unnoticed";
    case "Sincerity":
      return "Used to project honesty (whether in a lie or to be genuine to someone who does not believe your honesty), or to detect others' use of sincerity.";
    case "Sing":
      return "Used to perform sung music or lyric poetry.";
    case "Socialize":
      return "Used to carouse or schmooze with anyone outside of a formal context. May influence the subject's attitude or gain information";
    case "Sprint":
      return "Used to run short or long distances.";
    case "Staff Attack":
      return "Basic staff attack";
    case "Staff Parry":
      return "Basic defensive knack for staves";
    case "Stealth":
      return "Used to remain literally unseen and unheard";
    case "Storytelling":
      return "Used to tell true or false tales to crowds in a combination of creativity and memory. May influence people's attitude and treatment of reputation.";
    case "Strike Vitals":
      return "(F)+(Strike Vitals)k(F) with three raises to attack. Successful attack deals no flesh wounds but does one Dramatic Wound instead.";
    case "Survival":
      return "Used to know how to live off the land or in harsh conditions, what to do, and what to avoid.";
    case "Tactics":
      return "Used to execute battle plans in a shorter-term, more immediate sense than Strategy. Used in Mass Combat.";
    case "Throw":
      return "Used to throw anything that is not a weapon, including improvised weapons. TN is determined by the size and shape of the object. If used as an attack, the TN is the opponent's Passive Defence, but one raise must be taken";
    case "Track":
      return "Used to pick up and follow a person or animal form well outside of visual contact, using clues and environmental knowledge.";
    case "Unarmed Attack":
      return "Basic unarmed attack";
    case "Underworld Lore":
      return "Used to know, find out, or safely use information about organized crime, black markets, and other underworld activities.";
    case "Unobtrusive":
      return "Used to go unnoticed but not literally unseen in any situation. Contested by Perception, but the specifics of the scene (the number of people present, the character's conspicuousness, etc) may require raises.";
    case "Writing":
      return "Used to compose clear, concise, artistic, or technical writing of any kind.";
    case "Knife Attack":
      return "Basic knife attack";
    case "Knife Parry":
      return "Basic defensive knack for knives";
    case "Knife Throw":
      return "(F)+(Throw)k(F) is used to attack by throwing a small knife. Successful attack inflicts (B)+1k1 damage. Larger knives (1k2 damage) not made for throwing may be thrown by taking one raise";
    case "Sling Attack":
      return "Basic sling attack";
    case "Sling Trick Shot":
      return "Each dot negates one raise worth of penalty to any basic sling attack, including range, cover, shooting into melee, and other factors";
    case "Street Navigation":
      return "Used to know quick or safe routes in urban settings and how to navigate them. May be used in place of Sprint during chases in dense cities";
    case "Strategy":
      return "Used for long-view planning and anticipation of battle plans. Used in mass combat";
    case "Bow Attack":
      return "Basic bow attack";
    case "Grapple":
      return "(F)+(Grapple)k(F) to enter grapple as a normal attack (which deals no damage). Allows the characters in the grapple to use knacks that require Grapple; combatants’ Passive Defence must both use (W*4)+(Grapple*3). Used while in a grapple to maneuver and pin. (B)+(Grapple)k(B) contests escape.";
    case "Heavy Weapon Attack":
      return "Basic large sword or axe attack";
    case "Heavy Weapon Parry":
      return "Basic defensive knack for large swords or axes";
    case "Kick":
      return "(F)+(Kick)k(F) to attack. Successful damage deals (B)k2 instead of the normal (B)k1 for unarmed attacks. Your passive Defence is reduced by 5 for 3 rounds (including this one) whether you hit or not";
    case "Blowpipe Attack":
      return "Basic blowpipe attack";
    case "Fencing Attack":
      return "Basic fencing sword attack";
    case "Fencing Parry":
      return "Basic defensive knack for fencing swords";
    case "Mount":
      return "Used to mount a horse quickly or under duress (such as a vaulting leap or falling onto a horse from a rooftop)";
    case "Whip Attack":
      return "Basic whip attack";
    case "Craft Basic Armour":
    case "Craft Basic Weapons":
    case "Restore Basic Armour":
    case "Restore Basic Weapons":
    case "Sharpen Blades":
    case "Craft Basic Clothes":
    case "Cook Basic Food":
    case "Preserve Food":
      return "";
  }
};

export const getKnackSkills = (knack: Knack): Skill[] => {
  switch (knack) {
    case "Astronomy":
      return ["Fortune Teller", "Scholar"];
    case "Animal Training":
      return ["Hunter", "Performer", "Rider"];
    case "Stealth":
      return ["Arsonist", "Criminal", "Hunter", "Spy", "Urchin"];
    case "Footwork":
      return ["Acrobat", "Athlete", "Pugilism"];
    case "Leap":
      return ["Athlete", "Acrobat"];
    case "Unarmed Attack":
      return ["Dirty Fighting", "Pugilism"];
    case "Throw":
      return ["Athlete"];
    case "Jab":
      return ["Pugilism", "Staff"];
    case "Climb":
      return ["Athlete", "Sailor"];
    case "Sprint":
      return ["Athlete"];
    case "Knotwork":
      return ["Sailor"];
    case "Rigging":
      return ["Sailor"];
    case "Staff Attack":
    case "Staff Parry":
      return ["Staff"];
    case "Tactics":
      return ["Commander", "Dirty Fighting", "Hunter"];
    case "Leadership":
      return ["Commander", "Captain"];
    case "Diplomacy":
      return ["Captain", "Courtier"];
    case "Etiquette":
      return ["Courtesan", "Courtier", "Politician", "Servant"];
    case "Fashion":
      return ["Courtesan", "Courtier", "Servant"];
    case "Oratory":
      return ["Bard", "Politician", "Teacher"];
    case "Unobtrusive":
      return ["Bodyguard", "Courtesan", "Servant"];
    case "Politics":
      return ["Courtier", "Politician"];
    case "Socialize":
      return ["Merchant", "Politician", "Streetwise"];
    case "Perception":
      return [
        "Archaeologist",
        "Bomb-Maker",
        "Criminal",
        "Forger",
        "Fortune Teller",
        "Herbalist",
        "Hunter",
        "Servant",
      ];
    case "History":
      return ["Archaeologist", "Bard", "Priest", "Scholar"];
    case "Research":
      return ["Alchemy", "Archaeologist", "Forger", "Scholar", "Teacher"];
    case "Music":
      return ["Artist", "Bard"];
    case "Writing":
      return ["Artist", "Forger", "Priest", "Teacher"];
    case "Craft":
      return [
        "Alchemy",
        "Bomb-Maker",
        "Engineer",
        "Forger",
        "Merchant",
        "Blacksmith",
        "Maintenance",
        "Tailor",
      ];
    case "Craft Basic Armour":
    case "Craft Basic Weapons":
    case "Restore Basic Armour":
    case "Restore Basic Weapons":
      return ["Blacksmith"];
    case "Occult":
      return ["Alchemy", "Archaeologist", "Bard", "Fortune Teller", "Scholar"];
    case "Draw":
      return ["Artist", "Engineer"];
    case "Sculpt":
      return ["Artist"];
    case "Interpose":
      return ["Bodyguard"];
    case "Shadow":
      return ["Bodyguard", "Criminal", "Spy"];
    case "Mathematics":
      return ["Arsonist", "Bomb-Maker", "Engineer", "Scholar"];
    case "Architecture":
      return ["Archaeologist", "Arsonist", "Engineer"];
    case "Forgery":
      return ["Forger"];
    case "Divination":
      return ["Fortune Teller"];
    case "Diagnosis":
      return ["Herbalist", "Physician"];
    case "Appraise":
      return ["Merchant", "Streetwise"];
    case "Law":
      return ["Merchant", "Politician", "Scholar", "Teacher"];
    case "Compounds":
      return ["Herbalist", "Physician"];
    case "First Aid":
      return ["Physician", "Herbalist"];
    case "Philosophy":
      return ["Priest", "Scholar"];
    case "Craft Basic Clothes":
      return ["Tailor"];
    case "Balance":
    case "Roll":
      return ["Acrobat"];
    case "Contortion":
      return ["Acrobat"];
    case "Act":
      return ["Courtesan", "Fortune Teller", "Performer"];
    case "Dance":
      return ["Courtesan", "Courtier", "Performer"];
    case "Sing":
      return ["Bard", "Performer"];
    case "Scrounge":
      return ["Streetwise", "Urchin"];
    case "Survival":
      return ["Hunter", "Urchin"];
    case "Eye Gouge":
      return ["Dirty Fighting"];
    case "Strike Vitals":
      return ["Dirty Fighting", "Pugilism"];
    case "Flora":
      return ["Herbalist", "Hunter"];
    case "Track":
      return ["Hunter", "Urchin"];
    case "Disguise":
      return ["Performer", "Spy"];
    case "Sincerity":
      return ["Courtesan", "Politician", "Spy", "Urchin"];
    case "Underworld Lore":
      return ["Forger", "Streetwise"];
    case "Knife Attack":
    case "Knife Parry":
    case "Knife Throw":
      return ["Knife"];
    case "Sling Attack":
    case "Sling Trick Shot":
      return ["Sling"];
    case "Street Navigation":
      return ["Arsonist", "Streetwise", "Urchin"];
    case "Strategy":
      return ["Captain", "Commander"];
    case "Dentist":
      return ["Physician"];
    case "Bow Attack":
      return ["Archer"];
    case "Cook Basic Food":
      return ["Cook"];
    case "Grapple":
      return ["Wrestling"];
    case "Heavy Weapon Attack":
    case "Heavy Weapon Parry":
      return ["Heavy Weapons"];
    case "Kick":
      return ["Dirty Fighting"];
    case "Preserve Food":
      return ["Cook"];
    case "Fletcher":
      return ["Archer", "Blowpipe", "Crossbow"];
    case "Crossbow Attack":
      return ["Crossbow"];
    case "Crossbow Reload":
      return ["Crossbow"];
    case "Blowpipe Attack":
      return ["Blowpipe"];
    case "Storytelling":
      return ["Bard", "Performer"];
    case "Ride":
    case "Mount":
      return ["Rider"];
    case "Horse Archery":
      return ["Archer"];
    case "Fencing Attack":
    case "Fencing Parry":
    case "Cavalry Attack":
      return ["Fencing"];
    case "Entangle":
      return ["Chain", "Cloak", "Whip"];
    case "Whip Attack":
      return ["Whip"];
    case "Chain Attack":
      return ["Chain"];
    case "Cloak Parry":
      return ["Cloak"];
    case "Sharpen Blades":
      return [];
  }
};

export const getKnackTraits = (knack: Knack): Trait[] => {
  switch (knack) {
    case "Balance":
      return ["Finesse"];
    case "Animal Training":
      return ["Resolve"];
    case "Roll":
      return ["Finesse", "Wits"];
    case "Contortion":
      return ["Finesse"];
    case "Act":
      return ["Panache"];
    case "Dance":
      return ["Panache"];
    case "Sing":
      return ["Panache"];
    case "Scrounge":
      return ["Wits", "Resolve"];
    case "Stealth":
      return ["Finesse"];
    case "Survival":
      return ["Wits", "Resolve"];
    case "Eye Gouge":
      return ["Finesse"];
    case "Strike Vitals":
      return ["Finesse"];
    case "Knife Attack":
      return ["Finesse"];
    case "Knife Parry":
      return ["Wits"];
    case "Knife Throw":
      return ["Finesse"];
    case "Sling Attack":
      return ["Finesse"];
    case "Sling Trick Shot":
      return ["Finesse"];
    case "Street Navigation":
      return ["Brawn", "Wits"];
    case "Strategy":
      return ["Wits"];
    case "Footwork":
      return ["Finesse"];
    case "Leap":
      return ["Brawn"];
    case "Unarmed Attack":
      return ["Finesse"];
    case "Throw":
      return ["Brawn"];
    case "Jab":
      return ["Finesse"];
    case "Climb":
      return ["Brawn"];
    case "Sprint":
      return ["Brawn", "Resolve"];
    case "Knotwork":
      return ["Brawn", "Finesse"];
    case "Rigging":
      return ["Brawn", "Resolve"];
    case "Staff Attack":
      return ["Finesse"];
    case "Staff Parry":
      return ["Wits"];
    case "Tactics":
      return ["Wits"];
    case "Leadership":
      return ["Panache"];
    case "Diplomacy":
      return ["Panache"];
    case "Etiquette":
      return ["Wits", "Panache"];
    case "Fashion":
      return ["Wits", "Panache"];
    case "Oratory":
      return ["Panache"];
    case "Unobtrusive":
      return ["Panache"];
    case "Politics":
      return ["Wits", "Panache"];
    case "Socialize":
      return ["Panache"];
    case "Perception":
      return ["Wits", "Resolve"];
    case "History":
      return ["Wits"];
    case "Research":
      return ["Wits", "Resolve"];
    case "Music":
      return ["Wits", "Panache"];
    case "Writing":
      return ["Wits"];
    case "Occult":
      return ["Wits"];
    case "Draw":
      return ["Wits"];
    case "Sculpt":
      return ["Finesse", "Wits"];
    case "Interpose":
      return ["Wits"];
    case "Shadow":
      return ["Finesse"];
    case "Craft":
      return ["Finesse", "Resolve"];
    case "Mathematics":
      return ["Wits"];
    case "Architecture":
      return ["Wits"];
    case "Forgery":
      return ["Wits"];
    case "Divination":
      return ["Resolve", "Panache"];
    case "Diagnosis":
      return ["Wits"];
    case "Appraise":
      return ["Wits"];
    case "Law":
      return ["Wits"];
    case "Compounds":
      return ["Wits"];
    case "Philosophy":
      return ["Wits"];
    case "First Aid":
      return ["Wits"];
    case "Flora":
      return ["Wits", "Resolve"];
    case "Track":
      return ["Wits", "Resolve"];
    case "Disguise":
      return ["Wits", "Panache"];
    case "Sincerity":
      return ["Wits", "Panache"];
    case "Underworld Lore":
      return ["Wits", "Panache"];
    case "Astronomy":
      return ["Wits"];
    case "Dentist":
      return ["Wits"];
    case "Bow Attack":
      return ["Finesse"];
    case "Grapple":
      return ["Finesse", "Brawn"];
    case "Heavy Weapon Attack":
      return ["Finesse"];
    case "Heavy Weapon Parry":
      return ["Wits"];
    case "Kick":
      return ["Finesse"];
    case "Fletcher":
      return ["Finesse", "Resolve"];
    case "Crossbow Attack":
    case "Crossbow Reload":
      return ["Finesse"];
    case "Blowpipe Attack":
      return ["Finesse"];
    case "Storytelling":
      return ["Panache"];
    case "Ride":
      return ["Finesse"];
    case "Horse Archery":
      return ["Finesse"];
    case "Fencing Attack":
      return ["Finesse"];
    case "Fencing Parry":
      return ["Wits"];
    case "Cavalry Attack":
      return ["Finesse"];
    case "Mount":
      return ["Finesse"];
    case "Entangle":
      return ["Finesse"];
    case "Whip Attack":
      return ["Finesse"];
    case "Chain Attack":
      ["Finesse"];
    case "Cloak Parry":
      ["Wits"];
    case "Preserve Food":
    case "Craft Basic Armour":
    case "Craft Basic Weapons":
    case "Restore Basic Armour":
    case "Restore Basic Weapons":
    case "Sharpen Blades":
    case "Craft Basic Clothes":
    case "Cook Basic Food":
      return [];
  }
};

export const getSkillType = (skill: Skill): SkillType => {
  switch (skill) {
    case "Acrobat":
    case "Alchemy":
    case "Archaeologist":
    case "Arsonist":
    case "Artist":
    case "Athlete":
    case "Bard":
    case "Blacksmith":
    case "Bomb-Maker":
    case "Cook":
    case "Courtesan":
    case "Courtier":
    case "Criminal":
    case "Engineer":
    case "Forger":
    case "Fortune Teller":
    case "Herbalist":
    case "Hunter":
    case "Maintenance":
    case "Merchant":
    case "Performer":
    case "Physician":
    case "Politician":
    case "Priest":
    case "Sailor":
    case "Scholar":
    case "Servant":
    case "Spy":
    case "Streetwise":
    case "Tailor":
    case "Teacher":
    case "Urchin":
      return "Civil";
    case "Archer":
    case "Blowpipe":
    case "Bodyguard":
    case "Captain":
    case "Chain":
    case "Cloak":
    case "Commander":
    case "Crossbow":
    case "Dirty Fighting":
    case "Fencing":
    case "Heavy Weapons":
    case "Knife":
    case "Pugilism":
    case "Rider":
    case "Sling":
    case "Staff":
    case "Whip":
    case "Wrestling":
      return "Martial";
  }
};

export const getSkillBasicKnacks = (skill: Skill): Knack[] => {
  switch (skill) {
    case "Acrobat":
      return ["Balance", "Footwork", "Leap", "Roll"];
    case "Athlete":
      return ["Climb", "Footwork", "Sprint", "Throw"];
    case "Pugilism":
      return ["Unarmed Attack", "Footwork", "Jab"];
    case "Sailor":
      return ["Balance", "Climb", "Knotwork", "Rigging"];
    case "Staff":
      return ["Staff Attack", "Staff Parry"];
    case "Performer":
      return ["Act", "Dance", "Sing"];
    case "Urchin":
      return ["Scrounge", "Stealth", "Street Navigation", "Survival"];
    case "Dirty Fighting":
      return ["Unarmed Attack", "Tactics"];
    case "Commander":
      return ["Leadership", "Strategy", "Tactics"];
    case "Captain":
      return ["Diplomacy", "Leadership", "Strategy"];
    case "Courtier":
      return ["Dance", "Etiquette", "Fashion", "Oratory"];
    case "Courtesan":
      return ["Act", "Dance", "Etiquette", "Fashion", "Unobtrusive"];
    case "Politician":
      return ["Etiquette", "Oratory", "Politics", "Socialize"];
    case "Servant":
      return ["Etiquette", "Fashion", "Perception", "Unobtrusive"];
    case "Archaeologist":
      return ["History", "Perception", "Research"];
    case "Bard":
      return ["History", "Music", "Oratory", "Sing"];
    case "Teacher":
      return ["Oratory", "Research", "Writing"];
    case "Alchemy":
      return ["Craft", "Occult", "Research"];
    case "Artist":
      return ["Draw", "Music", "Sculpt", "Writing"];
    case "Blacksmith":
      return [
        "Craft",
        "Craft Basic Weapons",
        "Craft Basic Armour",
        "Restore Basic Armour",
        "Restore Basic Weapons",
      ];
    case "Bodyguard":
      return ["Interpose", "Shadow", "Unobtrusive"];
    case "Bomb-Maker":
      return ["Craft", "Mathematics", "Perception"];
    case "Engineer":
      return ["Architecture", "Craft", "Draw", "Mathematics"];
    case "Forger":
      return ["Craft", "Forgery", "Perception", "Research", "Writing"];
    case "Fortune Teller":
      return ["Act", "Divination", "Occult", "Perception"];
    case "Herbalist":
      return [
        "Diagnosis",
        "Divination",
        "Occult",
        "Perception",
        "Compounds",
        "First Aid",
      ];
    case "Maintenance":
      return [
        "Restore Basic Armour",
        "Restore Basic Weapons",
        "Sharpen Blades",
      ];
    case "Merchant":
      return ["Appraise", "Craft", "Law", "Socialize"];
    case "Physician":
      return ["Compounds", "Diagnosis", "First Aid"];
    case "Priest":
      return ["Oratory", "Philosophy", "Unobtrusive", "Writing"];
    case "Scholar":
      return ["History", "Mathematics", "Philosophy", "Research"];
    case "Streetwise":
      return ["Appraise", "Perception", "Socialize", "Street Navigation"];
    case "Tailor":
      return ["Craft Basic Clothes"];
    case "Knife":
      return ["Knife Attack", "Knife Parry"];
    case "Sling":
      return ["Sling Attack"];
    case "Arsonist":
      return ["Mathematics", "Stealth", "Street Navigation"];
    case "Hunter":
      return ["Flora", "Perception", "Survival", "Tactics", "Track"];
    case "Spy":
      return ["Disguise", "Shadow", "Sincerity", "Stealth"];
    case "Criminal":
      return ["Perception", "Shadow", "Stealth", "Underworld Lore"];
    case "Archer":
      return ["Bow Attack", "Fletcher"];
    case "Cook":
      return ["Cook Basic Food", "Preserve Food"];
    case "Heavy Weapons":
      return ["Heavy Weapon Attack", "Heavy Weapon Parry"];
    case "Wrestling":
      return ["Grapple"];
    case "Crossbow":
      return ["Crossbow Attack", "Crossbow Reload", "Fletcher"];
    case "Blowpipe":
      return ["Blowpipe Attack", "Fletcher"];
    case "Rider":
      return ["Ride"];
    case "Fencing":
      return ["Fencing Attack", "Fencing Parry"];
    case "Chain":
      return ["Chain Attack"];
    case "Cloak":
      return ["Cloak Parry"];
    case "Whip":
      return ["Whip Attack"];
  }
};

export const isMentalKnack = (knack: Knack): boolean => {
  switch (knack) {
    case "Act":
      return false;
    case "Animal Training":
      return false;
    case "Appraise":
      return true;
    case "Architecture":
      return false;
    case "Astronomy":
      return true;
    case "Balance":
    case "Blowpipe Attack":
    case "Bow Attack":
    case "Cavalry Attack":
    case "Chain Attack":
    case "Climb":
    case "Cloak Parry":
      return false;
    case "Compounds":
      return true;
    case "Contortion":
    case "Cook Basic Food":
    case "Craft Basic Armour":
    case "Craft Basic Clothes":
    case "Craft Basic Weapons":
    case "Craft":
    case "Crossbow Attack":
    case "Crossbow Reload":
    case "Dance":
    case "Dentist":
      return false;
    case "Diagnosis":
    case "Diplomacy":
      return true;
    case "Disguise":
      return false;
    case "Divination":
      return true;
    case "Draw":
    case "Entangle":
      return false;
    case "Etiquette":
      return true;
    case "Eye Gouge":
    case "Fashion":
    case "Fencing Attack":
    case "Fencing Parry":
    case "First Aid":
    case "Fletcher":
      return false;
    case "Flora":
      return true;
    case "Footwork":
    case "Forgery":
    case "Grapple":
    case "Heavy Weapon Attack":
    case "Heavy Weapon Parry":
      return false;
    case "History":
      return true;
    case "Horse Archery":
    case "Interpose":
    case "Jab":
    case "Kick":
    case "Knife Attack":
    case "Knife Parry":
    case "Knife Throw":
    case "Knotwork":
      return false;
    case "Law":
    case "Leadership":
      return true;
    case "Leap":
      return false;
    case "Mathematics":
      return true;
    case "Mount":
    case "Music":
      return false;
    case "Occult":
      return true;
    case "Oratory":
    case "Perception":
      return false;
    case "Philosophy":
    case "Politics":
      return true;
    case "Preserve Food":
      return false;
    case "Research":
      return true;
    case "Restore Basic Armour":
    case "Restore Basic Weapons":
    case "Ride":
    case "Rigging":
    case "Roll":
    case "Scrounge":
    case "Sculpt":
    case "Shadow":
    case "Sharpen Blades":
      return false;
    case "Sincerity":
      return true;
    case "Sing":
    case "Sling Attack":
    case "Sling Trick Shot":
      return false;
    case "Socialize":
      return true;
    case "Sprint":
    case "Staff Attack":
    case "Staff Parry":
    case "Stealth":
      return false;
    case "Storytelling":
    case "Strategy":
      return true;
    case "Street Navigation":
    case "Strike Vitals":
      return false;
    case "Survival":
    case "Tactics":
      return true;
    case "Throw":
    case "Track":
    case "Unarmed Attack":
      return false;
    case "Underworld Lore":
      return true;
    case "Unobtrusive":
    case "Whip Attack":
      return false;
    case "Writing":
      return true;
  }
};

export const isPhysicalKnack = (knack: Knack): boolean => {
  switch (knack) {
    case "Act":
    case "Animal Training":
    case "Appraise":
    case "Architecture":
    case "Astronomy":
      return false;
    case "Balance":
    case "Blowpipe Attack":
    case "Bow Attack":
    case "Cavalry Attack":
    case "Chain Attack":
    case "Climb":
    case "Cloak Parry":
      return true;
    case "Compounds":
      return false;
    case "Contortion":
      return true;
    case "Cook Basic Food":
    case "Craft Basic Armour":
    case "Craft Basic Clothes":
    case "Craft Basic Weapons":
    case "Craft":
      return false;
    case "Crossbow Attack":
    case "Crossbow Reload":
    case "Dance":
      return true;
    case "Dentist":
    case "Diagnosis":
    case "Diplomacy":
    case "Disguise":
    case "Divination":
    case "Draw":
      return false;
    case "Entangle":
      return true;
    case "Etiquette":
      return false;
    case "Eye Gouge":
      return true;
    case "Fashion":
      return false;
    case "Fencing Attack":
    case "Fencing Parry":
      return true;
    case "First Aid":
    case "Fletcher":
    case "Flora":
      return false;
    case "Footwork":
      return true;
    case "Forgery":
      return false;
    case "Grapple":
    case "Heavy Weapon Attack":
    case "Heavy Weapon Parry":
      return true;
    case "History":
      return false;
    case "Horse Archery":
    case "Interpose":
    case "Jab":
    case "Kick":
    case "Knife Attack":
    case "Knife Parry":
    case "Knife Throw":
      return true;
    case "Knotwork":
    case "Law":
    case "Leadership":
      return false;
    case "Leap":
      return true;
    case "Mathematics":
      return false;
    case "Mount":
      return true;
    case "Music":
    case "Occult":
    case "Oratory":
    case "Perception":
    case "Philosophy":
    case "Politics":
    case "Preserve Food":
    case "Research":
    case "Restore Basic Armour":
    case "Restore Basic Weapons":
      return false;
    case "Ride":
      return true;
    case "Rigging":
      return false;
    case "Roll":
      return true;
    case "Scrounge":
    case "Sculpt":
    case "Shadow":
    case "Sharpen Blades":
    case "Sincerity":
    case "Sing":
      return false;
    case "Sling Attack":
    case "Sling Trick Shot":
      return true;
    case "Socialize":
      return false;
    case "Sprint":
    case "Staff Attack":
    case "Staff Parry":
      return true;
    case "Stealth":
    case "Storytelling":
    case "Strategy":
    case "Street Navigation":
      return false;
    case "Strike Vitals":
      return true;
    case "Survival":
    case "Tactics":
      return false;
    case "Throw":
      return true;
    case "Track":
      return false;
    case "Unarmed Attack":
      return true;
    case "Underworld Lore":
    case "Unobtrusive":
      return false;
    case "Whip Attack":
    case "Writing":
      return true;
  }
};

export type KnackIncrease = {
  type: "knackIncrease";
  target: Knack;
  value: number;
  condition?: string;
};

export type KnackDiceIncrease = {
  type: "knackDiceIncrease";
  target: Knack;
  which: "kept" | "ukd";
  value: number;
  condition?: string;
};

export type KnackDiceDecrease = {
  type: "knackDiceDecrease";
  target: Knack;
  which: "kept" | "ukd";
  value: number;
  condition?: string;
};

export type Buff =
  | KnackIncrease
  | KnackDiceIncrease
  | {
      type: "reputationIncrease";
      value: number;
    };

export type Debuff = KnackDiceDecrease;
