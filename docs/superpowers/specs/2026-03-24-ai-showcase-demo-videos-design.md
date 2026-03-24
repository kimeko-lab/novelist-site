# AI Showcase Demo Videos — Design Spec

## Goal

Add three short looping video demos to the AIShowcase section of novelist-site, replacing the static chat cards with video-on-top + chat-below layout. Videos show the Novelist AI panel responding to real queries about a pre-built dummy novel.

## Scope

- **In scope:** 3 demo videos (Plot Auditor, Character Developer, Scene Reviewer), dummy novel data, AIShowcase component update, video files in `public/demos/`
- **Out of scope:** Hero section video, Features section videos, character relationship map demo, other feature demos (deferred to phase 3)

---

## Part 1: Dummy Novel — "The Harbor Secret"

A purpose-built novel inserted directly into the Novelist SQLite database at `%APPDATA%\Novelist\novelist.db` (Windows path: `C:\Users\<user>\AppData\Roaming\Novelist\novelist.db`) via a Node.js seed script at `scripts/seed-demo-novel.cjs`. Content is carefully crafted so the AI gives specific, story-grounded answers to the three demo questions.

### Novel Metadata

| Field | Value |
|-------|-------|
| Title | The Harbor Secret |
| Description | A noir thriller set in a coastal city, following investigative journalist Elena Vasquez as she uncovers a decades-old conspiracy tied to the harbor district — and the man who's been hiding the truth all along. |

### Chapters (6 total)

| Position | Title |
|----------|-------|
| 0 | Ch 1 · The Beginning |
| 1 | Ch 2 · Old Wounds |
| 2 | Ch 3 · The Turn |
| 3 | Ch 4 · Losing Ground |
| 4 | Ch 5 · Shadows |
| 5 | Ch 6 · The Confrontation |

Each chapter has 2 scenes with actual prose content (see below).

### Scene Prose (exact content to insert)

The following is the actual text to store in each scene's `content` field (as plain text — the Novelist DB stores Tiptap JSON, so the seed script must wrap this text in `{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"<text>"}]}]}`).

---

**Ch 1, Scene 1 — "First Steps"**
```
The tip arrived at 11 PM, two lines on a burner number she didn't recognize. Elena Vasquez read it three times before setting her phone face-down on the kitchen table. The harbor district. After everything, it always came back to the harbor. She hadn't been there since her father's funeral — couldn't bring herself to stand on those docks and breathe the salt air and pretend it was just a place. Six years. She'd built a career on asking hard questions of other people and had never once asked the hardest one of herself: what she could have done differently that night. She opened her laptop. If someone was trying to drag her back to the harbor, she was going to find out why before she took a single step in that direction.
```

**Ch 1, Scene 2 — "Setting Out"**
```
Her editor gave her two weeks and a raised eyebrow. Elena took the assignment without explaining why it mattered, which was how she took every assignment. She booked a room at a mid-range hotel on the edge of the old fishing district and packed light. On the train south she reviewed everything she knew about the Alderman family, the consortium that had quietly bought up half the harbor infrastructure over the past decade. Public records, mostly. A few court filings. Nothing that explained the tip, nothing that explained why someone wanted her specifically on this story. She fell asleep to the rhythm of the rails and dreamed, as she sometimes did, of her father's hands — broad and calloused, always smelling of diesel and salt.
```

---

**Ch 2, Scene 1 — "The Contact"**
```
Marcus Cole was not what she'd expected. The address had led her to a machine shop three blocks from the waterfront, and the man who met her at the door looked like he'd been poured into the building decades ago and never left. He listened to her introduction without expression, then said, "You're Vasquez. Miguel's daughter." It wasn't a question. Elena steadied herself. "That's right." He looked at her for a long moment. "He was a good man." She said nothing. She'd learned a long time ago that silence was a better tool than agreement. Marcus crossed his arms. "Why are you here? You people never come down to the harbor." Elena met his eyes. "I haven't set foot near the harbor since my father died — not in years. Something changed." Marcus studied her. Then, slowly, he stepped aside to let her in.
```

