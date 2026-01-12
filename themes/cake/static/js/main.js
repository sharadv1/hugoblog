/**
 * CAKE THEME - JavaScript
 * Handles: theme toggle, TOC drawer, expandable posts, tag filtering
 */

// ========================================
// THEME TOGGLE
// ========================================

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// ========================================
// TOC DRAWER
// ========================================

function toggleTOC() {
  const drawer = document.querySelector('.toc-drawer');
  const overlay = document.querySelector('.toc-overlay');

  drawer.classList.toggle('active');
  overlay.classList.toggle('active');

  // Prevent body scroll when drawer is open
  document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
}

// Close TOC on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const drawer = document.querySelector('.toc-drawer');
    if (drawer && drawer.classList.contains('active')) {
      toggleTOC();
    }
  }
});

// ========================================
// EXPANDABLE POSTS
// ========================================

function expandPost(slug) {
  const targetCard = document.getElementById('post-' + slug);
  if (!targetCard) return;

  const allCards = document.querySelectorAll('.post-card');
  const isCurrentlyExpanded = targetCard.classList.contains('expanded');

  // Collapse all posts (accordion behavior)
  allCards.forEach(card => {
    card.classList.remove('expanded');
  });

  // If the clicked post wasn't already expanded, expand it
  if (!isCurrentlyExpanded) {
    targetCard.classList.add('expanded');

    // Update URL hash without scrolling
    history.pushState(null, null, '#post-' + slug);

    // Scroll to the post with a small delay for animation
    setTimeout(() => {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  } else {
    // Clear hash if collapsing
    history.pushState(null, null, window.location.pathname);
  }
}

// Handle direct links to posts (e.g., /#post-writing-is-hard)
function handleHashOnLoad() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#post-')) {
    const slug = hash.replace('#post-', '');
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      expandPost(slug);
    }, 100);
  }
}

// ========================================
// TAG FILTERING
// ========================================

let activeTag = null;

function filterByTag(tag) {
  const allCards = document.querySelectorAll('.post-card');
  const allTagButtons = document.querySelectorAll('.tag-filter');
  const tocItems = document.querySelectorAll('.toc-item');
  const indicator = document.getElementById('tagFilterIndicator');
  const tagName = document.getElementById('tagFilterName');

  // If clicking the same tag, clear the filter
  if (activeTag === tag) {
    clearTagFilter();
    return;
  }

  activeTag = tag;

  // Show tag filter indicator
  if (indicator && tagName) {
    tagName.textContent = '#' + tag;
    indicator.classList.add('active');
  }

  // Update button states
  allTagButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.trim() === '#' + tag) {
      btn.classList.add('active');
    }
  });

  // Filter posts
  allCards.forEach(card => {
    const cardTags = card.dataset.tags || '';
    const tagsArray = cardTags.split(',').map(t => t.trim().toLowerCase());

    if (tagsArray.includes(tag.toLowerCase())) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
      card.classList.remove('expanded');
    }
  });

  // Filter TOC items
  tocItems.forEach(item => {
    const itemTags = item.dataset.tags || '';
    const tagsArray = itemTags.split(',').map(t => t.trim().toLowerCase());

    if (tagsArray.includes(tag.toLowerCase())) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function clearTagFilter() {
  activeTag = null;

  const allCards = document.querySelectorAll('.post-card');
  const allTagButtons = document.querySelectorAll('.tag-filter');
  const tocItems = document.querySelectorAll('.toc-item');
  const indicator = document.getElementById('tagFilterIndicator');

  // Hide tag filter indicator
  if (indicator) {
    indicator.classList.remove('active');
  }

  // Remove active state from all buttons
  allTagButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show all posts
  allCards.forEach(card => {
    card.classList.remove('hidden');
  });

  // Show all TOC items
  tocItems.forEach(item => {
    item.classList.remove('hidden');
  });
}

// ========================================
// TAGS SECTION TOGGLE
// ========================================

function toggleTagsSection() {
  const tagsSection = document.querySelector('.toc-tags');
  if (tagsSection) {
    tagsSection.classList.toggle('expanded');
  }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  handleHashOnLoad();

  // Handle browser back/forward navigation
  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#post-')) {
      const slug = hash.replace('#post-', '');
      expandPost(slug);
    } else {
      // Collapse all if no hash
      document.querySelectorAll('.post-card').forEach(card => {
        card.classList.remove('expanded');
      });
    }
  });
});
