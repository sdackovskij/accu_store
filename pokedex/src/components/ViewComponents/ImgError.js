export default function imgError(e) {
  e.target.onerror = null;
  e.target.src = "./img/image_not_available.png";
}
