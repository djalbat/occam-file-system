"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

const { concatenatePaths } = pathUtilities,
      { createFile: createFile, createDirectory: createDirectory } = fileSystemUtilities;

export default function createProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  pathMaps.forEach((pathMap) => {
    createProjectEntry(pathMap);
  });

  json = {
    pathMaps
  };

  callback(json);
}

export function createProjectEntry(projectsDirectoryPath, pathMap) {
  const { sourcePath } = pathMap;

  if (sourcePath === null) {
    return;
  }

  const { entryDirectory } = pathMap;

  entryDirectory ?
    createProjectDirectory(projectsDirectoryPath, pathMap) :
      createProjectFile(projectsDirectoryPath, pathMap);
}

function createProjectFile(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap,
        sourceFilePath = sourceEntryPath, ///
        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath);

  try {
    const filePath = absoluteSourceFilePath;  ///

    createFile(filePath);
  } catch (error) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });
  }
}

function createProjectDirectory(projectsDirectoryPath, pathMap) {
  const { sourceEntryPath } = pathMap,
        sourceDirectoryPath = sourceEntryPath, ///
        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath);

  try {
    const directoryPath = absoluteSourceDirectoryPath;  ///

    createDirectory(directoryPath);
  } catch (error) {
    const targetEntryPath = null;

    Object.assign(pathMap, {
      targetEntryPath
    });
  }
}
