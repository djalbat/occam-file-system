"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";

const { concatenatePaths } = pathUtilities,
      { moveFile: moveFile, moveDirectory: moveDirectory } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    moveProjectEntry(pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function moveProjectEntry(projectsDirectoryPath, pathMap) {
  const { sourcePath } = pathMap;

  if (sourcePath === null) {
    return;
  }

  const { targetPath } = pathMap;

  if (targetPath === null) {
    removeProjectEntry(projectsDirectoryPath, pathMap);

    return;
  }

  const { entryDirectory } = pathMap;

  entryDirectory ?
    moveProjectDirectory(projectsDirectoryPath, pathMap) :
      moveProjectFile(projectsDirectoryPath, pathMap);
}

export function moveProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath);

  try {
    const oldFilePath = absoluteSourceFilePath, ///
          newFilePath = absoluteTargetFilePath; ///

    moveFile(oldFilePath, newFilePath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}

export function moveProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath);

  try {
    const oldDirectoryPath = absoluteSourceDirectoryPath, ///
          newDirectoryPath = absoluteTargetDirectoryPath; ///

    moveDirectory(oldDirectoryPath, newDirectoryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
