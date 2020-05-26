/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of a data asset. A physical store, or stream, of data known to the data catalog and containing one or
 * many data entities, possibly in an organized structure of folders. A data asset is often synonymous with
 * a 'System', such as a database, or may be a file container or a message stream.
 *
 */
export interface DataAssetSummary {
  /**
   * Unique data asset key that is immutable.
   */
  "key": string;
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Detailed description of the data asset.
   */
  "description"?: string;
  /**
   * The data catalog's OCID.
   */
  "catalogId"?: string;
  /**
   * External URI that can be used to reference the object. Format will differ based on the type of object.
   *
   */
  "externalKey"?: string;
  /**
   * URI to the data asset instance in the API.
   */
  "uri"?: string;
  /**
   * The date and time the data asset was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2019-03-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The key of the object type. Type keys's can be found via the '/types' endpoint.
   */
  "typeKey"?: string;
  /**
   * State of the data asset.
   */
  "lifecycleState"?: string;
}

export namespace DataAssetSummary {
  export function getJsonObj(obj: DataAssetSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}