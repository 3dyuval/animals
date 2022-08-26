import { parse as parseCsv } from 'https://deno.land/std@0.82.0/encoding/csv.ts';

export const parse = async () => {
    const file = await Deno.readFile('./animal_taxonomy.csv')
    const animals = await parseCsv(file, {
          skipFirstRow: true,
    })
    return animals
}
