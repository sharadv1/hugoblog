# Blog Drafts Directory

This directory is for writing blog post drafts. Files here will NOT be published automatically.

## How to Create a New Draft

1. Create a new `.md` file in this directory (e.g., `my-new-post.md`)
2. Copy the template below into your file
3. Write your content
4. When ready to publish, tell Claude to publish it

## Post Template

```markdown
+++
date = 'YYYY-MM-DDTHH:MM:SS-05:00'
draft = true
title = 'Your Post Title'
tags = ["tag1", "tag2"]
+++

Your content here...
```

## Publishing

When you're ready to publish a draft, just ask Claude:
- "Publish my draft about [topic]"
- "Move [filename] to published posts"

Claude will:
1. Update the date to the current time
2. Set `draft = false`
3. Move the file from `drafts/` to `posts/`

## Tips

- Use descriptive filenames like `my-thoughts-on-trading.md`
- Tags help organize posts (e.g., "writing", "macro", "trading")
- The filename becomes the URL slug (e.g., `my-thoughts-on-trading`)
