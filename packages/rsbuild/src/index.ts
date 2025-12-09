import {
	pluginSvgTypes as pluginSvgTypesCore,
	type SvgTypesOptions,
} from "@plugin-svg-types/core";
import type { RsbuildPlugin } from "@rsbuild/core";

export const pluginSvgTypes = (
	options?: SvgTypesOptions,
): RsbuildPlugin => ({
	name: "plugin-svg-types",
	setup(api) {
		pluginSvgTypesCore(options).setup(api);
	},
});

export default pluginSvgTypes;
