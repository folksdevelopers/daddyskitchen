'use server';

import { recipeSuggestionFromIngredients } from '@/ai/flows/recipe-suggestion-from-ingredients';
import { z } from 'zod';

const inputSchema = z.object({
  ingredients: z.string().min(3, { message: 'Please list at least a few ingredients.' }),
});

export type FormState = {
  message: string | null;
  recipes: string[] | null;
  errors: {
    ingredients?: string[];
  } | null;
}

export async function suggestRecipesAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = inputSchema.safeParse({
    ingredients: formData.get('ingredients'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      recipes: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const output = await recipeSuggestionFromIngredients({ ingredients: validatedFields.data.ingredients });
    if (!output.recipes || output.recipes.length === 0) {
        return { 
            message: 'No recipes found for these ingredients. Try adding more!', 
            recipes: [], 
            errors: null 
        };
    }
    return { message: 'Here are some recipe ideas!', recipes: output.recipes, errors: null };
  } catch (e) {
    console.error(e);
    return { 
        message: 'An unexpected error occurred on the server. Please try again later.', 
        recipes: null, 
        errors: null
    };
  }
}
