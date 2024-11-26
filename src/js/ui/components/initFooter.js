import footerData from "../../mockData/footerData.js";
import { footerTemplate } from "../templates/footerTemplate.js";

const initFooter = (footerNode) => {
    footerNode.insertAdjacentHTML("beforeend", footerTemplate(footerData));
};

export default initFooter;

