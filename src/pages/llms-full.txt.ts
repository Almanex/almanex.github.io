import { getCollection } from 'astro:content';
import { PROJECTS_DATA } from '../data/projects.js';
import { PROJECT_TRANSLATIONS } from '../data/translations.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const siteUrl = 'https://almanex.github.io';
  let intro = `# Alex's Portfolio (Full Index)\n\n> Complete index of all projects, biography details, and technical blog posts in all languages.`;

  try {
    const introPath = path.join(process.cwd(), 'public', 'llms-intro.md');
    const customIntro = await fs.readFile(introPath, 'utf-8');
    if (customIntro.trim()) {
      // Customize header title slightly to specify full index
      intro = customIntro.trim().replace(/^# (.*)/, '# $1 (Full Index)');
    }
  } catch (err) {
    // Fallback to default intro
  }

  // Add Language Versions
  const langVersionsSection = [
    '## Language Versions',
    `* [English version](${siteUrl}/) - Main English site.`,
    `* [Русская версия](${siteUrl}/ru) - Russian localized site.`,
    `* [Deutsche Version](${siteUrl}/de) - German localized site.`,
  ].join('\n');

  // Generate Projects list (English subtitles, No Limit)
  const activeProjects = Object.entries(PROJECTS_DATA)
    .filter(([_, p]: [string, any]) => p.status !== 'DRAFT');
  
  const projectsList = activeProjects
    .map(([id, p]: [string, any]) => {
      const englishSubtitle = PROJECT_TRANSLATIONS.en?.[id]?.subtitle || p.subtitle || '';
      return `- [${p.title}](${siteUrl}/projects/${id}): ${englishSubtitle}`;
    })
    .join('\n');

  // Generate Blog posts list - Grouped by Language
  const posts = await getCollection('blog');
  const activePosts = posts.filter(post => post.data.status !== 'DRAFT');
  const sortedPosts = activePosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // 1. English Blog
  const enPostsList = sortedPosts
    .filter(post => !post.id.startsWith('ru/') && !post.id.startsWith('de/'))
    .map(post => `- [${post.data.title}](${siteUrl}/blog/${post.id}): ${post.data.description || ''}`)
    .join('\n');

  // 2. Russian Blog
  const ruPostsList = sortedPosts
    .filter(post => post.id.startsWith('ru/'))
    .map(post => {
      const cleanSlug = post.id.replace(/^ru\//, '');
      return `- [${post.data.title}](${siteUrl}/ru/blog/${cleanSlug}): ${post.data.description || ''}`;
    })
    .join('\n');

  // 3. German Blog
  const dePostsList = sortedPosts
    .filter(post => post.id.startsWith('de/'))
    .map(post => {
      const cleanSlug = post.id.replace(/^de\//, '');
      return `- [${post.data.title}](${siteUrl}/de/blog/${cleanSlug}): ${post.data.description || ''}`;
    })
    .join('\n');

  const content = [
    intro,
    '',
    langVersionsSection,
    '',
    '## Featured Software Projects (English)',
    '',
    projectsList,
    '',
    '## Technical Blog Logs (English)',
    '',
    enPostsList || '*No posts available*',
    '',
    '## Блог на русском (Russian Blog Posts)',
    '',
    ruPostsList || '*Записи отсутствуют*',
    '',
    '## Blog auf Deutsch (German Blog Posts)',
    '',
    dePostsList || '*Keine Beiträge vorhanden*',
    '',
    '## Metadata',
    '* Languages: en, ru, de',
    `* Last Updated: ${new Date().toISOString().split('T')[0]}`,
    `* Concise Index: [llms.txt](${siteUrl}/llms.txt)`
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
