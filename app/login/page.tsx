'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const formSchema = z
    .object({
        name: z.string().min(1, 'Name is required!'),
        email: z.string().email('Invalid email address').min(1, 'Email is required!'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
                path: ['confirmPassword'], // This points the error to this field
            });
        }
    });

const page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
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
        <div className="px-4 flex flex-col justify-center h-full mt-32 items-center gap-4">
            <div className="flex flex-col items-center">
                <Image
                    src={`/images/t-high-resolution-logo-transparent.png`}
                    width="100"
                    height="100"
                    alt="logo"
                    priority
                    className="sm:w-15 sm:h-25 md:w-auto md:h-auto"
                />
                <h1 className="text-5xl font-bold font-montserrat">
                    Tutor <span className="text-theme-blue">Finder</span>
                </h1>
            </div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <form id="form-register" onSubmit={form.handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="register-tutor-finder-name">
                                        Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="register-tutor-finder-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter name"
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="register-tutor-finder-email">
                                        Name
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

                        {/* Confirm Password Field */}
                        <Controller
                            name="confirmPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="register-confirm-password">
                                        Confirm Password
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        type="password"
                                        id="register-confirm-password"
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
                            Register
                        </Button>
                    </Field>
                </CardFooter>
            </Card>
        </div>
    );
};

export default page;