**Ch 2, Scene 2 — "What Marcus Knows"**
```
He told her about the Alderman consortium in careful fragments, like a man dismantling something he wasn't sure he should. His brother Danny had worked the night shift at the cold storage facility on Pier 7 for three years. Six months ago Danny had seen something — Marcus wouldn't say what — and since then he'd been different. Scared. Marcus had told Danny to keep his head down, to say nothing, but Danny wasn't built for that. "He's going to do something stupid," Marcus said. "I need to know if the people you're writing about are dangerous or just greedy." Elena wrote in her notebook and didn't point out that greed and danger were rarely distinguishable. She asked about the paper trail. Marcus shrugged. "Whatever Danny knows is in his head, not on paper. That's the problem."
```

---

**Ch 3, Scene 1 — "Shifting Alliances"**
```
The meeting at the warehouse changed things, though Elena couldn't have said exactly how or when. One minute Marcus was a reluctant source who measured every word; then there was the moment on the fire escape when the car slowed in front of them and Marcus pulled her back into the shadow without hesitating, and after that something had shifted. He wasn't hostile. He answered her questions more fully, steered her away from dead ends without being asked. Elena noticed it but didn't name it. Naming things made them complicated. She filed two paragraphs of notes that night and deleted them both. Whatever was happening between her and Marcus, it wasn't something she knew how to write yet. His loyalty to his brother Danny remained the fixed point around which everything else turned.
```

**Ch 3, Scene 2 — "The Paper"**
```
The ledger was older than she'd expected — carbon copies in a hand she didn't recognize, dates going back fifteen years. Marcus had lifted it from a locked drawer in his brother's apartment while Danny slept. He laid it on her hotel room table like it was evidence at a crime scene, which it probably was. Elena photographed every page. The names in the ledger were mostly initials, cross-referenced against dates and amounts that grew larger as the years progressed. One set of initials appeared more often than the others. "Do you know who R.A. is?" she asked. Marcus was quiet for a moment. "Everyone does," he said. "That's the problem."
```

---

**Ch 4, Scene 1 — "Stalled"**
```
Three days passed and Elena heard nothing. She waited for Marcus to call. She'd left two messages and received one reply: a single word, "soon," which could mean anything. She spent the days reviewing her notes, cross-referencing the ledger photos against public records, finding connections she'd missed. The harbor was visible from her hotel window and she spent more time than she should staring at it, thinking about her father and the night everything changed. She knew she should be doing something — reaching out to the Alderman family directly, filing a public records request, finding Danny herself. She didn't. She told herself she was waiting for the right moment. She was aware, somewhere, that waiting was easier than acting. That had always been true of her in the places where it mattered most.
```

**Ch 4, Scene 2 — "Dead End"**
```
The public records office gave her nothing she didn't already have. The clerk was polite and unhelpful. Elena sat in the municipal parking lot afterward and looked at her phone, at the thread of unanswered messages, at the photograph of the ledger page she'd made her screensaver so she'd look at it every time she unlocked her phone. A car pulled up beside her, idled for thirty seconds, drove away. It meant nothing — probably meant nothing — but her heart rate didn't return to normal for several minutes. She called her editor and said the story was progressing. She did not say she'd been sitting in a parking lot for an hour waiting for something to happen. She drove back to the hotel and ordered room service and waited for Marcus to call.
```

---

**Ch 5, Scene 1 — "The Flashback"**
```
Six months ago she had stood exactly here. Elena recognized the pier the moment she stepped onto it — the particular angle of the light in the afternoon, the smell of diesel and cold salt water. Six months ago she had stood at this railing and watched the auctioneer's assistant lead the buyer across the deck of her father's old fishing boat, the Marisol, while she kept her hands in her pockets and did not cry. She had told herself then that she was there to close something. She had not told anyone she'd been there at all. She hadn't known then that the buyer — a holding company whose name she'd read in a brochure without registering — was a shell entity owned by the Alderman consortium. She knew it now. She held the railing and let that knowledge settle into her bones.
```

