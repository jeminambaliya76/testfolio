
import { tool } from "ai";
import { z } from "zod";


export const getTravels = tool({
  description: "This tool will show some photos of Purvi travelling and exploring places.",
  parameters: z.object({}),
  execute: async () => {
    return "Here are a few snapshots of me exploring beautiful places around the world! ✈️🌍";
  },
});
