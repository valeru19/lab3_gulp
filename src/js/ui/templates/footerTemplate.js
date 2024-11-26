export const footerTemplate = (data) => {
    const { title, button, src, address, rights, links, contactInfo } = data;
  
    const mainLinks = links.mainLinks.map(link => `
        <a href="${link.url}">${link.text}</a>
    `).join("");
  
    const companyLinks = links.companyLinks.map(link => `
        <a href="${link.url}">${link.text}</a>
    `).join("");
  
    const template = `
        <div class="footer_registration">
          <h1 class="footer_header">${title}</h1>
          <a href="${button.link}">
            <button class="step_into_future_btn">${button.text}</button>
          </a>
        </div>
        <div class="footer_menu">
            <div class="footer_categoty_menu">
                <div class="adress">
                    <img src="${src}"/>
                    <p class="footer_menu_text">${address}</p>
                    <p class="footer_menu_text">${rights}</p>
                </div>
                <div class="links">
                    <p class="category-title">Cсылки</p>
                    ${mainLinks}
                </div>
                <div class="company">
                    <p class="category-title">Компания</p>
                    ${companyLinks}
                </div>
                <div class="contacts">
                    <p class="category-title">Контакты</p>
                    <p class="footer_menu_text">${address}</p>
                    <p class="footer_menu_text">${contactInfo.phoneNumber}</p>
                    <p class="footer_menu_text">${contactInfo.email}</p>
                </div>
            </div>
        </div>
    `;
  
    return template;
  };
  