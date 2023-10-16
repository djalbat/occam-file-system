"use strict";

import { nullifyEntryPaths } from "./utilities/pathMap";
import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { removeEntry, checkEntryExists, isDirectoryEmpty } = fileSystemUtilities;

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
    nullifyEntryPaths(pathMap);
  }
}

function removeProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!directoryEmpty) {
    nullifyEntryPaths(pathMap);

    return;
  }

  try {
    const entryPath = absoluteSourceDirectoryPath;  ///

    removeEntry(entryPath);
  } catch (error) {
    nullifyEntryPaths(pathMap);
  }
}
