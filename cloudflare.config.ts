import { bindings, defineConfig, defineWorker } from "cf/config";
import { createWorkersResponseStoreServiceBindingConfig } from "@vinext/cloudflare/cache/config";

const responseStore = await createWorkersResponseStoreServiceBindingConfig({
  worker: {
    name: "portfolio-temporal-2026-response-store",
    compatibilityDate: "2026-10-09",
    compatibilityFlags: ["nodejs_compat"],
  },
  bucket: "portfolio-temporal-2026-response-store-cache-bodies",
});

export const responseStoreServiceBinding = responseStore.serviceBindingWorker;

export default defineConfig({
  worker: defineWorker({
    ...responseStore.applicationWorker,
    name: "portfolio-temporal-2026",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-09",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    env: {
      ...responseStore.applicationWorker.env,
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
    },
  }),
});
