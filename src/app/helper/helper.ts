export const headerfilter = (data: Array<object>) => {
  const allowed: Array<string> = [
    'id',
    'media_type',
    'original_language',
    'original_title',
    'popularity',
    'poster_path',
    'release_date',
    'title',
    'vote_average',
    'vote_count'
  ];

  return Object.keys(data.results)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = data.results[key];
      return obj;
    }, {});
};
