import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { summarizeProps } from "./types";

export async function summarize(props: summarizeProps) {
  const { input, openAiApiKey } = props;

  const chatModel = new ChatOpenAI({
    apiKey: openAiApiKey,
  });

  const systemContent = `
    You are a summary assistant. 
    You provide short summaries of text or conversations to make the main points stand out.
  `;

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", systemContent],
    ["user", "Summarize the following text \n text: {input}"],
  ]);

  const outputParser = new StringOutputParser();

  const llmChain = prompt.pipe(chatModel).pipe(outputParser);

  return await llmChain.invoke({
    input,
  });
}
