'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const formSchema = z.object({
    email: z.string().email('Invalid email address').min(1, 'Email is required!'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        toast('You submitted the following values:', {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: 'bottom-right',
            classNames: {
                content: 'flex flex-col gap-2',
            },
            style: {
                '--border-radius': 'calc(var(--radius)  + 4px)',
            } as React.CSSProperties,
        });
    };

    return (
        <div className="px-4 flex flex-col justify-center h-full mt-32 items-center gap-4 md:mt-12">
            <div className="flex flex-col items-center">
                <Image
                    src={`/images/logo.svg`}
                    width="100"
                    height="100"
                    alt="logo"
                    priority
                    className="sm:w-15 sm:h-25 md:h-auto md:w-12"
                />
                <h1 className="text-5xl font-bold font-montserrat">
                    Tutor <span className="text-theme-blue">Finder</span>
                </h1>
            </div>
            <Card className="w-full md:w-1/4">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="form-register" onSubmit={form.handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="register-tutor-finder-email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="register-tutor-finder-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter email"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="register-password">Password</FieldLabel>
                                    <Input
                                        {...field}
                                        type="password"
                                        id="register-password"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="••••••••"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </form>
                </CardContent>
                <CardFooter>
                    <Field orientation="horizontal" className="flex justify-center">
                        <Button type="button" variant="outline" onClick={() => form.reset()}>
                            Cancel
                        </Button>
                        <Button type="submit" form="form-register">
                            Login
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
            <p>
                Don't have an account? Please{' '}
                <Link href="/register">
                    <span className="text-theme-blue underline">Register</span>
                </Link>
            </p>
        </div>
    );
};

export default page;
