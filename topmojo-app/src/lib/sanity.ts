import { createClient } from "next-sanity";

const projectId = 'emx81n9x';
const dataset = 'production';
const apiVersion = '2023-11-13';

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true });

