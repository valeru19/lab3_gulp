export const blogTemplate = (data) => {
    const { header, main, mini } = data;
  
    // Берем первые две статьи для первой строки и следующие две для второй строки
    const firstRow = mini.slice(0, 2);
    const secondRow = mini.slice(2, 4);
  
    const createMiniContainers = (article) => `
      <div class="blog-item mini">
        <img src="${article.image}" alt="gpt3" />
        <div class="blog__text mini">
          <p class="blog__date">${article.date}</p>
          <h3 class="blog__title">${article.title}</h3>
          <a href="${article.href}" class="blog__link">${article.readMoreInfo}</a>
        </div>
      </div>
    `;
  
    const template = `
      <h1 class="blog__header">${header}</h1>
      <div class="news">
        <div class="blog__content">
          <div class="blog-row">
            <div class="blog-item main">
              <img src="${main.image}" alt="gpt3" />
              <div class="blog__text main">
                <p class="blog__date">${main.date}</p>
                <h3 class="blog__main__title">${main.title}</h3>
                <a href="${main.href}" class="blog__link">${main.readMoreInfo}</a>
              </div>
            </div>
          </div>
          <div class="blog_mini_container">
            <div class="blog-row">
              ${firstRow.map(createMiniContainers).join('')}
            </div>
            <div class="blog-row">
              ${secondRow.map(createMiniContainers).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  
    return template;
  };
  