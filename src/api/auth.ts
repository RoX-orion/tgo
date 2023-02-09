import request from '@/util/request';

export function githubOauth2Callback(code: string) {
  return request({
    url: 'github/oauth2/callback',
    method: 'get',
    params: {
      code
    }
  });
}
