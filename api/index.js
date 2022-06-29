import axios from 'axios';

export const base = '';

// User相關的 api
const userRequest = axios.create({
  baseURL: `${base}/api/core/userInfo`
});
const claimRequest = axios.create({
  baseURL: `${base}/api/claim/`
});
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `https://api/article/`
});
// 搜尋相關的 api
const searchRequest = axios.create({
  baseURL: `https://api/search/`
});

// User 相關的 api
export const apiUserLogin = data => userRequest.post('/login', data);
export const apiUserLogout = data => userRequest.post('/signOut', data);
export const apiUserSignUp = data => userRequest.post('/register', data);
export const apiUserCheckToken = data => userRequest.post('/checkToken', data);
export const apiUserCheckMobile = data => userRequest.post('/CheckMobile', data);
export const apiUserGetProfile = () => userRequest.get('/getProfile');
export const apiUserBuyList = () => userRequest.get('/getClaims');

// claim相關的 api
export const apiClaimItem = () => claimRequest.get('/getClaims');

// 文章相關的 api
export const apiArticleItem = () => articleRequest.get('/ArticleItem');
export const apiArticleMsg = data => articleRequest.post('/ArticleMsg', data);
export const apiArticleLink = data => articleRequest.post('/ArticleLink', data);
// 搜尋相關的 api
export const apiSearch = data => searchRequest.get(`/Search?searchdata=${data}`);
export const apiSearchType = () => searchRequest.get(`/SearchType`);
