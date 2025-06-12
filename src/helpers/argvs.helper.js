import { Command } from "commander";

const argvs = new Command();

argvs.option(
    "--mode <mode>",
    "mode eviroment",
    "dev"
)

argvs.parse();

export default argvs.opts();