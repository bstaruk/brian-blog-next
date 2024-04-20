import { remark } from 'remark';
import html from 'remark-html';

export default async function mdToHtml(md: string) {
  const result = await remark().use(html).process(md);
  return result.toString();
}
