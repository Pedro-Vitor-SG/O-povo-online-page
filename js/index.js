let inputFile = document.querySelector(".cv");
let erroMsg = document.querySelector(".error_file");

const masks = {
  cep(value) {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  },

  phone(value) {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  },
};



document.querySelector("#cep").addEventListener("input", (e) => {
  e.target.value = masks.cep(e.target.value);
});
document.querySelector("#phone").addEventListener("input", (e) => {
  e.target.value = masks.phone(e.target.value);
});



inputFile.addEventListener("change", () => {
  let files = inputFile.files;

  if (files.length > 0) {
    if (files[0].size > 10 * 100024) {
      erroMsg.innerHTML = "O arquivo não dever exceder 10mb de tamanho";
      return;
    }
  }
  erroMsg.innerHTML = "";
});
