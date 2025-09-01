'use server';
/**
 * @fileOverview AI-powered tool to generate tailored 'About' sections for user profiles.
 *
 * - generateTailoredAboutSections - A function that generates tailored 'About' sections.
 * - GenerateTailoredAboutSectionsInput - The input type for the generateTailoredAboutSections function.
 * - GenerateTailoredAboutSectionsOutput - The return type for the generateTailoredAboutSections function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTailoredAboutSectionsInputSchema = z.object({
  aboutSection: z.string().describe('The original About section text from the profile.'),
  targetAudience: z
    .string()
    .describe(
      'The intended audience or purpose for the tailored About section (e.g., recruiters, specific job application).'
    ),
});
export type GenerateTailoredAboutSectionsInput = z.infer<
  typeof GenerateTailoredAboutSectionsInputSchema
>;

const GenerateTailoredAboutSectionsOutputSchema = z.object({
  tailoredAboutSection: z
    .string()
    .describe('The AI-generated tailored About section optimized for the target audience.'),
});
export type GenerateTailoredAboutSectionsOutput = z.infer<
  typeof GenerateTailoredAboutSectionsOutputSchema
>;

export async function generateTailoredAboutSections(
  input: GenerateTailoredAboutSectionsInput
): Promise<GenerateTailoredAboutSectionsOutput> {
  return generateTailoredAboutSectionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTailoredAboutSectionsPrompt',
  input: {schema: GenerateTailoredAboutSectionsInputSchema},
  output: {schema: GenerateTailoredAboutSectionsOutputSchema},
  prompt: `You are an AI assistant specialized in crafting compelling About sections for professional profiles.

  Given the original About section and the target audience, generate a tailored version that is optimized for impact and relevance.

  Original About Section: {{{aboutSection}}}
  Target Audience: {{{targetAudience}}}

  Tailored About Section:`,
});

const generateTailoredAboutSectionsFlow = ai.defineFlow(
  {
    name: 'generateTailoredAboutSectionsFlow',
    inputSchema: GenerateTailoredAboutSectionsInputSchema,
    outputSchema: GenerateTailoredAboutSectionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
