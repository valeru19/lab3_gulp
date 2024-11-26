export const infoTemplate = (data) => {
    const { image, title, mainText, link} = data;

    const btnLinks = `
    <a href="${link.href}" class="info__link">${link.text}</a>
    `

    const template = `
    <div class="info__left">
        <img class="person_in_vr" src="${image.src}" alt="${image.alt}"/>
    </div>
    <div class="info__right">
        ${btnLinks}
        <h2 class="info_header__right">${title}</h2>
        <p class="info_main_text__right">${mainText}</p>
        ${btnLinks}
    </div>
    `;

    return template;
};