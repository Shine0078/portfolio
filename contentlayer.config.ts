import {
  defineDocumentType,
  makeSource,
  type ComputedFields,
} from "contentlayer2/source-files";
import { readingTime } from "@/lib/utils";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace("posts/", ""),
  },
  readingTime: {
    type: "string",
    resolve: (doc) => readingTime(doc.body.raw),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  disableImportAliasWarning: true,
});
