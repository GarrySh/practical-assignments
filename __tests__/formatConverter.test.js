import fs from 'mz/fs';
import path from 'path';
import formatConverter from '../src/formatConverter';

test('csv to json', async () => {
  const pathToJson = path.resolve(__dirname, './__fixtures__/books.json');
  const pathToCsv = path.resolve(__dirname, './__fixtures__/books.csv');
  const fileData = await fs.readFileSync(pathToCsv, 'utf8');
  const expected = await fs.readFileSync(pathToJson, 'utf8');
  expect(formatConverter(fileData)).toBe(expected);
});
