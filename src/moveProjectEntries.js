"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";
import { nullifyEntryPaths, nullifyTargetEntryPath } from "./utilities/pathMap";

const { concatenatePaths } = pathUtilities,
      { moveEntry, isDirectoryEmpty, checkEntryExists, checkEntryExists: checkFileExists, checkEntryExists: checkDirectoryExists } = fileSystemUtilities;

export default function moveProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    moveProjectEntry(projectsDirectoryPath, pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function moveProjectEntry(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap;

  if (targetEntryPath === null) {
    return;
  }

  const { sourceEntryPath } = pathMap,
        absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    nullifyTargetEntryPath(pathMap);

    return;
  }

  const { entryDirectory } = pathMap;

  entryDirectory ?
    moveProjectDirectory(projectsDirectoryPath, pathMap) :
      moveProjectFile(projectsDirectoryPath, pathMap);
}

function moveProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkFileExists(absoluteTargetFilePath);

  if (targetFileExists) {
    nullifyEntryPaths(pathMap);

    return;
  }

  try {
    const oldEntryPath = absoluteSourceFilePath, ///
          newEntryPath = absoluteTargetFilePath; ///

    moveEntry(oldEntryPath, newEntryPath);
  } catch (error) {
    nullifyEntryPaths(pathMap);
  }
}

function moveProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkDirectoryExists(absoluteTargetDirectoryPath),
        directoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!directoryEmpty) {
    nullifyEntryPaths(pathMap);

    return;
  }

  if (targetDirectoryExists) {
    removeProjectEntry(projectsDirectoryPath, pathMap);

    return;
  }

  try {
    const oldEntryPath = absoluteSourceDirectoryPath, ///
          newEntryPath = absoluteTargetDirectoryPath; ///

    moveEntry(oldEntryPath, newEntryPath);
  } catch (error) {
    nullifyEntryPaths(pathMap);
  }
}
