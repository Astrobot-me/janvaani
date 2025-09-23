import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatGroq } from "@langchain/groq";
import {z} from "zod"; 
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import { load } from "@langchain/community/load";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";


// We tell LangChain to use Groq and provide our API key.
const model = new ChatGroq({
    model: "llama-3.3-70b-versatile", // Using the powerful 70B Llama 3 model
    //@ts-ignore
    apiKey: process.env.GROQ_API_KEY as string,
});

// We use an async function because talking to an API takes time.
const generateSomething = async () => {
  // We "invoke" the model with our prompt and wait for the response.
  const response = await model.invoke("The Future of AI in Content Creation");
  return response;
};


const outputSchema = z.object({ 
    title: z.string().describe("Contains user friendly title of the topic") , 
    content: z.string().describe("Contain in depth content about the topic , yet crisp & not verbose"), 
    suggested_topics : z.string().describe("contains array of all relayted topics , min of 3 topics")
})

const generateWithParam = async (topic : string) => { 

    const prompt = new PromptTemplate({ 
        template: "Write a short paragraph about {topic} for a Medium article.", 
        inputVariables: ["topic"]
    })

    const chain = prompt.pipe(model.withStructuredOutput(outputSchema)) 
    console.log(`Generating text for the topic: "${topic}"`);
    const response = await chain.invoke ({ topic })
    return response; 
    
}


const processYoutubeVideo = async (url : string ) => {
    
    try {
         console.log("Loading video transcript...");
        const loader = YoutubeLoader.createFromUrl(url , { 
            language:"en", 
            addVideoInfo:true 
        }) 

        const docs = await loader.load()
        console.log(`Loaded transcript from: "${docs[0]?.metadata.title}"`) 

        // defining spliter 

        const spliter = new RecursiveCharacterTextSplitter({ 
            chunkSize:3000, 
            chunkOverlap: 250
        })

        const chunks = await spliter.splitDocuments(docs) 
        console.log(`Split transcript into ${chunks.length} chunks.`);
        
        const chunkSummeries : string[] = []

        console.log("Summarizing each chunk (Map step)...");

        for(const chunk of chunks){ 
            const summaryPrompt = `
                Please summarize the following transcript chunk in 2-3 sentences. 
                Focus on the key points and main ideas presented:
                ---
                ${chunk.pageContent}
                ---
                SUMMARY:`;
                
                const res = await model.invoke(summaryPrompt)
                chunkSummeries.push(res.content as string) 
        }

        console.log("Combining summaries into a final result (Reduce step)...");
            const finalPrompt = `
            You have been given several summaries from different parts of a single video transcript. 
            Please synthesize them into a single, well-written, and concise paragraph that captures the essence of the entire video.
            ---
            INDIVIDUAL SUMMARIES:
            ${chunkSummeries.join("\n\n")}
            ---
            FINAL SUMMARY:`;

        
            const resp = await model.invoke(finalPrompt) 

            return resp;
        

    } catch (error : any) {
        console.error("Error processing video:", error.message);
        throw error;
    }
}


const main = async  () => {
  try {
    // const paragraph = await generateWithParam("javascript");
    const paragraph = await processYoutubeVideo("https://youtu.be/BkbOuOv7HxQ?si=KAQ-puJnORCFjZdE");


    // The AI's generated text is in the 'content' property of the response
    console.log("\n--- AI Response ---");
    console.log(paragraph);
    console.log(paragraph.content);
    console.log("-------------------\n");
  } catch (error : any) {
    console.error("Error:", error.message);
  }
};

main()