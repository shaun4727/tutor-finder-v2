'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from '@/components/ui/input-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const formSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters.')
        .max(50, 'Name must be at most 50 characters.'),
    email: z.string().email('Please enter a valid email address.').min(5, 'Email is too short.'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters.')
        .max(500, 'Message must be at most 500 characters.'),
});
const ContactSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
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
    }

    return (
        <div className="px-4 md:px-36 md:flex md:flex-col md:items-center font-inter py-16 bg-[#f7f7f7]">
            <div className="flex justify-center flex-col text-center gap-12">
                <div>
                    <h1 className="font-montserrat text-[2.3rem] md:text-[3rem] font-extrabold leading-[0.9] lg:leading-[1.1]">
                        Want to get in touch?
                    </h1>
                    <h1 className="font-montserrat text-[2.3rem] md:text-[3rem] font-extrabold leading-[0.9] lg:leading-[1.1]">
                        Drop me a line
                    </h1>
                </div>
                <div className="md:w-xl">
                    <form
                        id="form-rhf-demo"
                        className="flex flex-col justify-start"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-rhf-demo-title">Name</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Login button not working on mobile"
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
                                        <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                                        <Input
                                            {...field}
                                            id="contact-email"
                                            type="email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="shaun@example.com"
                                            autoComplete="email"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="message"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                {...field}
                                                id="contact-message"
                                                placeholder="Tell me about your project or just say hi!"
                                                rows={6}
                                                className="min-h-32 resize-none" // Increased min-height slightly for better UX
                                                aria-invalid={fieldState.invalid}
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="tabular-nums">
                                                    {field.value?.length || 0} characters
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>
                                            Briefly describe what you'd like to discuss.
                                        </FieldDescription>
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Button
                            type="submit"
                            form="form-rhf-demo"
                            className="w-1/3 mt-4 bg-theme-blue"
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
