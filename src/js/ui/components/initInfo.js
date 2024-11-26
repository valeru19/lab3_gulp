import  infoData  from "../../mockData/infoData.js";
import { infoTemplate } from "../templates/infoTemplate.js";

const initInfo = (infoNode) => {
    infoNode.insertAdjacentHTML("beforeend", infoTemplate(infoData));
};

export default initInfo;