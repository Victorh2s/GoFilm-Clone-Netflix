import { GetDatas, GetInfo, Science_fiction } from '.';
import { vi, describe, expect } from 'vitest';

describe('Test Functions', () => {
  it('should call fetch and GetData with correct values', async () => {
    const Mock = vi.fn().mockResolvedValue(GetDatas(Science_fiction.url));
    const datas = await GetDatas(Science_fiction.url);
    const mock = await Mock();
    // console.log(await GetDatas(tv.url));
    expect(datas).toBeDefined();
    expect(datas).toEqual(await Mock());
    expect(mock.results[0].adult).toEqual(false);
  });

  it('should call fetch and GetData and Reject Values', async () => {
    const datas = await GetDatas('false api');

    expect(datas).toEqual(null);
  });

  it('should call fetch and GetInfo with correct values', async () => {
    const Mock = vi.fn().mockResolvedValue(GetInfo(76479, 'tv'));
    const datas = await GetInfo(76479, 'tv');
    const mock = await Mock();
    // console.log(mock);

    expect(datas).toEqual(await Mock());
    expect(mock.name).toEqual('The Boys');
  });

  it('should call fetch and GetInfo and Reject Values', async () => {
    const datas = await GetInfo(null, null);

    expect(datas.success).toEqual(false);
  });
});
