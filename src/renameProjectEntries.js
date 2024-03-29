"use strict";

import { pathUtilities, arrayUtilities, fileSystemUtilities } from "necessary";

import { nullifyEntryPaths, nullifyTargetEntryPath, nullifyTargetEntryPaths } from "./utilities/pathMap";

const { last } = arrayUtilities,
      { concatenatePaths } = pathUtilities,
      { renameEntry, checkEntryExists, checkEntryExists: checkFileExists, checkEntryExists: checkDirectoryExists } = fileSystemUtilities;

export default function renameProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json,
        lastPathMap = last(pathMaps),
        pathMap = lastPathMap; ///

  renameProjectEntry(projectsDirectoryPath, pathMap);

  const { targetEntryPath } = pathMap;

  if (targetEntryPath === null) {
    nullifyTargetEntryPaths(pathMaps);
  }

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

  const { sourceEntryPath } = pathMap,
        absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    nullifyTargetEntryPath(pathMap);

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
        absoluteTargetFilePath = concatenatePaths(projectsDirectoryPath, targetFilePath),
        targetFileExists = checkFileExists(absoluteTargetFilePath);

  if (targetFileExists) {
    nullifyEntryPaths(pathMap);

    return;
  }

  try {
    const oldEntryPath = absoluteSourceFilePath, ///
          newEntryPath = absoluteTargetFilePath; ///

    renameEntry(oldEntryPath, newEntryPath);  ///
  } catch (error) {
    nullifyEntryPaths(pathMap);
  }
}

function renameProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath, targetEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        targetDirectoryPath = targetEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        absoluteTargetDirectoryPath = concatenatePaths(projectsDirectoryPath, targetDirectoryPath),
        targetDirectoryExists = checkDirectoryExists(absoluteTargetDirectoryPath);

  if (targetDirectoryExists) {
    nullifyEntryPaths(pathMap);

    return;
  }

  try {
    const oldEntryPath = absoluteSourceDirectoryPath, ///
          newEntryPath = absoluteTargetDirectoryPath; ///

    renameEntry(oldEntryPath, newEntryPath);  ///
  } catch (error) {
    nullifyEntryPaths(pathMap);
  }
}
