import SwapiService from './SwapiService.class';

const swapiService = new SwapiService();

describe('SwapiService', () => {
  it('should formatUrlName', () => {
    const name1 = 'Obiwan kenobi';
    const name2 = 'testTest test test';

    expect(swapiService.formatUrlName(name1)).toEqual('obiwan-kenobi');
    expect(swapiService.formatUrlName(name2)).toEqual('testtest-test-test');
  });

  it('should get id from link', () => {
    const url1 = 'https://swapi.co/api/films/2/';
    const url2 = 'https://swapi.com/apiapi/filmsfilms/22/';
    const url3 = 'loremipsumdolorsemit/11/';

    expect(swapiService.getIdFromLink(url1)).toEqual(2);
    expect(swapiService.getIdFromLink(url2)).toEqual(22);
    expect(swapiService.getIdFromLink(url3)).toEqual(11);
  });

  it('should generae link', () => {
    expect(swapiService.generateLink(
      'https://swapi.co/api/films/5/',
      'Attack of the Clones',
      'films',
    )).toEqual('/films/attack-of-the-clones/5');

    expect(swapiService.generateLink(
      'lorem/ipsum/15/',
      'A New Hope',
      'planets',
    )).toEqual('/planets/a-new-hope/15');
  });
});
