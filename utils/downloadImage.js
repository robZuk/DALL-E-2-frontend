import FileSaver from "file-saver";

export async function downloadImage(image) {
  const id = Math.round(Math.random() * 1e9);
  FileSaver.saveAs(image, `download-${id}.png`);
}
