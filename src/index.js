import "./style.css";
import odinImage from "./odin.png";
import {greeting} from "./greeting";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);


console.log(greeting);