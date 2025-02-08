function type(e) {
  if (typeof e == "number") {
    if (Number.isInteger(e)) {
      return "integer";
    } else {
      return "float";
    }
  } else if (typeof e == "object") {
    if (Array.isArray(e)) {
      return "array";
    } else if (e == null) {
      return "null";
    } else if (e.constructor.name == "Map") {
      return "map";
    } else if (e.constructor.name == "Set") {
      return "set";
    } else {
      return typeof e;
    }
  } else {
    return typeof e;
  }
}
