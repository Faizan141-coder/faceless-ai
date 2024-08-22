import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Do I need to make videos for this to work?
        </AccordionTrigger>
        <AccordionContent>
          No. You only need to supply the source of your video content (an
          AI-generated theme, a Current News topic, a Subreddit, or enter
          stories manually), then our platform creates and posts the videos for
          you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What if I want to edit a video before it's posted?
        </AccordionTrigger>
        <AccordionContent>
          You can edit your video any time before its posting time. Simply head
          to your dashboard and edit the upcoming video there.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What if I don't want videos posted publicly?
        </AccordionTrigger>
        <AccordionContent>
          You can edit your video's privacy settings any time from your Series
          settings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Can I choose when my videos get published?
        </AccordionTrigger>
        <AccordionContent>
          Your posting frequency is determined by your Series Plan. For example,
          if your plan is Starter, then your videos will be published every
          Monday, Wednesday, and Friday at 12pm (local). If your plan is Daily,
          then we will post a video every day at 12pm (local).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
