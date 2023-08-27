import { nanoid } from '../lib/utils'
import { Chat } from '../components/chat'
import { auth } from '../auth';
import { INTRO, INTRO_VIDEO } from '../components/clone-video-intro';

export const runtime = 'edge'

export default async function IndexPage() {
  const id = nanoid()
  const session = await auth();
  return <Chat session={session} id={id} initialMessages={[
    {
      role: 'assistant',
      content: INTRO,
      id: id
    },
    // {
    //   id: id,
    //   role: "user",
    //   content: "Create a two-column CSV of top interview questions for a senior frontend software engineer and respond using your own experience"
    // },
    // {
    //   id: id,
    //   role: "assistant",
    //   content: "```markdown\n\"Question\",\"Answer\"\n\"What is your experience with frontend frameworks?\",\"I have extensive experience with frontend frameworks, particularly Angular and React. I've led teams and projects utilizing these technologies, including the production of new features for Simplist's online mortgage product and the creation of an Angular component library for iTradeNetwork.\"\n\"Can you tell me about a time you had to solve a complex problem?\",\"During the COVID-19 pandemic, I was working with iTradeNetwork on an Angular component library when a critical issue arose. The disruption in the supply chain was endangering farmers' livelihoods. I was tasked with creating a new app to serve as an open marketplace for farmers to interact with alternative buyers. It was a complex and time-sensitive problem that we successfully solved.\"\n\"How do you handle tight deadlines?\",\"I have a history of successful deliveries under tight and seemingly impossible timelines. For example, during the COVID-19 crisis, I was tasked with creating a new app for iTradeNetwork in a very short time frame. I'm able to prioritize tasks effectively and ensure that the team is working efficiently to meet deadlines.\"\n\"Can you describe a time when you had to explain a complex concept to a non-technical stakeholder?\",\"At Thomson Reuters, I led the front-end development for a high-priority project - reengineering their enterprise legal billing software. This involved explaining complex technical concepts to the product team and architects. I leveraged my formal education in communication to articulate and illustrate these concepts effectively.\"\n\"What is your approach to self-teaching and continuous learning?\",\"I believe in the power of self-teaching, and it's a lifelong passion of mine. I constantly strive to keep myself updated with the latest technologies and trends in the software engineering world. I spend time reading, practicing, and collaborating with others to ensure my skills are up-to-date.\"\n\"How do you handle feedback and criticism?\",\"I view feedback and criticism as opportunities for growth and improvement. It's important to be open to different perspectives and willing to adjust one's approach when necessary. I strive to maintain a positive attitude and use constructive criticism to enhance my skills and deliver better results.\"\n\"Can you provide an example of a successful team collaboration?\",\"At Simplist, I was brought in as a front-end expert to lead a team lacking in Angular experience. We collaborated to produce new features for their existing product and launch a new SaaS product, Sonar, successfully after roughly a year of development. This project showcased the power of teamwork and shared expertise.\"\n\"How have you used your communication skills in your role as a software engineer?\",\"As a software engineer, clear and effective communication is key. I've used my skills to articulate complex concepts, collaborate with team members, and present ideas to stakeholders. For instance, during my time at Thomson Reuters, I worked closely with the product team and architects to successfully release an Angular frontend for their legal billing software.\"\n\"What is your experience with TypeScript?\",\"I have strong expertise in TypeScript and have used it extensively in my projects. For instance, at Simplist and iTradeNetwork, I led the development of features and applications using TypeScript, which enhanced the scalability and maintainability of the code.\"\n\"How do you approach problem-solving?\",\"I approach problem-solving with a keen eye for detail and a deep understanding of the problem at hand. I believe in breaking down complex problems into smaller, manageable parts and tackling them systematically. This approach was instrumental in my work at iTradeNetwork during the COVID-19 crisis, where I developed a solution to a critical supply chain disruption.\"\n```"
    // }
  ]} />
}
