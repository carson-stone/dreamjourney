
import { Configuration, OpenAIApi } from "openai";

interface GenerateImageFromTextBody {
  data: string;
}

export default defineEventHandler(async (event) => {
  // get req data
  const { data }: GenerateImageFromTextBody = await readBody(event)

  // configure Open AI
  const { OPEN_AI_API_SECRET_KEY } = useRuntimeConfig()

  const configuration = new Configuration({
    apiKey: OPEN_AI_API_SECRET_KEY,
  });

  const openAI = new OpenAIApi(configuration)

  // get the image from the req data
  const { data: imageResponseData } = await openAI.createImage({
    prompt: data,
    n: 1,
    size: "512x512"
  })

  const imageUrl = imageResponseData.data[0].url

  return imageUrl
})
