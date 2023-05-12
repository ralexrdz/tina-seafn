import { defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineStaticConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
    host: true
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",            
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "string",
            name: "categories",
            label: "Issue Areas",
            list: true,
            options: [
              { 
                value: "immigration",
                label: "Immigration",
              },
              { 
                value: "LGBTQ",
                label: "LGBTQ",
              },
              { 
                value: "criminalization",
                label: "Criminalization",
              },
              { 
                value: "health",
                label: "Health",
              },
              { 
                value: "climate",
                label: "Climate",
              },
              { 
                value: "youth",
                label: "Youth",
              },
              { 
                value: "gender",
                label: "Gender",
              },
              { 
                value: "art",
                label: "Art",
              },
              { 
                value: "war",
                label: "War",
              },
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Content Type",
            list: true,
            options: [
              {
                value: "video",
                label: "Video"
              },
              {
                value: "music",
                label: "Music"
              },
              {
                value: "book",
                label: "Book"
              },
              {
                value: "article",
                label: "Article"
              },
              {
                value: "art",
                label: "Art"
              },
              {
                value: "podcast",
                label: "Podcast"
              },
            ]
          },
          {
            type: "string",
            name: "ethnic_groups",
            label: "Ethnic Groups",
            list: true,
            options: [
              {
                value: "vietnamese",
                label: "Vietnamese"
              },
              {
                value: "cambodian",
                label: "Cambodian"
              },
              {
                value: "lao",
                label: "Lao"
              },
              {
                value: "hmong",
                label: "Hmong"
              },
              {
                value: "mien",
                label: "Mien"
              },
              {
                value: "khmu",
                label: "Khmu"
              },
              {
                value: "montagnard",
                label: "Montagnard"
              },
              {
                value: "yen le espiritu",
                label: "Yen Le Espiritu"
              },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

