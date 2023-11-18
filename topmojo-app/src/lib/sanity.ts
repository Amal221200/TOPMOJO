import { createClient } from "next-sanity";

const projectId = process.env.projectId;
const dataset = process.env.dataset;
const apiVersion = process.env.apiVersion;

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

