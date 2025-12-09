import {
	pluginSvgTypes as pluginSvgTypesCore,
	type PluginSvgTypesOptions,
} from "@plugin-svg-types/core";
import type { Plugin } from "vite";

export const pluginSvgTypes = (options: PluginSvgTypesOptions): Plugin => {
  // 关键：创建回调收集器，存储所有通过 api.onExit 注册的回调
  const exitCallbacks: Array<() => void> = [];

  return {
    name: "plugin-svg-types",

    // 构建开始时初始化核心逻辑，注册 onExit 回调收集器
    buildStart() {
      // 定义传给 core 的 api 对象，onExit 用于收集回调
      const api = {
        onExit: (cb: () => void) => {
          exitCallbacks.push(cb); // 收集所有退出回调
        },
      };

      // 执行 core 的 setup，此时 core 内部会调用 api.onExit 注册回调
      pluginSvgTypesCore(options).setup(api);
    },

    // 构建/服务器关闭时，执行所有收集的 onExit 回调
    closeBundle() {
      // 批量执行所有注册的退出回调
      exitCallbacks.forEach((cb) => {
        try {
          cb(); // 执行如 watcher.close() 等逻辑
        } catch (e) {
          this.error(`执行 onExit 回调失败：${(e as Error).message}`);
        }
      });
      // 清空回调数组（避免重复执行）
      exitCallbacks.length = 0;
    },
  };
};

export default pluginSvgTypes;