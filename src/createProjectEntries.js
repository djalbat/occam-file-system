"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { createFile, createDirectory, checkEntryExists } = fileSystemUtilities;

export default function createProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    createProjectEntry(projectsDirectoryPath, pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function createProjectEntry(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap,
        absoluteTargetEntryPath = concatenatePaths(projectsDirectoryPath, targetEntryPath),
        targetEntryExists = checkEntryExists(absoluteTargetEntryPath);

  if (targetEntryExists) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });

    return;
  }

  const { entryDirectory } = pathMap;

  entryDirectory ?
    createProjectDirectory(projectsDirectoryPath, pathMap) :
      createProjectFile(projectsDirectoryPath, pathMap);
}

function createProjectFile(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap,
        targetFilePath = targetEntryPath, ///
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath);

  try {
    const filePath = absoluteTargetFilePath;  ///

    createFile(filePath);
  } catch (error) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });
  }
}

function createProjectDirectory(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap,
        targetDirectoryPath = targetEntryPath, ///
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath);

  try {
    const directoryPath = absoluteTargetDirectoryPath;  ///

    createDirectory(directoryPath);
  } catch (error) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });
  }
}
