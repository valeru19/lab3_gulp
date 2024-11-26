import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initInfo from "../components/initInfo.js";
import initRegistrationInfo from "../components/initRegistrationInfo.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";
import initRights from "../components/initRights.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section info"></section>
    <section class="section registration_info"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
    <section class="section rights"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  const infoNode = rootNode.querySelector(".info");
  initInfo(infoNode);

  const registrationInfoNode = rootNode.querySelector(".registration_info");
  initRegistrationInfo(registrationInfoNode);

  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  const footerNode = rootNode.querySelector(".footer");
  initFooter(footerNode);

  const rightsNode = rootNode.querySelector(".rights");
  initRights(rightsNode);
};

export default homePage;
