"use strict";

import { arrayUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";

const { last } = arrayUtilities;

export default function removeRelease(projectsDirectoryPath, json, callback) {
  let entryDirectory;

  const { pathMaps } = json,
        lastPathMap = last(pathMaps),
        pathMap = lastPathMap;  ///

  entryDirectory = false;

  Object.assign(pathMap, {
    entryDirectory
  });

  removeProjectEntry(projectsDirectoryPath, pathMap);

  entryDirectory = true;

  Object.assign(pathMap, {
    entryDirectory
  });

  json = {
    pathMaps
  };

  callback(json);
}
