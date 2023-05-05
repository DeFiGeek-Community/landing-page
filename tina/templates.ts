import type { TinaField } from "tinacms";
export function blog_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "タイトル",
    },
    {
      type: "string",
      name: "subtitle",
      label: "サブタイトル",
    },
    {
      type: "string",
      name: "excerpt",
      label: "簡単な説明（ブログ一覧の画面で表示される）",
    },
    {
      type: "datetime",
      name: "date",
      label: "日付",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "image",
      name: "thumb_image",
      label: "サムネイル画像",
    },
    {
      type: "string",
      name: "thumb_image_alt",
      label: "thumb_image_alt",
    },
    {
      type: "image",
      name: "image",
      label: "画像（タイトルの下に表示）",
    },
    {
      type: "string",
      name: "image_alt",
      label: "image_alt",
    },
    {
      type: "string",
      name: "tags",
      label: "タグ（任意）",
    },
    {
      type: "object",
      name: "seo",
      label: "seo",
      fields: [
        {
          type: "string",
          name: "title",
          label: "タイトル",
        },
        {
          type: "string",
          name: "description",
          label: "簡単な説明",
        },
        {
          type: "object",
          name: "extra",
          label: "extra",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "value",
              label: "value",
            },
            {
              type: "string",
              name: "keyName",
              label: "keyName",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function official_announce_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "タイトル",
    },
    {
      type: "string",
      name: "subtitle",
      label: "サブタイトル",
    },
    {
      type: "string",
      name: "excerpt",
      label: "簡単な説明（ブログ一覧の画面で表示される）",
    },
    {
      type: "datetime",
      name: "date",
      label: "日付",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "image",
      name: "thumb_image",
      label: "サムネイル画像",
    },
    {
      type: "string",
      name: "thumb_image_alt",
      label: "thumb_image_alt",
    },
    {
      type: "image",
      name: "image",
      label: "画像（タイトルの下に表示）",
    },
    {
      type: "string",
      name: "image_alt",
      label: "image_alt",
    },
    {
      type: "string",
      name: "tags",
      label: "タグ（任意）",
    },
    {
      type: "object",
      name: "seo",
      label: "seo",
      fields: [
        {
          type: "string",
          name: "title",
          label: "タイトル",
        },
        {
          type: "string",
          name: "description",
          label: "簡単な説明",
        },
        {
          type: "object",
          name: "extra",
          label: "extra",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "value",
              label: "value",
            },
            {
              type: "string",
              name: "keyName",
              label: "keyName",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
export function zaimu_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "タイトル",
    },
    {
      type: "string",
      name: "subtitle",
      label: "サブタイトル",
    },
    {
      type: "string",
      name: "excerpt",
      label: "簡単な説明（ブログ一覧の画面で表示される）",
    },
    {
      type: "datetime",
      name: "date",
      label: "日付",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "image",
      name: "thumb_image",
      label: "サムネイル画像",
    },
    {
      type: "string",
      name: "thumb_image_alt",
      label: "thumb_image_alt",
    },
    {
      type: "image",
      name: "image",
      label: "画像（タイトルの下に表示される）",
    },
    {
      type: "string",
      name: "image_alt",
      label: "image_alt",
    },
    {
      type: "string",
      name: "tags",
      label: "タグ（任意）",
    },
    {
      type: "object",
      name: "seo",
      label: "seo",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "object",
          name: "extra",
          label: "extra",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "value",
              label: "value",
            },
            {
              type: "string",
              name: "keyName",
              label: "keyName",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
  ] as TinaField[];
}
