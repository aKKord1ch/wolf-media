module.exports = {
  "responsive-font-size": (mixin, ...args) => {
    let [min, max] = args.length === 1 ? args[0].split(" ") : args;

    return {
      fontSize: `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - 600px) / (1920 - 600))), ${max}px)`,
    };
  },
  "responsive-width": (mixin, ...args) => {
    let [min, max] = args.length === 1 ? args[0].split(" ") : args;

    return {
      fontSize: `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - 600px) / (1920 - 600))), ${max}px)`,
    };
  },
};
