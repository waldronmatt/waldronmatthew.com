// eslint-disable-next-line import/no-unresolved
import assetsManifest from "dist/assets-manifest.json";
import projects from "./_project-data";
import fallbacks from "./_fallbacks";

// eslint-disable-next-line import/prefer-default-export
export const getProjects = () => {
  let index = 0;
  let limit = 3;
  const loadMore = document.getElementById("loadMore");
  const loadMoreParent = document.getElementById("loadMoreParent");

  const getProjectData = () => {
    const counter = 5;
    const totaLength = projects.length;
    const remainingLength = totaLength - limit;

    if (remainingLength <= 0) {
      loadMoreParent.remove();
      limit = totaLength;
    }

    const getFallbacks = (getPath, getFilename) => {
      const manifestHasNextGenImage =
        assetsManifest[`static/images/${getPath}${getFilename}-lg.webp`];
      let html = "";
      if (manifestHasNextGenImage) {
        fallbacks.forEach((fallback) => {
          html += `
          <source media="(max-width: 320px)" srcset="${
            assetsManifest[
              `static/images/${getPath}${getFilename}-xs.${fallback.ext}`
            ]
          }" type="image/${fallback.ext}">
          <source media="(min-width: 321px) and (max-width: 767px)" srcset="${
            assetsManifest[
              `static/images/${getPath}${getFilename}-sm.${fallback.ext}`
            ]
          }" type="image/${fallback.ext}">
          <source media="(min-width: 768px) and (max-width: 1439px)" srcset="${
            assetsManifest[
              `static/images/${getPath}${getFilename}-md.${fallback.ext}`
            ]
          }" type="image/${fallback.ext}">
          <source media="(min-width: 1440px)" srcset="${
            assetsManifest[
              `static/images/${getPath}${getFilename}-lg.${fallback.ext}`
            ]
          }" type="image/${fallback.ext}">
          `;
        });
      }
      return html;
    };

    for (index; index < limit; index += 1) {
      const getPath = projects[index].pictureData.path;
      const getFilename = projects[index].pictureData.pictures[0].filename;
      const getDefaultExt = projects[index].pictureData.defaultExt;
      const getLightbox = projects[index].pictureData.lightbox;
      const getPictureName = projects[index].pictureData.name;

      // create html for each picture
      const newProject = document.createElement("a");
      newProject.className = "default-width img-link";
      newProject.href = `projects/${getLightbox}.html`;
      newProject.innerHTML = `<picture>
            ${getFallbacks(getPath, getFilename)}
            <img src="${
              assetsManifest[
                `static/images/${getPath}${getFilename}-lg.${getDefaultExt}`
              ]
            }" alt="${getPictureName}">
          </picture>
          <div class="tile">
            <p>${getPictureName}</p>
          </div>`;

      // append to the picture root element
      document.getElementById("projects").appendChild(newProject);
    }

    limit += counter;
  };

  window.addEventListener("load", getProjectData);
  loadMore.addEventListener("click", getProjectData);
};
