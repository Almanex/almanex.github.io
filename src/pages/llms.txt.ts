import { getCollection } from 'astro:content';
import { PROJECTS_DATA } from '../data/projects.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  const siteUrl = 'https://almanex.github.io';
  let intro = `# Alex's Portfolio\n\n> An interactive developer portfolio showcasing open-source Win32/C++ tools, custom Windows utilities, localization packages, and technical blog posts by Alex (Almanex).`;

  try {
    const introPath = path.join(process.cwd(), 'public', 'llms-intro.md');
    const customIntro = await fs.readFile(introPath, 'utf-8');
    if (customIntro.trim()) {
      intro = customIntro.trim();
    }
  } catch (err) {
    // Fallback to default intro
  }

  // Add Language Versions as required by multi-language standard
  const langVersionsSection = [
    '## Language Versions',
    `- [English version](${siteUrl}/): Main English site and projects.`,
    `- [Русская версия](${siteUrl}/ru): Russian localized version of the portfolio.`,
    `- [Deutsche Version](${siteUrl}/de): German localized version of the portfolio.`,
  ].join('\n');

  // Generate Projects list (English, Limit 10)
  const activeProjects = Object.entries(PROJECTS_DATA)
    .filter(([_, p]: [string, any]) => p.status !== 'DRAFT');
  
  const limitedProjects = activeProjects.slice(0, 10);
  const projectsList = limitedProjects
    .map(([id, p]: [string, any]) => {
      const englishSubtitle = p.subtitle || '';
      return `- [${p.title}](${siteUrl}/projects/${id}): ${englishSubtitle}`;
    })
    .join('\n');

  // Generate Blog posts list (English only, Limit 10)
  const posts = await getCollection('blog');
  const activePosts = posts.filter(post => post.data.status !== 'DRAFT');
  const enPosts = activePosts.filter(post => !post.id.startsWith('ru/') && !post.id.startsWith('de/'));
  const sortedPosts = enPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  
  const limitedPosts = sortedPosts.slice(0, 10);
  const blogList = limitedPosts
    .map(post => {
      return `- [${post.data.title}](${siteUrl}/blog/${post.id}): ${post.data.description || ''}`;
    })
    .join('\n');

  const content = [
    intro,
    '',
    langVersionsSection,
    '',
    '## Featured Software Projects',
    '',
    projectsList,
    '',
    '## Technical Blog Logs',
    '',
    blogList,
    '',
    '## Metadata',
    '* Languages: en, ru, de',
    `* Last Updated: ${new Date().toISOString().split('T')[0]}`,
    `* Full Index: [llms-full.txt](${siteUrl}/llms-full.txt)`
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
