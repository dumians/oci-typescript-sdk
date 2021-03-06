/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.015
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

export interface TransferDeviceSummary {
  "serialNumber"?: string;
  "iscsiIQN"?: string;
  "label"?: string;
  "lifecycleState"?: TransferDeviceSummary.LifecycleState;
  "attachedTransferPackageLabel"?: string;
  "creationTime"?: Date;
  "uploadStatusLogUri"?: string;
}

export namespace TransferDeviceSummary {
  export enum LifecycleState {
    PREPARING = "PREPARING",
    READY = "READY",
    PACKAGED = "PACKAGED",
    ACTIVE = "ACTIVE",
    PROCESSING = "PROCESSING",
    COMPLETE = "COMPLETE",
    MISSING = "MISSING",
    ERROR = "ERROR",
    DELETED = "DELETED",
    CANCELLED = "CANCELLED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TransferDeviceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
