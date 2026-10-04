# Minimal Teams

## About Minimal Teams

### A simplified, straightforward, and data-centric Jekyll website template

[Minimal Teams](https://github.com/mhmdjouni/minimal-teams) is a minimalistic Jekyll template designed for scientific or academic research groups and projects, with an emphasis on being **data-centric**. The majority of the content is stored in `YAML` files under the `_data/` folder. This approach provides:
- Easy management of most content through `_data/`.
- Simplified `_config.yml` focused on core Jekyll configuration.
- Real-time updates during development without having to rebuild the website after changes to `_config.yml`.

Inspired partially by [Minima](https://github.com/jekyll/minima), Minimal Teams is designed for flexibility and simplicity, especially for users who need quick and intuitive management of site content.

---

## Features

We tend to separate data, code, and design from each others as much as possible:
- **Data-Centric Design**: Centralized data in `_data/` for easy updates.
- **Modularity**: Add or remove features without affecting the template's core.
- **Customizable Pages**: Ready to adapt for publications, team members, projects, news posts, and more.

---

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
        - `reading_group.yml`: Reading-group information, participation links, organizers, and sessions.
3. **Styling**:
    - Modify the CSS in `assets/css` for custom styles.
4. **Adding Pages**:
    - For pages that you wish to add to the Navigation Bar, create a new `.html` or `.md` file in the `_pages_navbar/` directory, then add the page's info in `_data/navbar.yml`.
    - For pages that you do not wish to add to the Navigation bar, create a new **collection** (e.g., `publications`) in the `_config.yml` file and the associated folder (e.g., `_publications`), then create the pages inside said folder. For reference, refer to how `pages_navbar` is created and follow suite.
    - Avoid creating pages in the `root/` directory. Try to always group them under a dedicated folder representing a theme or a `collection`.

### 3. Maintaining the Reading Group

The `/reading-group/` page hosts the PICSA Reading Group at GIPSA-lab on the MIRA
website and reads `_data/reading_group.yml`. Edit this file to update content;
the page template and navigation do not need to change when adding sessions.

- `description` supports Markdown. Optional `schedule`, `location`, and `timezone`
  are plain text. Leave unused fields blank.
- `links` contains participation links (meeting, mailing list, discussions, or
  recordings). Each link requires `type` (its label) and `link` (its URL), with an
  optional Font Awesome `icon`. Session resource links use the same format.
- `organizers` and session `presenters` contain people. For a MIRA member, use
  `member_key` matching a `key` in `_data/members.yml`; their name and
  `personal_link` are taken from that file. Guests use `name` and an optional `link`.
- Each session requires `date` as a **quoted `YYYY-MM-DD` string**, `title`, a
  nonempty `presenters` list, and `status` set to `upcoming` or `past`.
  Optional fields are `time`, `location`, Markdown `abstract`, Markdown
  `speaker_bio`, and `links`. A speaker biography appears in an expandable
  **About the Speaker** section.
  The session location defaults to the group location, and session times are
  displayed with the group timezone when provided.

For example, add entries following this structure
(the details below are illustrative, not actual meetings):

```yaml
description: >-
  A reading group for discussing **research papers** together.
schedule: "Every other Thursday"
location: "Meeting room"
timezone: "Europe/Paris"
links:
  - type: Join the meeting
    link: https://example.org/meeting
    icon: fas fa-video
organizers:
  - member_key: jounim
sessions:
  - date: "2026-10-15"
    title: "Example paper discussion"
    status: upcoming
    time: "14:00–15:00"
    presenters:
      - member_key: jounim
      - name: Guest Presenter
        link: https://example.org/presenter
    abstract: |
      Discuss the paper's **main results** and open questions.
    links:
      - type: Paper
        link: https://example.org/paper
        icon: fas fa-file-pdf
      - type: Slides
        link: /media/reading-group/example-slides.pdf
```

Add sessions in any order: upcoming sessions are sorted earliest first, and past
sessions newest first, grouped by calendar year. After a meeting, change its
`status` to `past` and add any notes, slides, or recording links to that same entry.
Status is explicit and does not change automatically when a date passes.

Internal URLs in link entries start with `/` and respect the site's `baseurl`;
external URLs and email links are preserved. Markdown links are rendered as
written; use link entries for local resources that need the `baseurl` prefix.
For local materials, place the files under
`media/reading-group/` and link to them (for example,
`/media/reading-group/example-notes.pdf`). Empty optional fields and links are
hidden, as is the organizers section when its list is empty.

Run `bundle exec jekyll serve` to preview changes, or `bundle exec jekyll build`
to check the build. Publish through the site's existing workflow.

---

## Contributing

Contributions of all kinds are welcome! Here's how you can help:

### 1. Reporting Issues
- Found a bug or have a feature request? [Open an issue](https://github.com/mhmdjouni/minimal-teams/issues) with detailed information.

### 2. Submitting Changes
1. Fork the repository.
2. Create a feature branch:
    
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    
    ```bash
    git commit -m "Add feature or fix description"
    ```
4. Push to your branch:
    
    ```bash
    git push origin feature-name
    ```
5. Open a pull request against the `develop` branch.

### 3. Writing Documentation
Help improve the documentation in the `README.md` or add detailed guides for advanced users.

---

## Roadmap

Planned features include:
- Default and customizable pages for individual items (e.g., publications, team members, blog).
- Integration with popular Jekyll plugins for added functionality.

---

## License

Minimal Teams is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
