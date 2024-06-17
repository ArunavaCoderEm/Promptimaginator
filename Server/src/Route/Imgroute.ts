import { Hono } from 'hono'
import dotenv from 'dotenv'
import Replicate from "replicate";

dotenv.config()

const server = new Hono()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const modelString = process.env.REPLICATE_STRING as `${string}/${string}` | `${string}/${string}:${string}`;

if (!modelString) {
  throw new Error('REPLICATE_STRING environment variable is not set or has an invalid format');
}

server.post('/getimg', async (c) => {
    try {
      const { prompt } = await c.req.json();
      const output = await replicate.run(
        modelString,
        {
          input: {
            width: 1156,
            height: 768,
            prompt,
            sampler: 'Default',
            scheduler: 'Default',
            lora_strength: 1,
            output_format: 'webp',
            output_quality: 80,
            negative_prompt: 'hands, pastels, spots, photo, text, watermark',
            denoise_strength: 0.65,
            number_of_images: 4,
          },
        }
      );
      return c.json(output); 
    } catch (error : any) {
      console.error('Error running replicate:', error);
      return c.json({ error: error.message }, 500);
    }
  });

export default server;