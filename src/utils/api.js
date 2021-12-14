export default async function autocomplete(inputStr = "", inputArr = []) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputStr.length > 1 && Array.isArray(inputArr)) {
        resolve(inputArr.filter((item) => item.toLowerCase().indexOf(inputStr.toLowerCase()) !== -1));
      } else {
        resolve(undefined)
      }
    }, 400);
  });
}