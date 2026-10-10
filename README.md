# Aman &amp; Nishu — Wedding Invitation (React + Supabase)

A full wedding invitation site: click-to-open gate with a ribbon seal,
Taj Mahal reveal, background song, "cordially invite" card, heart-shaped
scratch card, countdown, animated event timeline with dress codes and
Google Maps links, a guest wishes wall backed by Supabase, and a closing
blessings card.

## 1. Install

```bash
npm install
```

## 2. Add your background song

Music is copyrighted, so it isn't included. Drop a track you have the
rights to use at:

```
public/audio/wedding-song.mp3
```

## 3. Connect Supabase (for the wishes wall)

1. Create a free project at https://supabase.com
2. Open the SQL editor and run `supabase/schema.sql`
3. Copy `.env.example` to `.env` and fill in your Project URL and anon
   public key (Project Settings → API):

```bash
cp .env.example .env
```

Without this, the wishes form still renders but shows a friendly
"preview mode" notice instead of saving anything.

## 4. Edit your details

Everything — names, parents' names, wedding date, city, venue, and each
event's time/dress code/venue — lives in one place:

```
src/data/weddingData.js
```

## 5. Run it

```bash
npm run dev
```

Then open the printed local URL in your browser.

## 6. Build for hosting

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy to Netlify, Vercel,
GitHub Pages, or any static host.

## Project structure

```
src/
  App.jsx                  – wires all sections together
  data/weddingData.js      – all editable wedding content
  supabaseClient.js        – Supabase connection
  hooks/useScrollReveal.js – scroll-triggered animation hook
  components/
    GateIntro.jsx          – ribbon-seal gate + Taj Mahal reveal + song trigger
    Hero.jsx               – post-gate hero
    InviteCard.jsx         – "we cordially invite you" card
    ScratchCardHeart.jsx   – heart-shaped scratch-to-reveal save the date
    Countdown.jsx          – live countdown timer
    EventsTimeline.jsx     – scroll-animated event timeline + dress code + map links
    WishesForm.jsx         – guest wishes form + live wall (Supabase)
    BlessingsClosing.jsx   – closing blessings card
    Footer.jsx
    AudioToggle.jsx        – floating mute/play button
supabase/schema.sql        – SQL to create the wishes table
```