**Ch 5, Scene 2 — "Danny"**
```
Marcus's brother was younger than she'd imagined — early twenties, with the same deliberate quality as Marcus but none of the steadiness. Danny sat across from her at the kitchen table and tore a paper napkin into strips while he talked. He'd seen a man board the cold storage facility at 3 AM who shouldn't have been there. He'd seen what was unloaded. He'd taken a photo on his phone and then deleted it two days later when he realized what it meant. The photo was gone but the image wasn't. He described it in careful detail while Marcus stood in the doorway watching both of them, arms crossed, his face doing the thing it did when he was trying not to show that he was afraid.
```

---

**Ch 6, Scene 1 — "Face to Face"**
```
The warehouse was empty except for the two of them and the sound of water against the pilings below. Elena had come because Marcus had asked her to. She hadn't asked why. He was standing with his back to her when she arrived, looking out through a gap in the boards at the harbor beyond. He didn't turn around when she entered. "I need to know something," he said. His voice was even, which was how she'd learned to recognize when he was working hard to keep it that way. Elena waited. "Everything you've been doing — the ledger, Danny, the Alderman file. Is it about your father?" The question landed somewhere she hadn't prepared for. Before she could answer, Marcus turned. "I never trusted you," he said. "I want you to know that. From the beginning, I didn't trust you." He stopped. Looked at her. "I was wrong."
```

**Ch 6, Scene 2 — "After"**
```
They didn't speak for a long time after that. Elena sat on a packing crate and Marcus sat across from her and the harbor moved outside and neither of them said what they were thinking. Eventually she told him about the Marisol — the auction, six months ago, standing at the railing, not crying. She told him what she hadn't told anyone. He listened in the way he listened to everything, completely, without filling the silence. When she finished he said, "Your father tried to report it. Twelve years ago. Someone made sure the report disappeared." She'd suspected it for a long time. Hearing it said out loud was different. She looked at her hands. "I know," she said. "I've known for a while." He nodded slowly. "So did he."
```

---

### Characters (2)

**Elena Vasquez**
- Role: protagonist
- Description: Investigative journalist in her mid-30s. Sharp, tenacious, carries a quiet grief she rarely shows. Grew up watching her father work the docks before he died under circumstances she still considers suspicious.
- Personality: Driven, methodical, slow to trust. Uses work as an escape from guilt. When cornered emotionally, she deflects into facts and deadlines.
- Notes: Her central flaw is avoidance — she investigates everyone else's secrets but refuses to confront her own role in her father's death. Her active goal is to expose the harbor conspiracy, but her real goal is absolution. In Ch 2 she explicitly says she hasn't been to the harbor in years; in Ch 5 a flashback reveals she was there six months ago for the Marisol auction — a direct inconsistency. In Ch 4 she is entirely reactive, waiting for Marcus rather than pursuing her own leads.

**Marcus Cole**
- Role: supporting
- Description: Former dock worker turned reluctant informant. Late 30s, broad-shouldered, speaks slowly and means it. Has an older brother (Danny) who is entangled in the harbor conspiracy.
- Personality: Fiercely loyal to family above all else. Distrustful of outsiders, especially journalists. Opens up only when he believes someone is genuinely at risk.
- Notes: His central conflict is between protecting Danny and doing the right thing. He views Elena as a threat to Danny at first, then as the only person who can save him. His distrust of Elena is stated explicitly in Ch 6 — but the shift from hostile to trusting between Ch 3 and Ch 4 happens without a clear bridging scene.

### Plot Lines (3)

| Title | Color |
|-------|-------|
| Main Investigation | #8b5cf6 |
| Elena & Marcus | #3b82f6 |
| The Harbor Secret | #10b981 |

### Seed Script

Location: `scripts/seed-demo-novel.cjs` (in the `novelist-site` repo root, but connects to the Novelist app DB).

