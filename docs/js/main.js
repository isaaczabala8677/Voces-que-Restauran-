import { initNavigation } from './navigation.js';
import { loadContentData } from './data-loader.js';

const initializePage = async () => {
  document.body.classList.add('has-js');
  initNavigation();

  const contentPath = document.body?.dataset?.contentPath || './data/unit-content.json';
  const momentsRoot = document.getElementById('moments-list');

  if (!momentsRoot) {
    return;
  }

  try {
    const data = await loadContentData(contentPath);
    const moments = Array.isArray(data?.learningMoments) ? data.learningMoments : [];

    if (moments.length === 0) {
      const emptyMessage = document.createElement('p');
      emptyMessage.textContent = 'Todavía no hay momentos disponibles para mostrar.';
      momentsRoot.appendChild(emptyMessage);
      return;
    }

    moments.forEach((moment) => {
      const article = document.createElement('article');
      article.className = 'card';

      const heading = document.createElement('h3');
      heading.textContent = moment.title || 'Momento';
      article.appendChild(heading);

      const description = document.createElement('p');
      description.textContent = moment.purpose || 'Información del momento pendiente.';
      article.appendChild(description);

      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = `Duración: ${moment.durationHours || 0} horas`;
      article.appendChild(tag);

      momentsRoot.appendChild(article);
    });
  } catch (error) {
    const fallback = document.createElement('p');
    fallback.textContent = 'No fue posible cargar la información inicial del proyecto.';
    momentsRoot.appendChild(fallback);
    console.error(error);
  }
};

initializePage();
