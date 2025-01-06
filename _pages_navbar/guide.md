---
layout: page_padded
title: Guide
permalink: /guide/
---

# Minimal Teams

## About Minimal Teams

### A simplified, straightforward, and data-centric Jekyll website template

[Minimal Teams](https://github.com/mhmdjouni/minimal-teams) is a minimalistic Jekyll template designed for scientific or academic research groups and projects, with an emphasis on being **data-centric**. The majority of the content is stored in `YAML` files under the `_data/` folder. This approach provides:
- Easy management of most content through `_data/`.
- Simplified `_config.yml` focused on core Jekyll configuration.
- Real-time updates during development without having to rebuild the website after changes to `_config.yml`.

Inspired partially by [Minima](https://github.com/jekyll/minima), Minimal Teams is designed for flexibility and simplicity, especially for users who need quick and intuitive management of site content.

## Features

We tend to separate data, code, and design from each others as much as possible:
- **Data-Centric Design**: Centralized data in `_data/` for easy updates.
- **Modularity**: Add or remove features without affecting the template's core.
- **Customizable Pages**: Ready to adapt for publications, team members, projects, news posts, and more.

## Getting Started

First, make sure [you've installed the Jekyll requirements](https://jekyllrb.com/docs/installation/).

### 1. Use the Template
You can create a new repository based on Minimal Teams by clicking the **"Use this template"** button on the [repository page](https://github.com/mhmdjouni/minimal-teams). Alternatively:
1. Clone the repository:
    
    ```bash
    git clone https://github.com/mhmdjouni/minimal-teams.git
    cd minimal-teams
    ```
2. Install dependencies:
    
    ```bash
    bundle install
    ```
3. Serve the website locally:
    ```bash
    bundle exec jekyll serve
    ```

    or, for live updates:
    ```bash
    bundle exec jekyll serve --live
    ```
4. Visit `http://localhost:4000` to view the website.

### 2. Customizing the Template
1. **Site Configuration**:
    - Update `_config.yml` with your project's basic settings (e.g., title, description, base URL, collections, defaults).
2. **Content Management**:
    - Edit YAML files in `_data/` to update the site content:
        - `members.yml`: Team member information.
        - `publications.yml`: Academic publications or similar items.
        - `projects.yml`: List of ongoing projects.
        - `news.yml`: Blog-like posts, news, talks, collaborations, among other team or research-related activities.
3. **Styling**:
    - Modify the CSS in `assets/css` for custom styles.
4. **Adding Pages**:
    - For pages that you wish to add to the Navigation Bar, create a new `.html` or `.md` file in the `_pages_navbar/` directory, then add the page's info in `_data/navbar.yml`.
    - For pages that you do not wish to add to the Navigation bar, create a new **collection** (e.g., `publications`) in the `_config.yml` file and the associated folder (e.g., `_publications`), then create the pages inside said folder. For reference, refer to how `pages_navbar` is created and follow suite.
    - Avoid creating pages in the `root/` directory. Try to always group them under a dedicated folder representing a theme or a `collection`.

## License

Minimal Teams is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
