"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { removeEntry, checkEntryExists } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    removeProjectEntry(projectsDirectoryPath, pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function removeProjectEntry(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap;

  if (sourceEntryPath === null) {
    return;
  }

  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    return;
  }

  const { entryDirectory } = pathMap;

  entryDirectory ?
    removeProjectDirectory(projectsDirectoryPath, pathMap) :
      removeProjectFile(projectsDirectoryPath, pathMap);
}

function removeProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath);

  try {
    const entryPath = absoluteSourceFilePath;  ///

    removeEntry(entryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}

function removeProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath);

  try {
    const entryPath = absoluteSourceDirectoryPath;  ///

    removeEntry(entryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
