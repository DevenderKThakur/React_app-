import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
function AccordPage() {
    const faq = [
        {
          "question": "What is computer science?",
          "answer": "Computer science is the study of computers, their design, and their applications. It includes topics like programming, algorithms, data structures, and artificial intelligence."
        },
        {
          "question": "What is programming?",
          "answer": "Programming is the process of writing instructions for a computer to perform specific tasks. These instructions are written in languages like Python, Java, or C++."
        },
        {
          "question": "What is an algorithm?",
          "answer": "An algorithm is a step-by-step set of instructions used to solve a problem or perform a task. It’s like a recipe that tells the computer what to do."
        },
        {
          "question": "What is the difference between hardware and software?",
          "answer": "Hardware refers to the physical parts of a computer, like the CPU, monitor, and keyboard. Software is the set of instructions or programs that run on the hardware, like operating systems and applications."
        },
        {
          "question": "What is artificial intelligence (AI)?",
          "answer": "AI is a field of computer science focused on creating systems that can perform tasks that normally require human intelligence, such as learning, problem-solving, and decision-making."
        },
        {
          "question": "What is the Internet?",
          "answer": "The Internet is a global network of interconnected computers that allows people to share information and communicate. It includes websites, email, and many online services."
        },
        {
          "question": "What is a database?",
          "answer": "A database is an organized collection of data that can be easily accessed, managed, and updated. Examples include student records, online store inventories, and search engines."
        },
        {
          "question": "What is cybersecurity?",
          "answer": "Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, attacks, or damage. It includes practices like using strong passwords and installing antivirus software."
        },
        {
          "question": "What is a programming language?",
          "answer": "A programming language is a set of rules and syntax used to write code that a computer can understand and execute. Examples include Python, Java, and JavaScript."
        },
        {
          "question": "What is machine learning?",
          "answer": "Machine learning is a type of AI where computers are trained to recognize patterns and make decisions without being explicitly programmed. It’s used in applications like voice recognition and recommendation systems."
        }
      ]
  return (
    <div className="flex justify-center items-center h-full ">
        <main className="w-[500px] p-4">
            {
                faq.map((item , index)=>{
                    return <Accordion type="single" collapsible key={index}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                })
            }
        </main>
    </div>
    
  )
}

export default AccordPage
