import { projects } from './_project-data';
import { fallbacks } from './_fallbacks';
import assetsManifest from 'dist/assets-manifest.json';

export const getProjects = () => {
  var index = 0;
  var limit = 3;
  const loadMore = document.getElementById('loadMore');
  const loadMoreParent = document.getElementById('loadMoreParent');

  const getProjectData = () => {
    const counter = 5;
    const totaLength = projects.length;
    const remainingLength = totaLength - limit;

    if (remainingLength <= 0) {
      loadMoreParent.remove();
      limit = totaLength;
    }

    const getFallbacks = (getPath, getFilename) => {
      let manifestHasNextGenImage = assetsManifest[`static/images/${getPath}${getFilename}-lg.webp`];
      let html = '';
      if (manifestHasNextGenImage) {
        fallbacks.forEach(fallback => {
          html += `
          <source media="(max-width: 320px)" srcset="${assetsManifest[`static/images/${getPath}${getFilename}-xs.${fallback.ext}`]}" type="image/${fallback.ext}">
          <source media="(min-width: 321px) and (max-width: 767px)" srcset="${assetsManifest[`static/images/${getPath}${getFilename}-sm.${fallback.ext}`]}" type="image/${fallback.ext}">
          <source media="(min-width: 768px) and (max-width: 1439px)" srcset="${assetsManifest[`static/images/${getPath}${getFilename}-md.${fallback.ext}`]}" type="image/${fallback.ext}">
          <source media="(min-width: 1440px)" srcset="${assetsManifest[`static/images/${getPath}${getFilename}-lg.${fallback.ext}`]}" type="image/${fallback.ext}">
          `;
        })
      }
      return html;
    };

    for (index; index < limit; index++) {
      let getPath = projects[index].pictureData.path;
      let getFilename = projects[index].pictureData.pictures[0].filename;
      let getDefaultExt = projects[index].pictureData.defaultExt;
      let getLightbox = projects[index].pictureData.lightbox;
      let getPictureName = projects[index].pictureData.name;

      // create html for each picture
      let newProject = document.createElement('div');
      newProject.className = 'img-container default-width';
      newProject.innerHTML =
        `<a href="projects/${getLightbox}.html" class="img-link">
          <picture>
            ${getFallbacks(getPath, getFilename)}
            <img src="${assetsManifest[`static/images/${getPath}${getFilename}-lg.${getDefaultExt}`]}" alt="${getPictureName}">
          </picture>
          <div class="tile">
            <p>${getPictureName}</p>
          </div>
        </a>`

      // append to the picture root element
      document.getElementById('projects').appendChild(newProject);
    }

    limit = limit + counter;
  }

  window.addEventListener('load', getProjectData);
  loadMore.addEventListener('click', getProjectData);
}