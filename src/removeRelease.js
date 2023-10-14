"use strict";

import { arrayUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";

const { last } = arrayUtilities;

export default function removeRelease(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        lastPathMap = last(pathMaps);

  removeProjectEntry(projectsDirectoryPath, lastPathMap);

  json = {
    pathMaps
  };

  callback(json);
}
