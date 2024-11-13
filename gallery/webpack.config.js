import rspack from "../build-scripts/rspack.cjs";
import env from "../build-scripts/env.cjs";

export default rspack.createGalleryConfig({
  isProdBuild: env.isProdBuild(),
  isStatsBuild: env.isStatsBuild(),
  latestBuild: true,
});
