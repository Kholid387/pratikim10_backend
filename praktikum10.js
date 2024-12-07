/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`);
};

/**
 * Fungsi untuk download file menggunakan Promise
 * @returns {Promise<string>} - Sebuah Promise yang me-return nama file
 */
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(result);
    }, 3000);
  });
};

// Menggunakan Promise untuk menjalankan proses download
download()
  .then((result) => {
    showDownload(result);
  });
