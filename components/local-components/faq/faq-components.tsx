import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDownIcon } from 'lucide-react';

const FaqComponent = () => {
    return (
        <div className="px-4 md:px-36 flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between md:items-center py-4">
            <div className="md:w-1/2 md:pr-6">
                <h1 className="text-[.8rem] font-montserrat text-theme-blue">FAQ</h1>
                <h1 className="text-[2rem] font-bold font-montserrat">
                    Frequently Asked Questions
                </h1>
                <p className="text-black/70 font-inter">
                    We compiled a list of answers to address your most pressing questions regarding
                    our services.
                </p>
            </div>
            <div className="md:w-1/2 font-inter">
                <h1 className="text-[1.5rem] font-bold font-montserrat">Tutoring</h1>
                <div className="mb-4">
                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                How do I find a tutor on your website?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                Students can browse the tutor page, filter tutors by subject, hourly
                                rate, or availability, and select a tutor that fits their needs.
                                Once selected, they can book a session by choosing the subject,
                                time, and duration.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                What subjects do tutors teach on your platform?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                Tutors on our platform teach a wide range of subjects. When tutors
                                update their profiles, they specify the subjects they teach, such as
                                Math, Science, English, or Programming. Students can filter tutors
                                based on the subject they need help with.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                How do I know if a tutor is qualified?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                Tutors provide details about their qualifications, experience, and
                                expertise when updating their profiles. Students can review tutor
                                profiles, including their education, teaching experience, and
                                reviews from other students.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                What happens if a tutor rejects my booking request?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                If a tutor rejects your booking request, you will be notified
                                immediately. You can then search for another available tutor and
                                submit a new booking request.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                <h1 className="text-[1.5rem] font-bold font-montserrat">Payments</h1>
                <div className="mb-4">
                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                How do I pay for a tutoring session?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                Once a tutor accepts your booking request, you will be directed to
                                the payment page. You can complete the payment using available
                                payment methods, such as credit/debit cards or digital wallets.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                Is my payment information secure?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                Yes, we use secure payment gateways to ensure your payment
                                information is encrypted and protected. We do not store your payment
                                details on our servers.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                How do I update my profile information?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                After logging in, go to your dashboard and click on the Edit Profile
                                option. You can update your personal details, profile picture, and
                                other information.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="rounded-md data-[state=open]:bg-muted mb-2">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                How do I view my booking history or payment history?
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                            <div className="text-black/70">
                                In your dashboard, navigate to the Booking History or Payment
                                History section. You will find a detailed list of all your past
                                bookings and payments.
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </div>
    );
};

export default FaqComponent;
