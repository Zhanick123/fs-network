import path from "path";
import { promises as fs } from "fs";

export const getDataFromFile = async (filename) => {
  const data = await fs.readFile(path.resolve("data", `${filename}.json`), {
    encoding: "utf-8",
  });
  const parsedData = JSON.parse(data || "[]");
  return parsedData;
};

export const writeDataToFile = async (filename, data) => {
  return fs.writeFile(
    path.resolve("data", `${filename}.json`),
    JSON.stringify(data)
  );
};
