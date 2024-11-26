import rightsData from "../../mockData/rightsData.js";
import { rightsTemplate } from "../templates/rightsTemplate.js";

const initRights = (rightsNode) => {
    rightsNode.insertAdjacentHTML("beforeend", rightsTemplate(rightsData));
};

export default initRights;