export const registrationInfoTemplate = (data) => {
    const { title, buttonText, text} = data;

    const template = `
        <div class="registration_info__left">
            <p class="registration_info_link__left">${text}</p>
            <h3 class="registration_info_header__left">${title}</h3>
        </div>
        <div class="registration_info__right">
            <button class="registration_info_btn__right">${buttonText}</button>
        </div>
    `;

    return template;
};
