// Keep the native citation disclosure as a fallback without JavaScript.
document.querySelectorAll('.publications-page-citation').forEach((details, index) => {
    const summary = details.querySelector('summary');
    const panel = details.querySelector('pre');
    const resources = details.parentElement.querySelector('.publications-page-resources');
    const button = document.createElement('button');
    const marker = document.createElement('span');
    const id = `publication-citation-${index}`;

    button.type = 'button';
    button.className = 'publications-page-button';
    button.id = `${id}-button`;
    button.setAttribute('aria-label', summary.getAttribute('aria-label'));
    button.setAttribute('aria-controls', id);
    marker.className = 'publications-page-disclosure-marker';
    marker.setAttribute('aria-hidden', 'true');
    button.append(marker, document.createTextNode(summary.textContent.trim()));

    panel.id = id;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', button.id);
    const synchronize = () => {
        button.setAttribute('aria-expanded', String(details.open));
        marker.textContent = details.open ? '▾' : '▸';
    };
    button.addEventListener('click', () => {
        details.open = !details.open;
        synchronize();
    });
    details.addEventListener('toggle', synchronize);
    synchronize();
    resources.append(button);
    summary.hidden = true;
    details.classList.add('publications-page-citation-enhanced');
});
