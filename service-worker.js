/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2019/05/01/images-webp/index.html","abe5741ab46ca3ee70d69eb3cfdcc0e2"],["/2019/05/08/images-webp2/index.html","1411abcda307122aed0f4aefc9f320bf"],["/2019/05/08/lozad/index.html","097e75abd4f7a76c3efa21a59a6bc431"],["/2019/05/10/css-specification/index.html","21e14785113c6deced41c4e50e07c3df"],["/2019/05/12/array/index.html","2fc564cc717e950d68ac018b1a41e067"],["/2019/05/13/mac-svn/index.html","0a38572d11a0ef556e411ab97840d86d"],["/2019/05/14/font-end-website/index.html","b5fc822bf81228b1b607bf74c29c23a0"],["/2019/05/14/underscore-simple/index.html","7b9dc34c34545e6067f771eea76a8830"],["/2019/05/16/http2/index.html","ca711a3cd27bfd1a2244a4f60dbe2ef3"],["/2019/05/17/http2-1/index.html","1b6d3a65bfca76ae2bbcbf9e8a9ee0f6"],["/2019/05/17/progressive-web-apps/index.html","134c063c2bc2719bf31f98bcafa8eb49"],["/2019/05/18/vuejs-1/index.html","249b933359be8b10902dbf533b0c8d8b"],["/2019/05/18/vuejs-2/index.html","93b618172af48a28aba559fd5db17386"],["/2019/05/18/vuejs-components/index.html","dfa6c2a535c53ca2d83e348bb954b9c7"],["/2019/05/18/vuejs/index.html","1d22babe49031f56eb8e22cefc4177ec"],["/2019/05/19/sass-part1/index.html","98bbe5a882c2b2e6db95885603cb8cc9"],["/2019/05/19/sass-part2/index.html","445a88aa32fb06d959f530612d153881"],["/2019/05/20/vue-storybook/index.html","6feeb8f31f0a470328e983e373a20ce3"],["/2019/05/20/vuejs-netlify/index.html","b0a1ec0535342d66b74c2a72d3c62297"],["/2019/05/21/vue-performant/index.html","02cdb0b13fac12c9c1227b9a2fe21700"],["/2019/05/21/vuejs-components-publish/index.html","89d7086f126c9cb5efc81a633d06eb7d"],["/2019/05/22/vue-bit/index.html","96d1f7bb10512c68a84655e898f5f2b6"],["/2019/05/22/vue-plugs/index.html","8e017a96bff659f05ad0c77f5e658fcb"],["/2019/05/22/vue-typescript-1/index.html","fbf7a14e37999e467aff8936d6169d1a"],["/2019/05/22/vue-typescript-2/index.html","1536c9a665399d536628bc26f76c69ad"],["/2019/05/27/create-and-design/index.html","1f64466007ff219f57aa334f47ff5a6e"],["/2019/05/27/en-website-learn/index.html","feb28f62fb671ff698f3b8d76416c567"],["/2019/05/27/learn-css/index.html","7c448812771cf06d74957bf50949972f"],["/2019/05/27/website-resource-github/index.html","0d8f46cb7e591da6f0412ee8a3bc7a02"],["/2019/05/27/zh-website-learn/index.html","87c295a930aaa330ed3aeff13a9cc11b"],["/2019/05/28/linux-nodejs-install/index.html","ff0cd6f43be3dd057acd0b81b46d9983"],["/2019/05/29/linux-nginx-install/index.html","71c67d39eaf8184b1bc61104af610e1a"],["/2019/06/09/react-material/index.html","c629106cbf7615e145394d5ecc3df9e6"],["/2019/06/09/react-native-material/index.html","5c7aa598810f128d570884b4aa885948"],["/2019/06/09/vue-material/index.html","1a414d1b0acfa7ee419ca3e67ce1772f"],["/2019/06/13/html5-meta/index.html","ce9b0804abf65a6cd2b3b17b4a675ce9"],["/2019/06/18/daily-update-01/index.html","d21e5e66ecb8c5f515b08ea834e6dc37"],["/2019/06/22/js-function-excutions/index.html","dfac2e1797d529045087c67eefcea34b"],["/2019/06/22/js-type-casting/index.html","6b8d213fa82804b1fb3cc710575abb80"],["/2019/06/25/html-elements-reference/index.html","4e7a9986618b0e0ff45f142c0a942967"],["/about/index.html","a6fc16cc5bd1104395b41b5cedf9337c"],["/archives/2019/05/index.html","f77e9dcae17d2540bb4d1a09d2ad4892"],["/archives/2019/05/page/2/index.html","9361cd2bc815e1bace967f82211b4d91"],["/archives/2019/05/page/3/index.html","767918bfdfdcbfb38c220d30d5f6ab73"],["/archives/2019/06/index.html","896f2137424fafa466c4812dd0382e88"],["/archives/2019/index.html","91831a9f30c2b39f6dc6c1b186bee76b"],["/archives/2019/page/2/index.html","804f668ffac18fbcd050ae549f48cf4a"],["/archives/2019/page/3/index.html","5254588fecf2619c9c583b984904979f"],["/archives/2019/page/4/index.html","1c98e10a8ad0af85f3428b313d112bba"],["/archives/index.html","57e9a85d149b0ebd2850f1025f63c52f"],["/archives/page/2/index.html","142725c9b46ce4e634ae5a1778c3c1ab"],["/archives/page/3/index.html","fbcec39ee552ba8a36642a2979638799"],["/archives/page/4/index.html","a0d2b2a32250718b733e16ce270065e2"],["/categories/Linux/index.html","c2729aefa6738d641cf758d73d1af5c8"],["/categories/index.html","9c344733fca698132e93bb0e1c082952"],["/categories/vue/index.html","d8e46c6d964851d07cbe3837854793c5"],["/categories/vue/page/2/index.html","ba76a74fcd8938eee800e211f6859f22"],["/categories/前端/index.html","dc91df7dd28f47ca161c04cd375f79f9"],["/categories/工具类/index.html","2a8cac339efd1528d430b0a15a46a929"],["/categories/用户体验/index.html","79d6eb3600b10ad68f0595667aa26e81"],["/categories/网站/index.html","8d54177c4cf5d02b8abf1a875e14a360"],["/categories/网络/index.html","db89fa4732c29d1336b626529def8852"],["/categories/项目管理/index.html","43677d53432727e7662f233eedda7e4c"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","299888650ecf28130d8f5361870181ef"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","d0743f433fcfd0c329581a428e218455"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/favicon.png","80ae3259f46dd4af0ccfd920fd3fdc2f"],["/friends/index.html","0a48c7ec1a74e5872cc1c1cd977529f8"],["/index.html","94ba5c29cc19e9b3c2b69c1edc321073"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/md5.min.js","af62250cb2d922418db97b55bbeee54d"],["/js/performanceStatistics.js","46ac153326d0a6b0a2c593527f27e1e1"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","4a4d55a6950160c36680d92dae5604c6"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","68094b0916d928339fc9f152528f3a90"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/medias/avatar.jpg","150636c2cf256bb7a465e3af3a3d4aad"],["/medias/banner/0.jpg","d346949ddd55a5d99da73c905489eea7"],["/medias/banner/1.jpg","b59df32a650a0c6e7457c2ddae01628f"],["/medias/banner/2.jpg","4c8f1390d7c90e0e5f5cb7312b995928"],["/medias/banner/3.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/banner/4.jpg","6280168595915f91637d25b807a3480d"],["/medias/banner/5.jpg","05b17ab25ecaee3e56387109597f1405"],["/medias/banner/6.jpg","9642f184d26540f8ad1b3f8206ca37d9"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo.png","5d0ef0e08c10efe1295b11feadf9110f"],["/medias/reward/alipay.jpg","9e5fd575bcdc0543844497409d7b8b01"],["/medias/reward/wechat.png","af2c8bb6000f557f391a785a8bb54201"],["/page/2/index.html","0abaf8736b608b3395d39a6e73acaee3"],["/page/3/index.html","1b69e54e304aa4533c98c181515e0ec8"],["/page/4/index.html","b79b9cb50b6d410dc7aef863bd68965d"],["/tags/Linux/index.html","2756b8e9c11b4e47f1f50ba1c3683eaa"],["/tags/Nginx/index.html","b7d59eb842e85ac4b733b0f1ee1229c2"],["/tags/UI设计/index.html","9af5d953f6190c11be65a07b46b19d1e"],["/tags/css/index.html","90ac1a7418cf1443c6151167731a358a"],["/tags/html/index.html","5e5f5898c29bb90fabd67bf0e4f4bcf7"],["/tags/http/index.html","2395757278791cbe217071022a7ce174"],["/tags/index.html","55adab1adb80d962ff93d0b303561ef0"],["/tags/js/index.html","a83168c570a2c10dbc53f5a4e3f5e4b6"],["/tags/meta标签/index.html","4a823ee4297ae7bdcd9fb92134bf20d5"],["/tags/npm/index.html","8332f2ad2a80300b3829bb9c293ce224"],["/tags/nuxt/index.html","d1defd44af48041b2f64411b5ca8f126"],["/tags/react-native/index.html","84eca1cc36681d15c1e4101ae816e5d2"],["/tags/react/index.html","0eee58dd21cd9845485c13d7cef2a1b0"],["/tags/sass/index.html","5c9a4118ccdc8a51c6a4a61aacd68991"],["/tags/ssr/index.html","ff28f68d37696919981b58f25bc4729d"],["/tags/typescript/index.html","2e43e96d4067fbc8d7377240fd94de33"],["/tags/vue/index.html","51209fcee0729c8406265d0d3c6348b5"],["/tags/vue/page/2/index.html","e85b00c64c34ec921a89fdd61ec00102"],["/tags/web/index.html","67661b9ef449973753b7cfd3863b663b"],["/tags/前端/index.html","61fc6a13268c542a82f076452801da58"],["/tags/工具/index.html","5aaf5bf77ee1a228c475db15b4cd596c"],["/tags/工具类/index.html","6523715664282eb6ab1abb3eea0875d4"],["/tags/性能/index.html","6b5959ee5f3e108c1355f772b2d861c9"],["/tags/日常刷题/index.html","f93728c4222bb8d19bd0788bbbe3eb75"],["/tags/用户体验/index.html","ff7873f0c0e8b1bcce6da6a46002f307"],["/tags/组件/index.html","4f88fc26bcc3b339ca0c817f695aaae2"],["/tags/网站/index.html","4eacc4617b3a1b16ff274e380d29a25a"],["/tags/网络/index.html","2fbea7a734accd568d531fd71407b99a"],["/tags/设计/index.html","e9ad0db7e481b14099f003bbe310d9ff"],["/tags/集成/index.html","44c8fc319f192e1891a88ce646f0c7d6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







