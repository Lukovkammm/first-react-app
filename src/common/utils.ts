export const getSearchData = (): string | undefined => {
  const formData = localStorage.getItem('form');
  if (!formData) return;

  return JSON.parse(formData).search;
};
