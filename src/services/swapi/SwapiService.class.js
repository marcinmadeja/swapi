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

  generateLink(link, name, type) {
    if (!link || !name || !type) throw new Error('You need to pass details and type argument');
    const pageSeo = this.getMainPageLink(type);
    const nameSeo = this.formatUrlName(name);
    const id = this.getIdFromLink(link);

    return `/${pageSeo}/${nameSeo}/${id}`;
  }

  getMainPageLink(type) {
    switch (type) {
      case 'people': return 'people';
      case 'starships': return 'starships';
      case 'vehicles': return 'vehicles';
      case 'species': return 'species';
      case 'planets': return 'planets';
      case 'films': return 'films';
      default: throw new Error('No page');
    }
  }
}
