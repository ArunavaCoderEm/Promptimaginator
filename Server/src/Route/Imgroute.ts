import { Hono } from 'hono'
import dotenv from 'dotenv'
import Replicate from "replicate";

dotenv.config()

const server = new Hono()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

server.post('/getimg', async(c) => {
    try {
        const { prompt } = await c.req.json();
        const output = await replicate.run(
            "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            {
                input: {
                width: 1024,
                height: 768,
                prompt,
                scheduler: "K_EULER",
                num_outputs: 1,
                guidance_scale: 10.0,
                num_inference_steps: 100
                }
            }
            );
            return c.json(output); 
        }
    catch (error : any) {
        console.error('Error running replicate:', error);
        return c.json({ error: error.message }, 500);
    }
})

export default server;