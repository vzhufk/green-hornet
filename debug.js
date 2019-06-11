import debug from "debug";

const std = debug("bot");

export default {
  in: std.extend("in"),
  out: std.extend("out"),
  info: std.extend("info")
};
