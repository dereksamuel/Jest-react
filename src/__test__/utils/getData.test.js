import getData from '../../utils/getData';

describe('Fecth API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Call to an other API and retorn data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234656', }));
    getData('https://google.com')
      .then((res) => {
        expect(res.data).toEqual('1234656')
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
