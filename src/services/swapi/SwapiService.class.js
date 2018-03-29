export default class SwapiService {
  getNotLoadedUrl(urlsList, loadedData) {
    return urlsList.filter(url => !this.isLoaded(url, loadedData));
  }

  isLoaded(url, loadedData) {
    return !!loadedData.find(data => data.url === url);
  }

  removeDuplicate(list, property = 'url') {
    return list.filter((item, key) => key === list.findIndex(firstFound => item[property] === firstFound[property]));
  }

  formatUrlName(string = '') {
    return string.toLowerCase().split(' ').join('-');
  }

  getIdFromLink(link) {
    const regex = /\/\d{1,2}\/$/;
    const results = regex.exec(link) || ['0'];
    return parseInt(results[0].split('/').join(''), 10);
  }
}
