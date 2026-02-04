"use strict";

import { File } from "occam-model";

import { saveFile as saveFileEx } from "./utilities/fileSystem"

export default function saveFile(projectsDirectoryPath, json, callback) {
  const file = File.fromJSON(json),
        success = saveFileEx(file, projectsDirectoryPath);

  json = success; ///

  callback(json);
}
