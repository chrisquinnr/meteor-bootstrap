import { SubsManager } from "meteor/meteorhacks:subs-manager";
const subs = new SubsManager();
function exportToCsv(filename, csvFile) {
  var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

function normaliseInput(elem) {
  return Object.keys(elem).reduce(
    (c, k) => ((c[k.toLowerCase()] = elem[k]), c),
    {}
  );
}

function setBgImage() {
  const target = document.getElementById("loadingBg");
  const x = _.sample([1, 2, 3, 4, 5, 6]);
  if (target) {
    target.style.backgroundImage = `url(./${x}.jpg)`; // specify the image path here
  }
}

export { subs, exportToCsv, normaliseInput, setBgImage };
