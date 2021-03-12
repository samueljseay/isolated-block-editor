"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiFetch = _interopRequireDefault(require("@wordpress/api-fetch"));

function registerApiHandlers(options) {
  var preload = {
    OPTIONS: {
      // Reusable blocks
      '/wp/v2/blocks': {
        body: []
      }
    },
    // Enough data for Gutenberg to work
    '/wp/v2/types?context=edit': {
      body: {
        post: {
          capabilities: {
            edit_post: 'edit_post'
          },
          description: '',
          hierarchical: false,
          viewable: true,
          name: 'Posts',
          slug: 'post',
          labels: {
            name: 'Posts',
            singular_name: 'Post'
          },
          supports: {
            title: false,
            editor: true,
            author: false,
            thumbnail: false,
            excerpt: false,
            trackbacks: false,
            'custom-fields': false,
            comments: false,
            revisions: false,
            'post-formats': false,
            'geo-location': false
          },
          taxonomies: [],
          rest_base: 'posts'
        }
      }
    }
  };

  _apiFetch["default"].use(_apiFetch["default"].createPreloadingMiddleware(preload));
}

var _default = registerApiHandlers;
exports["default"] = _default;
//# sourceMappingURL=index.js.map