'use server';
/**
 * @fileOverview Provides recipe suggestions based on a list of ingredients, including Daddy's Kitchen spices.
 *
 * - recipeSuggestionFromIngredients - A function that suggests recipes based on provided ingredients.
 * - RecipeSuggestionFromIngredientsInput - The input type for the recipeSuggestionFromIngredients function.
 * - RecipeSuggestionFromIngredientsOutput - The return type for the recipeSuggestionFromIngredients function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeSuggestionFromIngredientsInputSchema = z.object({
  ingredients: z
    .string()
    .describe("A comma-separated list of ingredients the user has on hand, including Daddy's Kitchen spices."),
});
export type RecipeSuggestionFromIngredientsInput = z.infer<typeof RecipeSuggestionFromIngredientsInputSchema>;

const RecipeSuggestionFromIngredientsOutputSchema = z.object({
  recipes: z.array(z.string()).describe("A list of recipe suggestions that utilize the provided ingredients."),
});
export type RecipeSuggestionFromIngredientsOutput = z.infer<typeof RecipeSuggestionFromIngredientsOutputSchema>;

export async function recipeSuggestionFromIngredients(input: RecipeSuggestionFromIngredientsInput): Promise<RecipeSuggestionFromIngredientsOutput> {
  return recipeSuggestionFromIngredientsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeSuggestionFromIngredientsPrompt',
  input: {schema: RecipeSuggestionFromIngredientsInputSchema},
  output: {schema: RecipeSuggestionFromIngredientsOutputSchema},
  prompt: `You are a recipe suggestion AI. Given the following list of ingredients, suggest recipes that can be made using those ingredients. You should try to incorporate Daddy's Kitchen spices in your suggestions.

Ingredients: {{{ingredients}}}

Recipes:`,
});

const recipeSuggestionFromIngredientsFlow = ai.defineFlow(
  {
    name: 'recipeSuggestionFromIngredientsFlow',
    inputSchema: RecipeSuggestionFromIngredientsInputSchema,
    outputSchema: RecipeSuggestionFromIngredientsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
