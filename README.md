# George Hing's memorial website

This is a memorial website for George Hing built using the [11ty](https://www.11ty.dev/) static site generator.

The site is published to https://www.georgehing.life/

## Preview the site locally

```
npm start
```

## Scrape a playlist from Spotify

This is the JavaScript snippet I used in June 2024 in the console to extract the playlist information as JSON:

```
[...document.querySelectorAll("div.JUa6JJNj7R_Y3i4P8YUX:nth-child(2) > div:nth-child(2) div[data-testid=tracklist-row]")].map((rowEl) => {
    const trackData = {};
    const titleEl = rowEl.querySelector("[data-testid=internal-track-link]");
    trackData.title = titleEl.innerText;
    trackData.artist = titleEl.nextElementSibling.innerText;
    trackData.album = rowEl.querySelector("div:nth-child(3)").innerText

    return trackData;
});
```
