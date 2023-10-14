"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { removeProjectEntry } from "./removeProjectEntries";

const { concatenatePaths } = pathUtilities,
      { moveEntry, checkEntryExists } = fileSystemUtilities;

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

  const absoluteTargetEntryPath = concatenatePaths(projectsDirectoryPath, targetEntryPath),
        targetEntryExists = checkEntryExists(absoluteTargetEntryPath);

  if (targetEntryExists) {
    removeProjectEntry(projectsDirectoryPath, pathMap);

    return;
  }

  const { sourceEntryPath } = pathMap,
        absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });

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
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath);

  try {
    const oldEntryPath = absoluteSourceFilePath, ///
          newEntryPath = absoluteTargetFilePath; ///

    moveEntry(oldEntryPath, newEntryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}

function moveProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath);

  try {
    const oldEntryPath = absoluteSourceDirectoryPath, ///
          newEntryPath = absoluteTargetDirectoryPath; ///

    moveEntry(oldEntryPath, newEntryPath);
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
