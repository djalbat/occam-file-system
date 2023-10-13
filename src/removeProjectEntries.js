"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { removeEntry: removeFile, removeEntry: removeDirectory } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    removeProjectEntry(pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function removeProjectEntry(projectsDirectoryPath, pathMap) {
  const { sourcePath } = pathMap;

  if (sourcePath === null) {
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
    const filePath = absoluteSourceFilePath;  ///

    removeFile(filePath);
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
    const directoryPath = absoluteSourceDirectoryPath;  ///

    removeDirectory(directoryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
