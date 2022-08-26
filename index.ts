import {parse} from './parse.ts'
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve( async (_req) => {
    const animals = await parse()
  return new Response(JSON.stringify(animals), {
    headers: { "content-type": "text/plain" },
  });
});