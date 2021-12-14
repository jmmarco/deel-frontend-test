export default async function autocomplete(inputStr = "", inputArr = []) {
  return await new Promise((resolve, reject) => {
    // Use setTimeout to simulate "asynchronous" feel
    setTimeout(() => {
      if (inputStr.length > 1 && Array.isArray(inputArr)) {
        resolve(
          inputArr.filter(
            (item) => item.toLowerCase().indexOf(inputStr.toLowerCase()) !== -1
          )
        );
      } else {
        resolve(undefined);
      }
    }, 400);
  });
}

export async function fetchRealRandomWordsApi(wordsAmount = 5) {
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?number=${wordsAmount}`
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status} please try again later.`;
    throw new Error(message);
  }
  return await response.json();
}
