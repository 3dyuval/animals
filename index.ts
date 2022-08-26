import {parse} from './parse.ts'

serve( async (_req) => {
    const animals = await parse()
  return new Response(JSON.stringify(animals), {
    headers: { "content-type": "text/plain" },
  });
});