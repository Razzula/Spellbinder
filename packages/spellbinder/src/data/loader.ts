import { Ability } from "../types";

const spellModules = import.meta.glob('./spells/**/*.ts', { eager: true });
const spells = Object.values(spellModules)
    .map((mod) => (mod as { default: Ability }).default)
    .filter(Boolean) as Ability[];

const abilityModules = import.meta.glob('./abilities/**/*.ts', { eager: true });
const abilities = Object.values(abilityModules)
    .map((mod) => (mod as { default: Ability }).default)
    .filter(Boolean) as Ability[];

const abilitiesDict: Record<string, Ability> = [...spells, ...abilities].reduce((acc, ability) => {
    // const sourcePath = ability.source.split('/').slice(0, -1).join('/');
    // const source = sourcePath.replace('./', '').replace(/\\/g, '/');
    acc[ability.name] = { ...ability };
    return acc;
}, {} as Record<string, Ability>);

console.log(abilitiesDict);

export { abilitiesDict as abilities };
