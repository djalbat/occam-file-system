"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";

const { concatenatePaths } = pathUtilities,
      { renameFile: renameFile, renameDirectory: renameDirectory } = fileSystemUtilities;

export default function renameProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    renameProjectEntry(pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function renameProjectEntry(projectsDirectoryPath, pathMap) {
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
    renameProjectDirectory(projectsDirectoryPath, pathMap) :
      renameProjectFile(projectsDirectoryPath, pathMap);
}

export function renameProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath);

  try {
    const oldFilePath = absoluteSourceFilePath, ///
          newFilePath = absoluteTargetFilePath; ///

    renameFile(oldFilePath, newFilePath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}

export function renameProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath);

  try {
    const oldDirectoryPath = absoluteSourceDirectoryPath, ///
          newDirectoryPath = absoluteTargetDirectoryPath; ///

    renameDirectory(oldDirectoryPath, newDirectoryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
