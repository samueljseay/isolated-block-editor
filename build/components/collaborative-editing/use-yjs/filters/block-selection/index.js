"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFilterCollabBlockSelection = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

require("./style.scss");

import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */

/**
 * Adds peer selected className to the block-list-block component.
 *
 * @param {Object} OriginalComponent The original BlockListBlock component.
 * @return {Object} The enhanced component.
 */
var addSelectionBorders = function addSelectionBorders(OriginalComponent) {
  return function (props) {
    var isSelected = (0, _data.useSelect)(function (select) {
      var peers = select('isolated/editor').getPeers();
      return Object.values(peers).some(function (peer) {
        var _peer$start, _peer$end;

        return ((_peer$start = peer.start) === null || _peer$start === void 0 ? void 0 : _peer$start.clientId) === props.clientId && ((_peer$end = peer.end) === null || _peer$end === void 0 ? void 0 : _peer$end.clientId) === props.clientId;
      });
    }, [props.clientId]);
    return createElement(OriginalComponent, (0, _extends2["default"])({}, props, {
      className: isSelected ? 'is-iso-editor-collab-peer-selected' : undefined
    }));
  };
};

var addFilterCollabBlockSelection = function addFilterCollabBlockSelection() {
  (0, _hooks.addFilter)('editor.BlockListBlock', 'isolated-block-editor', addSelectionBorders);
};

exports.addFilterCollabBlockSelection = addFilterCollabBlockSelection;
//# sourceMappingURL=index.js.map