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
      let manifestHasNextGenImage = assetsManifest[`static/images/${getPath}${getFilename}.webp`];
      let html = '';
      if (manifestHasNextGenImage) {
        fallbacks.forEach(fallback => {
          html += `<source srcset="${assetsManifest[`static/images/${getPath}${getFilename}.${fallback.ext}`]}" type="image/${fallback.ext}">`;
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
      newProject.className = 'grid-item span';
      newProject.innerHTML =
        `<a href="projects/${getLightbox}.html" class="grid-link">
          <picture>
            ${getFallbacks(getPath, getFilename)}
            <img src="${assetsManifest[`static/images/${getPath}${getFilename}.${getDefaultExt}`]}" alt="${getPictureName}">
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