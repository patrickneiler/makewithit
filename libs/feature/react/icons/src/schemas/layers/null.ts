export const ANIMATION_DATA_LAYER_NULL = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "$id": "#/layers/null",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Null.",
      "type": "number",
      "const": 3
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "$ref": "#/helpers/transform",
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "$ref": "#/helpers/boolean",
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "type": "number",
      "$ref": "#/helpers/boolean",
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "ef": {
      "title": "Effects",
      "description": "List of Effects",
      "items": {
        "$ref": "#/effects/index",
        "type": "object"
      },
      "type": "array"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    }
  }
} as const;