
import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Purvi",
  parameters: z.object({}),
  execute: async () => {
    return "Here are some of the projects I've built — from SaaS platforms and e-commerce solutions to real-time dashboards and custom admin panels. Let me know if you want details!";
  },
});
