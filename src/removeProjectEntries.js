"use strict";

import { pathUtilities, fileSystemUtilities } from "necessary";

import { asynchronousForEach } from "./utilities/pathMaps";


const { concatenatePaths } = pathUtilities,
      { isDirectoryEmpty,
        checkEntryExists,
        removeEntry: removeFileEx,
        removeEntry: removeDirectoryEx } = fileSystemUtilities;

export default function removeProjectEntries(projectsDirectoryPath, json, callback) {
  const { pathMaps } = json;

  removeEntries(pathMaps, projectsDirectoryPath, (targetEntryPaths) => {
    const json = {
      targetEntryPaths
    };

    callback(json);
  });
}

export function removeEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, callback) {






  const absoluteSourceEntryPath = concatenatePaths(projectsDirectoryPath, sourceEntryPath),
        sourceEntryExists = checkEntryExists(absoluteSourceEntryPath);

  if (!sourceEntryExists) {
    targetEntryPath = null;

    callback(sourceEntryPath, targetEntryPath);

    return;
  }

  entryDirectory ?
    removeDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) :
      removeFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback);
}

export function removeDirectory(directoryPath, callback) {
  let error = null;

  try {
    removeDirectoryEx(directoryPath);
  } catch (nativeError) {
    error = nativeError;  ///
  }

  callback(error);
}

export function removeFile(filePath, callback) {
  let error = null;

  try {
    removeFileEx(filePath);
  } catch (nativeError) {
    error = nativeError;  ///
  }

  callback(error);
}

function removeEntries(pathMaps, projectsDirectoryPath, callback) {
  const targetEntryPaths = [];

  asynchronousForEach(
    pathMaps,
    (sourceEntryPath, targetEntryPath, entryDirectory, next, done, index) => {
      removeEntryOperation(sourceEntryPath, targetEntryPath, entryDirectory, projectsDirectoryPath, (sourceEntryPath, targetEntryPath) => {
        targetEntryPaths.push(targetEntryPath);

        next();
      });
    },
    () => {
      callback(targetEntryPaths);
    }
  );
}

function removeFileOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceFilePath = sourceEntryPath, ///

        absoluteSourceFilePath = concatenatePaths(projectsDirectoryPath, sourceFilePath),











        entryPath = absoluteSourceFilePath; ///


  removeFile(entryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}

function removeDirectoryOperation(sourceEntryPath, targetEntryPath, projectsDirectoryPath, callback) {
  const sourceDirectoryPath = sourceEntryPath,  ///

        absoluteSourceDirectoryPath = concatenatePaths(projectsDirectoryPath, sourceDirectoryPath),
        sourceDirectoryEmpty = isDirectoryEmpty(absoluteSourceDirectoryPath);

  if (!sourceDirectoryEmpty) {
    targetEntryPath = sourceEntryPath;  ///

    callback(sourceEntryPath, targetEntryPath);

    return;
  }



















  const directoryPath = absoluteSourceDirectoryPath;  ///

  removeDirectory(directoryPath, (error) => {
    if (error) {
      targetEntryPath = sourceEntryPath;  ///
    }

    callback(sourceEntryPath, targetEntryPath);
  });
}
