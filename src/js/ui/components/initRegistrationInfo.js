import registrationInfoData from "../../mockData/registrationInfoData.js";
import { registrationInfoTemplate } from "../templates/registrationInfoTemplate.js";

const initRegistrationInfo = (registrationInfoNode) => {
    registrationInfoNode.insertAdjacentHTML("beforeend", registrationInfoTemplate(registrationInfoData));
};

export default initRegistrationInfo;