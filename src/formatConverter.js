import papa from 'papaparse';

export default (pathToCsv) => {
  const parsedData = papa.parse(pathToCsv, {
    delimiter: ';',
    header: true,
    trimHeaders: true,
    transform: item => item.trim(),
  });

  const books = { authors: [] };

  parsedData.data.forEach(({ Title: title, Author: author, Annotation: description }) => {
    const index = books.authors.findIndex(item => item.author === author);
    if (index === -1) {
      books.authors.push({
        author,
        books: [{ title, description }],
      });
    } else {
      books.authors[index].books.push({ title, description });
    }
  });
  return JSON.stringify(books, null, 2);
};
