'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { FormState, suggestRecipesAction } from '@/app/actions';
import { Wand2, Loader, ServerCrash, ChefHat } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '../ui/label';

const initialState: FormState = {
    message: null,
    recipes: null,
    errors: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="lg" disabled={pending}>
            {pending ? (
                <>
                    <Loader className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                </>
            ) : (
                <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Suggest Recipes
                </>
            )}
        </Button>
    );
}

export function RecipeGenerator() {
    const [state, formAction] = useFormState(suggestRecipesAction, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message && (state.errors || state.recipes === null)) {
             if (state.message.includes('error') || state.message.includes('correct')) {
                toast({
                    variant: "destructive",
                    title: "Something went wrong",
                    description: state.message,
                })
             }
        }
    }, [state, toast]);

    return (
        <section id="recipes" className="py-16 sm:py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Card className="overflow-hidden shadow-xl">
                     <form action={formAction}>
                        <CardHeader className="text-center bg-secondary p-8">
                            <div className="mx-auto w-fit rounded-full bg-primary/10 p-4 text-primary">
                                <ChefHat className="h-10 w-10" />
                            </div>
                            <CardTitle className="mt-4 text-4xl font-bold tracking-tight">Daddy's Kitchen AI</CardTitle>
                            <CardDescription className="mt-2 text-lg text-muted-foreground">
                                Have ingredients but no ideas? Describe what's in your pantry, and we'll suggest a recipe!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid w-full gap-2">
                                <Label htmlFor="ingredients" className="text-lg font-medium">Your Ingredients</Label>
                                <Textarea 
                                    id="ingredients"
                                    name="ingredients"
                                    placeholder="e.g., chicken breast, tomatoes, onions, Daddy's Kitchen All-Purpose Seasoning" 
                                    rows={4}
                                    className="text-base"
                                />
                                {state.errors?.ingredients && <p className="text-sm font-medium text-destructive">{state.errors.ingredients[0]}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center p-6 pt-0">
                           <SubmitButton />
                        </CardFooter>
                    </form>

                    {state.recipes && state.recipes.length > 0 && (
                        <div className="bg-secondary/50 p-6">
                             <h3 className="text-2xl font-bold font-headline mb-4 text-center">Recipe Suggestions</h3>
                             <ul className="space-y-4">
                                {state.recipes.map((recipe, index) => (
                                    <li key={index} className="rounded-lg border bg-card p-4 shadow-sm">
                                        <p className="font-semibold text-primary">{recipe}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                     {state.recipes && state.recipes.length === 0 && (
                        <div className="bg-secondary/50 p-6 text-center">
                            <p className="text-muted-foreground">{state.message}</p>
                        </div>
                    )}

                    {state.errors && state.message?.includes("server") && (
                         <div className="bg-destructive/10 text-destructive p-6 text-center flex flex-col items-center gap-4">
                            <ServerCrash className="h-10 w-10"/>
                            <p className="font-semibold">{state.message}</p>
                        </div>
                    )}
                </Card>
            </div>
        </section>
    );
}
