import {
	default as pluginSvgTypesCore,
	type PluginSvgTypesOptions,
} from "@plugin-svg-types/core";
import type { RsbuildPlugin } from "@rsbuild/core";

export const pluginSvgTypes = (
	options?: PluginSvgTypesOptions,
): RsbuildPlugin => ({
	name: "plugin-svg-types",
	setup(api) {
		pluginSvgTypesCore(options).setup(api);
	},
});

export default pluginSvgTypes;
