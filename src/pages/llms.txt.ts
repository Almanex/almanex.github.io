import { getCollection } from 'astro:content';
import { PROJECTS_DATA } from '../data/projects.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  let intro = `# Alex's Portfolio\n\n> An interactive developer portfolio showcasing open-source Win32/C++ tools, custom Windows utilities, localization packages, and technical blog posts by Alex (Almanex).\n\n## Profile & Contact\n\n- [Biography & Bio](/about): Software engineering skills, workflow specifications, and background.\n- [Get in Touch](/contact): Collaboration channels, email obfuscation details, and communication preferences.\n- [GitHub Profile](https://github.com/Almanex): Hosted source repositories for all featured utilities.`;

  try {
    const introPath = path.join(process.cwd(), 'public', 'llms-intro.md');
    const customIntro = await fs.readFile(introPath, 'utf-8');
    if (customIntro.trim()) {
      intro = customIntro.trim();
    }
  } catch (err) {
    // Fallback to default intro
  }

  // Generate Projects list
  const projectsList = Object.entries(PROJECTS_DATA)
    .filter(([_, p]: [string, any]) => p.status !== 'DRAFT')
    .map(([id, p]: [string, any]) => {
      return `- [${p.title}](/projects/${id}): ${p.subtitle || ''}`;
    })
    .join('\n');

  // Generate Blog posts list
  const posts = await getCollection('blog');
  const activePosts = posts.filter(post => post.data.status !== 'DRAFT');
  const sortedPosts = activePosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  
  const blogList = sortedPosts
    .map(post => {
      const cleanSlug = post.id.replace(/^(ru|de)\//, '');
      const prefix = post.id.startsWith('ru/') ? '/ru' : post.id.startsWith('de/') ? '/de' : '';
      return `- [${post.data.title}](${prefix}/blog/${cleanSlug}): ${post.data.description || ''}`;
    })
    .join('\n');

  const content = [
    intro,
    '',
    '## Featured Software Projects',
    '',
    projectsList,
    '',
    '## Technical Blog Logs',
    '',
    blogList,
    ''
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
