import { Manager } from "./falcon";

function polling() {
  // console.log("polling");
  setTimeout(polling, 1000 * 30);
}

polling();
