

import { Timeline } from "@/components/ui/timeline";

export default function HacksTimeline() {
  const data = [
   
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-md md:text-md font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          
        </div>
      ),
    },
    
  ];
  return (
    (<div id="timeline" className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