The script uses `better-sqlite3` (available in the Novelist app's `node_modules`) to:
1. Open the DB at the resolved path
2. Check if a novel titled "The Harbor Secret" already exists — skip if so
3. Insert novel → chapters → scenes → characters → plot_lines in a single transaction
4. Print inserted IDs for verification

Run: `node scripts/seed-demo-novel.cjs`
Verify: open Novelist app → novel should appear in dashboard.

---

## Part 2: Three Demo Videos

### Recording Setup

- **App:** Novelist desktop app (Electron), running in production mode (`dist-electron/` installer)
- **AI Provider:** Groq (verified working, fast response, no quota issues)
- **AI Model:** `llama-3.3-70b-versatile`
- **Crop area:** AI panel only — the right-side panel in Novelist. Do NOT record the full app window.
- **Duration:** 4–6 seconds per video, from question submitted to full response visible
- **Format:** WebM (VP9) primary + MP4 (H.264) fallback (WebM first in `<source>` order — better compression for modern browsers; MP4 as Safari fallback)
- **Output path:** `novelist-site/public/demos/`
- **Size target:** ≤ 5 MB per video (use CRF 33 for VP9, CRF 28 for H.264)

### Finding Crop Coordinates

Before recording, determine the AI panel's screen region:

1. Open Novelist app and resize it to a comfortable size (e.g. maximized or 1280×800)
2. Use the Windows Snipping Tool (`Win+Shift+S`) in rectangle mode — drag over the AI panel only and note the pixel coordinates shown in the toolbar, OR
3. Use PowerShell: `Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Cursor]::Position` while hovering over panel corners
4. Record these four values: `offset_x`, `offset_y` (top-left of AI panel), `width`, `height`
5. Note: at 100% DPI these are physical pixels; at 125% or 150% DPI, multiply logical coords by the DPI scale factor

### Recording Commands

```bash
# Step 1: Record raw footage (8 seconds, adjust -t as needed)
ffmpeg -f gdigrab -framerate 30 \
  -offset_x <X> -offset_y <Y> -video_size <W>x<H> \
  -i desktop -vcodec libx264 -pix_fmt yuv420p \
  -t 8 raw-plot-auditor.mp4

# Step 2: Trim to exact clip (adjust -ss start and -t duration)
ffmpeg -ss 0.5 -i raw-plot-auditor.mp4 -t 5 \
  -vcodec libx264 -crf 28 -pix_fmt yuv420p \
  demo-plot-auditor.mp4

# Step 3: Convert to WebM
ffmpeg -i demo-plot-auditor.mp4 \
  -c:v libvpx-vp9 -crf 33 -b:v 0 \
  demo-plot-auditor.webm
```

Repeat for each video. If ffmpeg is not installed: `winget install ffmpeg` or use the Xbox Game Bar (`Win+G → Start Recording`) for raw capture, then use ffmpeg for trim + encode.

### Recording Retry Strategy

If the AI response on recording day is generic (does not mention Elena, Marcus, harbor, or chapter numbers):

1. **First retry:** rephrase the question slightly — e.g. "Are there any timeline inconsistencies with Elena in the first 5 chapters?" instead of "first half"
2. **Second retry:** check that the novel was seeded correctly (open Novelist, verify characters and scene content are visible)
3. **Third retry:** switch to Claude (Anthropic) provider for one recording — Claude tends to give more story-specific responses
4. **Fallback of last resort:** edit the video with a static frame showing a high-quality AI response typed manually into a Novelist screenshot (not ideal but acceptable for a demo)

Success bar: the response must mention at least 2 of: character name, chapter number, specific plot detail (harbor, father, Danny, Marisol, inconsistency).

### Video 1 — Plot Auditor (`demo-plot-auditor`)

| Field | Value |
|-------|-------|
| Files | `demo-plot-auditor.mp4`, `demo-plot-auditor.webm` |
| Question typed | "Is there anything inconsistent about Elena's timeline in the first half?" |
| Expected AI answer | Catches Ch 2 "haven't been to harbor in years" vs Ch 5 flashback 6 months ago (Marisol auction). May also flag Elena/Marcus trust shift Ch 3→4. |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible on screen |

### Video 2 — Character Developer (`demo-character-dev`)

| Field | Value |
|-------|-------|
| Files | `demo-character-dev.mp4`, `demo-character-dev.webm` |
| Question typed | "Elena feels flat in Ch 4. She's just reacting to events. How do I make her more active?" |
| Expected AI answer | References Elena's guilt over father's death (from character notes + scene content), suggests a small active goal in Ch 4 tied to that guilt. |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible |

### Video 3 — Scene Reviewer (`demo-scene-reviewer`)

| Field | Value |
|-------|-------|
| Files | `demo-scene-reviewer.mp4`, `demo-scene-reviewer.webm` |
| Question typed | "Does the confrontation scene in Ch 6 feel earned?" |
| Expected AI answer | Notes 5-chapter tension buildup, suggests hesitation beat before Marcus speaks, may reference "I never trusted you" line. |
| Start frame | Cursor clicks send button |
| End frame | Full AI response visible |

---

## Part 3: AIShowcase Component Update

### New Card Layout

Each card in `components/AIShowcase.tsx` changes from:
```
[header: icon + role + description]
[chat bubbles: user + AI]
```

To:
```
[header: icon + role + description]
[video: autoPlay muted loop playsInline, aspect-video]
[chat bubbles: user + AI — unchanged]
```

### TypeScript Type

Add `videoSlug: string` to the scenario object type (inline, no separate interface needed):

```ts
const scenarios: {
  icon: string;
  role: string;
  description: string;
  user: string;
  ai: string;
  videoSlug: string;
}[] = [ ... ]
```

### Video Element

WebM listed first (primary for Chrome/Firefox/Edge); MP4 second (fallback for Safari):

```tsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full aspect-video object-cover"
>
  <source src={`/demos/${s.videoSlug}.webm`} type="video/webm" />
  <source src={`/demos/${s.videoSlug}.mp4`} type="video/mp4" />
</video>
```

### Updated `scenarios` array

Each scenario object gains a `videoSlug` field:

| Scenario | videoSlug |
|----------|-----------|
| Plot Auditor | `demo-plot-auditor` |
| Character Developer | `demo-character-dev` |
| Scene Reviewer | `demo-scene-reviewer` |

### Fallback (before videos are recorded)

Until the video files exist, the `<video>` element renders empty — browsers hide it with zero height. Chat bubbles remain visible. No placeholder needed.

---

## Part 4: File Structure

```
novelist-site/
  public/
    demos/
      demo-plot-auditor.mp4
      demo-plot-auditor.webm
      demo-character-dev.mp4
      demo-character-dev.webm
      demo-scene-reviewer.mp4
      demo-scene-reviewer.webm
  components/
    AIShowcase.tsx          ← modified: add videoSlug type + <video> element
  scripts/
    seed-demo-novel.cjs     ← NEW: seeds dummy novel into Novelist DB
```

---

## Implementation Sequence

1. **Write seed script** (`scripts/seed-demo-novel.cjs`) with all novel data from Part 1
2. **Run seed script** — verify novel appears in Novelist app dashboard
3. **Configure Groq in Novelist** — AI Settings → Groq → paste API key → Test Key ✓
4. **Find AI panel crop coordinates** — use Snipping Tool, record X/Y/W/H
5. **Record Video 1** (Plot Auditor) — raw capture → trim → MP4 + WebM
6. **Record Video 2** (Character Developer) — same process
7. **Record Video 3** (Scene Reviewer) — same process
8. **Update AIShowcase.tsx** — add `videoSlug` to scenarios + type, add `<video>` element to card JSX
9. **Verify in browser** — open `http://localhost:3000`, confirm videos autoplay in AIShowcase
10. **Build + push** — `npm run build`, `git push origin main`

---

## Success Criteria

- All 3 videos autoplay silently and loop in the AIShowcase section
- Each AI response in the video mentions at least 2 of: character name, chapter number, specific plot detail (harbor, father, Danny, Marisol, inconsistency)
- Videos are ≤ 5 MB each (WebM) / ≤ 8 MB (MP4)
- Page loads without layout shift (video has fixed `aspect-video` ratio)
- Chat bubbles below each video remain readable and unchanged
- `npm run build` passes with no TypeScript errors
