import { defineConfig } from "tinacms";
import { blog_templateFields } from "./templates";
import { official_announce_templateFields } from "./templates";
import { zaimu_templateFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = "tina";

export default defineConfig({
  branch,
  clientId: process.env.CLIENTID as string, // Get this from tina.io
  token: process.env.TOKEN as string, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "News",
        name: "news",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "FAQ",
        name: "faq",
        path: "content",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "faq",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
