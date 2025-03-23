import { Timeline } from "@/components/ui/timeline";

export default function HacksTimeline() {
  const data = [
    {
      title: " Software Hackathon:",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            A hybrid hackathon that empowers creative minds to innovate and
            showcase groundbreaking projects on a national stage
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
            <ul>
              <li>Entry Fee: Free</li>
              <li>Team Size: 2-4</li>
              <li> Prototype Submission Deadline: 7th April</li>
              <li> GitHub Profile/Repo Creation: Between 4th - 7th April</li>
              <li>
                Announcement of Top 10 Projects: 9th April Final Presentation:
                12th April
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: " Capture The Flag",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          An electrifying cybersecurity challenge that tests your problem-solving and ethical hacking
          skills in a race against time.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          <ul>
              <li>Entry Fee: INR 50 per team</li>
              <li>Team Size: 1-2</li>
              <li>Date: 7 April </li>
              <li>Time: 6:00 PM - 8:00 PM</li>
             
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "Coding Competition",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          A fast-paced coding contest exclusively for AMU students, where algorithmic prowess
          meets competitive spirit.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          <ul>
              <li> Entry Fee: INR 40 per person</li>
              <li>Date: 8 April </li>
              <li>Time: 3:00 PM - 4:00 PM </li>
          
             
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "Quiz Competition",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
          A riveting quiz battle that challenges teams on Computer and IT knowledge, igniting a
          spirit of intellectual rivalry.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md font-normal mb-8">
         <ul>
          <li>Entry Fee: INR 100 per team</li>
          <li>Team Size: 3-4</li>
          <li>Date: 9 April </li>
          <li>Time: 3:00 PM - 5:00 PM</li>
          <li>Venue: Conference Hall, Department of Computer Science, AMU</li>
         </ul>
          </p>
        </div>
      ),
    },
  
    
  ];
  return (
    <div id="timeline" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
