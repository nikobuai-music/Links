<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the artist experience on the index route with Embla for gesture-driven album navigation; a single screen preserves the bio-link flow.
- Define music-page styling and motion in src/styles.css and use shared Button variants for controls; this keeps the visual language consistent.
- Keep official external destinations in a shared artist-links module with regression tests; all listening actions navigate off-site rather than embedding audio.
