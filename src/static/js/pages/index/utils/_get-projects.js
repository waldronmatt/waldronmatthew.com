import { projects } from './_project-data';
import { fallbacks } from './_fallbacks';
import assetsManifest from 'dist/assets-manifest.json';

export const getProjects = () => {
  var index = 0;
  var count = 3;
  const loadMore = document.getElementById('loadMore');

  const getProjectData = () => {
    count = index + count;
    const totaLength = projects.length;
    const remainingLength = totaLength - totaLength + count;

    if (count >= totaLength) {
        loadMore.remove();
    }

    if (totaLength - remainingLength < count) { 
        count = totaLength - remainingLength;
    }

    const getFallbacks = () => {
      let manifestHasNextGenImage = assetsManifest['static/images/logo.webp'];
      let html = '';
      if (manifestHasNextGenImage) {
        fallbacks.forEach(fallback => {
          html += `<source srcset="${assetsManifest[`static/images/${projects[index].pictureData.path}${projects[index].pictureData.pictures[0].filename}.${fallback.ext}`]}" type="image/${fallback.ext}">`;
        })
      }
      return html;
    };

    for (index; index < remainingLength; index++) {
      let newProject = document.createElement('div');
      newProject.className = 'grid-item span';
      newProject.innerHTML =
      `<a href="projects/${projects[index].pictureData.lightbox}.html" class="grid-link">
        <picture>
        ${getFallbacks()}
          <img src="${assetsManifest[`static/images/${projects[index].pictureData.path}${projects[index].pictureData.pictures[0].filename}.${projects[index].pictureData.defaultExt}`]}">
        </picture>
        <div class="tile">
          <p>${projects[index].pictureData.name}</p>
        </div>
      </a>`
      document.getElementById('projects').appendChild(newProject);
    }
  }

  window.addEventListener('load', getProjectData);
  loadMore.addEventListener('click', getProjectData);
}