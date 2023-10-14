"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { moveEntry, checkEntryExists } = fileSystemUtilities;

export default function renameProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    renameProjectEntry(projectsDirectoryPath, pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function renameProjectEntry(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap;

  if (targetEntryPath === null) {
    return;
  }

  const absoluteTargetEntryPath = concatenatePaths(projectsDirectoryPath, targetEntryPath),
        targetEntryExists = checkEntryExists(absoluteTargetEntryPath);

  if (targetEntryExists) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });

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
    renameProjectDirectory(projectsDirectoryPath, pathMap) :
      renameProjectFile(projectsDirectoryPath, pathMap);
}

function renameProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        targetFilePath = targetEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath);

  try {
    const oldEntryPath = absoluteSourceFilePath, ///
          newEntryPath = absoluteTargetFilePath; ///

    moveEntry(oldEntryPath, newEntryPath);  ///
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}

function renameProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath);

  try {
    const oldEntryPath = absoluteSourceDirectoryPath, ///
          newEntryPath = absoluteTargetDirectoryPath; ///

    moveEntry(oldEntryPath, newEntryPath);  ///
  } catch (error) {
    const sourceEntryPath = null;

    Object.assign(pathMap, {
      sourceEntryPath
    });
  }
}
