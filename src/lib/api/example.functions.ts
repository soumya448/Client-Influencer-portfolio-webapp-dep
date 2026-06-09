import { z } from "zod";

import { getServerConfig } from "../config.server";

// Example async function. For server-side operations, you can create
// standard async functions and call them from your client components.
// Example usage from client:
//   const result = await getGreeting({ name: "Ada" })

const greetingInputSchema = z.object({ name: z.string().min(1) });

export async function getGreeting(input: { name: string }): Promise<{
  greeting: string;
  mode: string | undefined;
}> {
  const validatedInput = greetingInputSchema.parse(input);
  const config = getServerConfig();
  return {
    greeting: `Hello, ${validatedInput.name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
