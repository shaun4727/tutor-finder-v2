import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDownIcon } from 'lucide-react';

const FaqComponent = () => {
    return (
        <div className="md:px-36 flex justify-between">
            <div className="w-1/2 pr-6">
                <h1 className="text-[.8rem] font-montserrat text-theme-blue">FAQ</h1>
                <h1 className="text-[2rem] font-bold font-montserrat">
                    Frequently Asked Questions
                </h1>
                <p className="text-black/70 font-inter">
                    We compiled a list of answers to address your most pressing questions regarding
                    our services.
                </p>
            </div>
            <div className="1/2">
                <Card className="mx-auto w-full max-w-sm">
                    <CardContent>
                        <Collapsible className="rounded-md data-[state=open]:bg-muted">
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" className="group w-full">
                                    Product details
                                    <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                                <div>
                                    This panel can be expanded or collapsed to reveal additional
                                    content.
                                </div>
                                <Button size="xs">Learn More</Button>
                            </CollapsibleContent>
                        </Collapsible>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default FaqComponent;
