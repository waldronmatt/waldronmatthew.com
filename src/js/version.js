// eslint-disable-next-line import/no-unresolved
import mem from 'mem';

const getResponse = async completeURI => {
  try {
    const response = await fetch(`${completeURI}`);
    if (response.ok) {
      return await response.json();
    }
    return response;
  } catch (error) {
    return error;
  }
};

const memoized = mem(getResponse, {
  maxAge: 43_200_000, // 12 hours
  cacheKey: JSON.stringify,
});

const getVersionNumber = async () => {
  return (
    memoized(
      'https://api.github.com/repos/waldronmatt/waldronmatthew.com/releases'
    )
      .then(data => {
        const versionNumber = data[0].tag_name;
        // eslint-disable-next-line promise/always-return
        if (versionNumber) {
          return versionNumber;
        }
        return '';
      })
      // eslint-disable-next-line no-console, unicorn/prefer-top-level-await
      .catch(() => '')
  );
};

const versionNumber = await getVersionNumber();

document
  .querySelector('.m-square-e small')
  .insertAdjacentText('beforeend', ` ${versionNumber}`);
document
  .querySelector('.d-square-24 small')
  .insertAdjacentText('beforeend', ` ${versionNumber}`);
