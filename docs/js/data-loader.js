const loadContentData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`No fue posible cargar ${url}`);
  }

  return response.json();
};

export { loadContentData };
