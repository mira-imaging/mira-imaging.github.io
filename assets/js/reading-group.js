// Keep native disclosures usable when this page enhancement is unavailable.
document.querySelectorAll('.reading-group-session').forEach((session, sessionIndex) => {
    const container = session.querySelector('.reading-group-disclosures');
    const disclosures = Array.from(container.children).filter(child => child.matches('details'));
    if (!disclosures.length) return;

    const controls = document.createElement('div');
    controls.className = 'reading-group-disclosure-controls';
    const title = session.querySelector('.reading-group-session-title').textContent.trim();

    const entries = disclosures.map((details, index) => {
        const summary = details.querySelector('summary');
        const panel = summary.nextElementSibling;
        const button = document.createElement('button');
        const marker = document.createElement('span');
        const label = summary.textContent.trim();
        const id = `reading-group-session-${sessionIndex}-disclosure-${index}`;

        button.type = 'button';
        button.className = 'reading-group-disclosure-button';
        button.id = `${id}-button`;
        button.setAttribute('aria-label', `${label} for ${title}`);
        button.setAttribute('aria-controls', id);
        button.setAttribute('aria-expanded', 'false');
        marker.className = 'reading-group-disclosure-marker';
        marker.setAttribute('aria-hidden', 'true');
        marker.textContent = '▸';
        button.append(marker, document.createTextNode(label));

        panel.id = id;
        panel.setAttribute('role', 'region');
        panel.setAttribute('aria-labelledby', button.id);
        details.open = false;
        summary.hidden = true;
        controls.append(button);
        return { details, button, marker };
    });

    const synchronize = () => {
        entries.forEach(({ details, button, marker }) => {
            button.setAttribute('aria-expanded', String(details.open));
            marker.textContent = details.open ? '▾' : '▸';
        });
    };

    entries.forEach(({ details, button }) => {
        button.addEventListener('click', () => {
            const opening = !details.open;
            entries.forEach(entry => { entry.details.open = opening && entry.details === details; });
            synchronize();
        });
        details.addEventListener('toggle', synchronize);
    });
    container.prepend(controls);
});
