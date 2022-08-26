import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { parse as parseCsv } from 'https://deno.land/std@0.82.0/encoding/csv.ts';

export const parse = async () => {
    const file =   Deno.readTextFileSync('animal_taxonomy.csv')
    const animals = await parseCsv(file, {
          skipFirstRow: true,
    })
    return animals
}
