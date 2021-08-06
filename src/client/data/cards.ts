import { biologyCards } from "./professionDecks/biologyDecks";
import { companyAdministration } from "./professionDecks/companyAdministrationDecks";

const baseDecks = [
  {
    title: "Fenótipo e Genótipo",
    link: "/biologia/a12xC/fenotipo-genotipo",
    cards: companyAdministration,
  },
];

export const decks: { [key: string]: any } = {
  biologia: {
    title: "Biologia",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  "administracao-de-empresas": {
    title: "Administração de Empresas",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  "marketing-digital": {
    title: "Marketing Digital",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  "ciencias-sociais": {
    title: "Ciências Sociais",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  pedagogia: {
    title: "Pedagogia",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  tecnologia: {
    title: "Tecnologia",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  logistica: {
    title: "Logística",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
  direito: {
    title: "Direito",
    userDecks: baseDecks,
    descomplicaDecks: baseDecks,
  },
};
