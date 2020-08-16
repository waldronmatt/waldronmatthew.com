import { projects } from './_project-data';

export const getProjects = () => {
  var index = 0;
  var count = 5;
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

    for (index; index < remainingLength; index++) {
      let newProject = document.createElement('div');
      newProject.className = 'grid-item span';
      newProject.style = `background-image:url('${projects[index].picture}')`;
      newProject.innerHTML =
      `<a href="${projects[index].url}" class="grid-link">
      <div class="tile">
        <p>${projects[index].title}</p>
      </div>
      </a>`
      document.getElementById('projects').appendChild(newProject);
    }
  }
  loadMore && loadMore.addEventListener('click', getProjectData);
}