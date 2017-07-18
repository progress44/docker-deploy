module.exports.prompt = [{
  name: "DB_PORT",
  default: 8806,
  message: "DBMS Port".magenta
}, {
  default: process.cwd().split("/").pop(),
  name: "PROJECT_NAME",
  required: true,
  validate: input => !/(?=.*[A-Z])/g.test(input) || "Project name must be lowercase",
  message: "Project name".magenta
}, {
  default: '1.0.0',
  name: "VERSION",
  message: "Version of the project".magenta
}, {
  default: 'master',
  name: "GIT_BRANCH",
  message: "Project branch".magenta
}]

module.exports.map = {
  DB_PORT: "DB_PORT",
  PROJECT_NAME: ["COMPOSE_PROJECT_NAME", "PROJECT_NAME"],
  GIT_BRANCH: "GIT_BRANCH",
  VERSION: "VERSION"
}

module.exports.path = ""

module.exports.defaults = null

module.exports.dependencies = [
  { PHP_MODS:     {php: "PHP_MODS"} }
]