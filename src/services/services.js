export const getImagesNasa = async (url) => {
  try {
    const request = await fetch(url);
    const data = await request.json();

    return data
  } catch (error) {
    console.log(error);
  }
}