import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Purvi Patel. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "With over 6 years of experience, I love bringing ideas to life through intuitive and impactful digital solutions. I focus on creating smooth, user-friendly experiences that truly make a difference for people and businesses.",
    };
  },
});

