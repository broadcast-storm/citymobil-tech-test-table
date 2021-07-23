export default function SortByAlpha(array, reverse = false) {
  return array.sort((a, b) => {
    const aName = `${a.mark.toLowerCase()}${a.model.toLowerCase()}`;
    const bName = `${b.mark.toLowerCase()}${b.model.toLowerCase()}`;
    if (aName < bName) return !reverse ? 1 : -1;
    if (aName > bName) return !reverse ? -1 : 1;
    return 0;
  });
}
