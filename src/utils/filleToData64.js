export async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
      return resolve(reader.result);
    };
    reader.onerror = error => reject(error);
  });
}
