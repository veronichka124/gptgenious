"use server";

import OpenAI from "openai";
import { capitalizeFirstLetter } from "./helpers";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
  } catch (error) {
    return null;
  }
};

const tours = [
  {
    id: "tour-1",
    city: "Riga",
    country: "Latvia",
    title: "Adventures in Riga",
    description: "description of the city and tour",
    stops: [
      "short paragraph on the stop 1 ",
      "short paragraph on the stop 2",
      "short paragraph on the stop 3",
    ],
  },
  {
    id: "tour-2",
    city: "Paris",
    country: "France",
    title: "Adventures in Paris",
    description: "description of the city and tour",
    stops: [
      "short paragraph on the stop 1 ",
      "short paragraph on the stop 2",
      "short paragraph on the stop 3",
    ],
  },
  {
    id: "tour-3",
    city: "Stockholm",
    country: "Sweden",
    title: "Adventures in Stockholm",
    description: "description of the city and tour",
    stops: [
      "short paragraph on the stop 1 ",
      "short paragraph on the stop 2",
      "short paragraph on the stop 3",
    ],
  },
];

export const getAllTours = async (searchTerm) => {
  if (!searchTerm) return tours;

  return tours.filter((tour) =>
    tour["city"].toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getExistingTour = async ({ city, country }) => {
  return null;
};

export const generateTourResponse = async ({ city, country }) => {
  return {
    city,
    country,
    title: `Adventures in ${capitalizeFirstLetter(
      city
    )}, ${capitalizeFirstLetter(country)}`,
    description: "description of the city and tour",
    stops: [
      "short paragraph on the stop 1 ",
      "short paragraph on the stop 2",
      "short paragraph on the stop 3",
    ],
  };
};

export const createNewTour = async (tour) => {
  return null;
};

export const getSingleTour = async (id) => {
  return tours.find((tour) => tour["id"] === id);
};
