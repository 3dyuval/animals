import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { parse as parseCsv } from 'https://deno.land/std@0.82.0/encoding/csv.ts';

serve( async (_req) => {
    const file = await Deno.readFile(`${Deno.cwd()}/animal_taxonomy.csv`)
    const animals = await parseCsv(file, {
          skipFirstRow: true,
    })
  return new Response(JSON.stringify(animals), {
    headers: { "content-type": "text/plain" },
  });
});