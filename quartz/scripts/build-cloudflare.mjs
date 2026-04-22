import { execSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectDir = resolve(scriptDir, "..")
const contentDir = resolve(projectDir, "..", "Content")
const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx"

try {
  const isShallow = execSync("git rev-parse --is-shallow-repository", {
    cwd: projectDir,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim()

  if (isShallow === "true") {
    execSync("git fetch --unshallow", { cwd: projectDir, stdio: "inherit" })
  }
} catch {
  // Ignore shallow-clone detection failures outside CI.
}

execSync(`${npxCmd} quartz build -d "${contentDir}"`, {
  cwd: projectDir,
  stdio: "inherit",
})
