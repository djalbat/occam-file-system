"use strict";

import { nullifyTargetEntryPath } from "./utilities/pathMap";
import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { createFile, createDirectory, checkEntryExists: checkFileExists, checkEntryExists: checkDirectoryExists } = fileSystemUtilities;

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
  const { entryDirectory } = pathMap;

  entryDirectory ?
    createProjectDirectory(projectsDirectoryPath, pathMap) :
      createProjectFile(projectsDirectoryPath, pathMap);
}

function createProjectFile(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap,
        targetFilePath = targetEntryPath, ///
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkFileExists(absoluteTargetFilePath);

  if (targetFileExists) {
    nullifyTargetEntryPath(pathMap);

    return;
  }

  try {
    const filePath = absoluteTargetFilePath;  ///

    createFile(filePath);
  } catch (error) {
    nullifyTargetEntryPath(pathMap);
  }
}

function createProjectDirectory(projectsDirectoryPath, pathMap) {
  const { targetEntryPath } = pathMap,
        targetDirectoryPath = targetEntryPath, ///
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkDirectoryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    nullifyTargetEntryPath(pathMap);

    return;
  }

  try {
    const directoryPath = absoluteTargetDirectoryPath;  ///

    createDirectory(directoryPath);
  } catch (error) {
    nullifyTargetEntryPath(pathMap);
  }
}
