# AI Showcase Demo Videos Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Record 3 looping demo videos of the Novelist AI panel and add them to the AIShowcase section of novelist-site.

**Architecture:** Write a seed script to populate a dummy novel into Novelist's SQLite DB, use ffmpeg (installed via winget) + Claude computer tool to automate the recording, then update `components/AIShowcase.tsx` to embed the videos above the existing chat bubbles.

**Tech Stack:** Node.js CJS + better-sqlite3 (from Novelist app), ffmpeg (gdigrab), mcp__Claude_in_Chrome__computer for app interaction, Next.js 14 + Tailwind

---

## Files

| Action | File | Purpose |
|--------|------|---------|
| Create | `novelist-site/scripts/seed-demo-novel.cjs` | Inserts dummy novel + all content into Novelist SQLite DB |
| Modify | `novelist-site/components/AIShowcase.tsx` | Add `videoSlug` to scenarios, add `<video>` element above chat |
| Create | `novelist-site/public/demos/` | Directory for 6 video files (3× MP4 + 3× WebM) |

---

## Task 1: Install ffmpeg

**Files:** none

- [ ] **Step 1: Check if ffmpeg is already available**

```bash
ffmpeg -version
```

Expected: "command not found" — if it prints a version, skip to Task 2.

- [ ] **Step 2: Install via winget**

```bash
winget install --id Gyan.FFmpeg -e --accept-package-agreements --accept-source-agreements
```

Expected output ends with: `Successfully installed`

- [ ] **Step 3: Reload shell and verify**

Open a new terminal (or run `refreshenv` if using chocolatey). Then:

```bash
ffmpeg -version
```

Expected: `ffmpeg version 7.x ...`

---

## Task 2: Write the seed script

**Files:**
- Create: `novelist-site/scripts/seed-demo-novel.cjs`

- [ ] **Step 1: Create scripts directory**

```bash
mkdir -p "/c/Users/ariep/novelist-site/scripts"
```

- [ ] **Step 2: Write the seed script**

Create `novelist-site/scripts/seed-demo-novel.cjs` with this exact content:

```js
// seed-demo-novel.cjs
// Inserts "The Harbor Secret" dummy novel into the Novelist SQLite DB.
// Run: node scripts/seed-demo-novel.cjs
// Safe to run multiple times — skips if novel already exists.

const path = require('path');
const os = require('os');
const Database = require(path.join(
  'C:\\Users\\ariep\\Novel Drafting App\\node_modules\\better-sqlite3'
));

const DB_PATH = path.join(os.homedir(), 'AppData', 'Roaming', 'Novelist', 'novelist.db');
const db = new Database(DB_PATH);

const now = Date.now();
const uid = () => require('crypto').randomUUID();

// Wrap plain text in Tiptap JSON
const tiptap = (text) => JSON.stringify({
  type: 'doc',
  content: [{ type: 'paragraph', content: [{ type: 'text', text }] }]
});

// Check if novel already exists
const existing = db.prepare("SELECT id FROM novels WHERE title = 'The Harbor Secret'").get();
if (existing) {
  console.log('✓ Novel already exists, skipping seed.');
  db.close();
  process.exit(0);
}

const NOVEL_ID = uid();

// Scene prose
const SCENES = {
  ch1s1: `The tip arrived at 11 PM, two lines on a burner number she didn't recognize. Elena Vasquez read it three times before setting her phone face-down on the kitchen table. The harbor district. After everything, it always came back to the harbor. She hadn't been there since her father's funeral — couldn't bring herself to stand on those docks and breathe the salt air and pretend it was just a place. Six years. She'd built a career on asking hard questions of other people and had never once asked the hardest one of herself: what she could have done differently that night. She opened her laptop. If someone was trying to drag her back to the harbor, she was going to find out why before she took a single step in that direction.`,
  ch1s2: `Her editor gave her two weeks and a raised eyebrow. Elena took the assignment without explaining why it mattered, which was how she took every assignment. She booked a room at a mid-range hotel on the edge of the old fishing district and packed light. On the train south she reviewed everything she knew about the Alderman family, the consortium that had quietly bought up half the harbor infrastructure over the past decade. Public records, mostly. A few court filings. Nothing that explained the tip, nothing that explained why someone wanted her specifically on this story. She fell asleep to the rhythm of the rails and dreamed, as she sometimes did, of her father's hands — broad and calloused, always smelling of diesel and salt.`,
  ch2s1: `Marcus Cole was not what she'd expected. The address had led her to a machine shop three blocks from the waterfront, and the man who met her at the door looked like he'd been poured into the building decades ago and never left. He listened to her introduction without expression, then said, "You're Vasquez. Miguel's daughter." It wasn't a question. Elena steadied herself. "That's right." He looked at her for a long moment. "He was a good man." She said nothing. She'd learned a long time ago that silence was a better tool than agreement. Marcus crossed his arms. "Why are you here? You people never come down to the harbor." Elena met his eyes. "I haven't set foot near the harbor since my father died — not in years. Something changed." Marcus studied her. Then, slowly, he stepped aside to let her in.`,
  ch2s2: `He told her about the Alderman consortium in careful fragments, like a man dismantling something he wasn't sure he should. His brother Danny had worked the night shift at the cold storage facility on Pier 7 for three years. Six months ago Danny had seen something — Marcus wouldn't say what — and since then he'd been different. Scared. Marcus had told Danny to keep his head down, to say nothing, but Danny wasn't built for that. "He's going to do something stupid," Marcus said. "I need to know if the people you're writing about are dangerous or just greedy." Elena wrote in her notebook and didn't point out that greed and danger were rarely distinguishable. She asked about the paper trail. Marcus shrugged. "Whatever Danny knows is in his head, not on paper. That's the problem."`,
  ch3s1: `The meeting at the warehouse changed things, though Elena couldn't have said exactly how or when. One minute Marcus was a reluctant source who measured every word; then there was the moment on the fire escape when the car slowed in front of them and Marcus pulled her back into the shadow without hesitating, and after that something had shifted. He wasn't hostile. He answered her questions more fully, steered her away from dead ends without being asked. Elena noticed it but didn't name it. Naming things made them complicated. She filed two paragraphs of notes that night and deleted them both. Whatever was happening between her and Marcus, it wasn't something she knew how to write yet. His loyalty to his brother Danny remained the fixed point around which everything else turned.`,
  ch3s2: `The ledger was older than she'd expected — carbon copies in a hand she didn't recognize, dates going back fifteen years. Marcus had lifted it from a locked drawer in his brother's apartment while Danny slept. He laid it on her hotel room table like it was evidence at a crime scene, which it probably was. Elena photographed every page. The names in the ledger were mostly initials, cross-referenced against dates and amounts that grew larger as the years progressed. One set of initials appeared more often than the others. "Do you know who R.A. is?" she asked. Marcus was quiet for a moment. "Everyone does," he said. "That's the problem."`,
  ch4s1: `Three days passed and Elena heard nothing. She waited for Marcus to call. She'd left two messages and received one reply: a single word, "soon," which could mean anything. She spent the days reviewing her notes, cross-referencing the ledger photos against public records, finding connections she'd missed. The harbor was visible from her hotel window and she spent more time than she should staring at it, thinking about her father and the night everything changed. She knew she should be doing something — reaching out to the Alderman family directly, filing a public records request, finding Danny herself. She didn't. She told herself she was waiting for the right moment. She was aware, somewhere, that waiting was easier than acting. That had always been true of her in the places where it mattered most.`,
  ch4s2: `The public records office gave her nothing she didn't already have. The clerk was polite and unhelpful. Elena sat in the municipal parking lot afterward and looked at her phone, at the thread of unanswered messages, at the photograph of the ledger page she'd made her screensaver so she'd look at it every time she unlocked her phone. A car pulled up beside her, idled for thirty seconds, drove away. It meant nothing — probably meant nothing — but her heart rate didn't return to normal for several minutes. She called her editor and said the story was progressing. She did not say she'd been sitting in a parking lot for an hour waiting for something to happen. She drove back to the hotel and ordered room service and waited for Marcus to call.`,
  ch5s1: `Six months ago she had stood exactly here. Elena recognized the pier the moment she stepped onto it — the particular angle of the light in the afternoon, the smell of diesel and cold salt water. Six months ago she had stood at this railing and watched the auctioneer's assistant lead the buyer across the deck of her father's old fishing boat, the Marisol, while she kept her hands in her pockets and did not cry. She had told herself then that she was there to close something. She had not told anyone she'd been there at all. She hadn't known then that the buyer — a holding company whose name she'd read in a brochure without registering — was a shell entity owned by the Alderman consortium. She knew it now. She held the railing and let that knowledge settle into her bones.`,
  ch5s2: `Marcus's brother was younger than she'd imagined — early twenties, with the same deliberate quality as Marcus but none of the steadiness. Danny sat across from her at the kitchen table and tore a paper napkin into strips while he talked. He'd seen a man board the cold storage facility at 3 AM who shouldn't have been there. He'd seen what was unloaded. He'd taken a photo on his phone and then deleted it two days later when he realized what it meant. The photo was gone but the image wasn't. He described it in careful detail while Marcus stood in the doorway watching both of them, arms crossed, his face doing the thing it did when he was trying not to show that he was afraid.`,
  ch6s1: `The warehouse was empty except for the two of them and the sound of water against the pilings below. Elena had come because Marcus had asked her to. She hadn't asked why. He was standing with his back to her when she arrived, looking out through a gap in the boards at the harbor beyond. He didn't turn around when she entered. "I need to know something," he said. His voice was even, which was how she'd learned to recognize when he was working hard to keep it that way. Elena waited. "Everything you've been doing — the ledger, Danny, the Alderman file. Is it about your father?" The question landed somewhere she hadn't prepared for. Before she could answer, Marcus turned. "I never trusted you," he said. "I want you to know that. From the beginning, I didn't trust you." He stopped. Looked at her. "I was wrong."`,
  ch6s2: `They didn't speak for a long time after that. Elena sat on a packing crate and Marcus sat across from her and the harbor moved outside and neither of them said what they were thinking. Eventually she told him about the Marisol — the auction, six months ago, standing at the railing, not crying. She told him what she hadn't told anyone. He listened in the way he listened to everything, completely, without filling the silence. When she finished he said, "Your father tried to report it. Twelve years ago. Someone made sure the report disappeared." She'd suspected it for a long time. Hearing it said out loud was different. She looked at her hands. "I know," she said. "I've known for a while." He nodded slowly. "So did he."`,
};

const insertAll = db.transaction(() => {
  // Novel
  db.prepare(`INSERT INTO novels (id, title, description, created_at, updated_at) VALUES (?,?,?,?,?)`)
    .run(NOVEL_ID, 'The Harbor Secret',
      `A noir thriller set in a coastal city, following investigative journalist Elena Vasquez as she uncovers a decades-old conspiracy tied to the harbor district — and the man who's been hiding the truth all along.`,
      now, now);

  // Chapters
  const chapterTitles = [
    'Ch 1 · The Beginning', 'Ch 2 · Old Wounds', 'Ch 3 · The Turn',
    'Ch 4 · Losing Ground', 'Ch 5 · Shadows', 'Ch 6 · The Confrontation'
  ];
  const chapterIds = chapterTitles.map((title, i) => {
    const id = uid();
    db.prepare(`INSERT INTO chapters (id, novel_id, title, position, created_at, updated_at) VALUES (?,?,?,?,?,?)`)
      .run(id, NOVEL_ID, title, i, now, now);
    return id;
  });

  // Scenes (2 per chapter)
  const sceneData = [
    [chapterIds[0], 'First Steps',        SCENES.ch1s1, 0],
    [chapterIds[0], 'Setting Out',         SCENES.ch1s2, 1],
    [chapterIds[1], 'The Contact',         SCENES.ch2s1, 0],
    [chapterIds[1], 'What Marcus Knows',   SCENES.ch2s2, 1],
    [chapterIds[2], 'Shifting Alliances',  SCENES.ch3s1, 0],
    [chapterIds[2], 'The Paper',           SCENES.ch3s2, 1],
    [chapterIds[3], 'Stalled',             SCENES.ch4s1, 0],
    [chapterIds[3], 'Dead End',            SCENES.ch4s2, 1],
    [chapterIds[4], 'The Flashback',       SCENES.ch5s1, 0],
    [chapterIds[4], 'Danny',               SCENES.ch5s2, 1],
    [chapterIds[5], 'Face to Face',        SCENES.ch6s1, 0],
    [chapterIds[5], 'After',               SCENES.ch6s2, 1],
  ];
  for (const [chId, title, prose, pos] of sceneData) {
    const wc = prose.split(/\s+/).length;
    db.prepare(`INSERT INTO scenes (id, chapter_id, title, position, content, synopsis, word_count, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?)`)
      .run(uid(), chId, title, pos, tiptap(prose), '', wc, now, now);
  }

  // Characters
  db.prepare(`INSERT INTO characters (id, novel_id, name, role, description, personality, notes, position, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)`)
    .run(uid(), NOVEL_ID, 'Elena Vasquez', 'protagonist',
      `Investigative journalist in her mid-30s. Sharp, tenacious, carries a quiet grief she rarely shows. Grew up watching her father work the docks before he died under circumstances she still considers suspicious.`,
      `Driven, methodical, slow to trust. Uses work as an escape from guilt. When cornered emotionally, she deflects into facts and deadlines.`,
      `Her central flaw is avoidance — she investigates everyone else's secrets but refuses to confront her own role in her father's death. Her active goal is to expose the harbor conspiracy, but her real goal is absolution. In Ch 2 she explicitly says she hasn't been to the harbor in years; in Ch 5 a flashback reveals she was there six months ago for the Marisol auction — a direct inconsistency. In Ch 4 she is entirely reactive, waiting for Marcus rather than pursuing her own leads.`,
      0, now, now);

  db.prepare(`INSERT INTO characters (id, novel_id, name, role, description, personality, notes, position, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)`)
    .run(uid(), NOVEL_ID, 'Marcus Cole', 'supporting',
      `Former dock worker turned reluctant informant. Late 30s, broad-shouldered, speaks slowly and means it. Has an older brother (Danny) who is entangled in the harbor conspiracy.`,
      `Fiercely loyal to family above all else. Distrustful of outsiders, especially journalists. Opens up only when he believes someone is genuinely at risk.`,
      `His central conflict is between protecting Danny and doing the right thing. He views Elena as a threat to Danny at first, then as the only person who can save him. His distrust of Elena is stated explicitly in Ch 6 — but the shift from hostile to trusting between Ch 3 and Ch 4 happens without a clear bridging scene.`,
      1, now, now);

  // Plot lines
  const plotLines = [
    ['Main Investigation', '#8b5cf6', 0],
    ['Elena & Marcus',     '#3b82f6', 1],
    ['The Harbor Secret',  '#10b981', 2],
  ];
  for (const [title, color, pos] of plotLines) {
    db.prepare(`INSERT INTO plot_lines (id, novel_id, title, color, position, created_at, updated_at) VALUES (?,?,?,?,?,?,?)`)
      .run(uid(), NOVEL_ID, title, color, pos, now, now);
  }

  console.log(`✓ Novel seeded: "${NOVEL_ID}"`);
  console.log('✓ 6 chapters, 12 scenes, 2 characters, 3 plot lines inserted.');
});

insertAll();
db.close();
```

- [ ] **Step 3: Run the seed script**

```bash
cd "/c/Users/ariep/novelist-site"
node scripts/seed-demo-novel.cjs
```

Expected:
```
✓ Novel seeded: "<some-uuid>"
✓ 6 chapters, 12 scenes, 2 characters, 3 plot lines inserted.
```

- [ ] **Step 4: Verify in Novelist app**

Open the Novelist desktop app. "The Harbor Secret" should appear in the dashboard. Click into it — verify:
- 6 chapters visible in sidebar
- Ch 2 Scene 1 "The Contact" contains the line about not setting foot near the harbor
- Ch 5 Scene 1 "The Flashback" contains the harbor flashback 6 months ago
- Characters: Elena Vasquez (protagonist) and Marcus Cole (supporting) both appear

- [ ] **Step 5: Configure Groq**

In Novelist: Settings → AI → select "Groq" → paste API key → click "Test Key" → confirm ✓

- [ ] **Step 6: Commit**

```bash
cd "/c/Users/ariep/novelist-site"
git add scripts/seed-demo-novel.cjs
git commit -m "feat: add seed script for Harbor Secret demo novel"
```

---

## Task 3: Measure AI panel crop coordinates

**Files:** none

The Novelist AI panel is the right-side drawer. We need its screen coordinates for ffmpeg.

- [ ] **Step 1: Open Novelist and navigate to The Harbor Secret**

Open Novelist app. Click "The Harbor Secret". The app should show the chapter/scene editor with the AI panel visible on the right.

- [ ] **Step 2: Make sure the AI panel is open**

Click the AI chat icon/button to open the AI panel if it's not already visible.

- [ ] **Step 3: Take a screenshot to identify coordinates**

Use the computer tool to take a screenshot of the full screen. Identify the bounding box of the AI panel (the right-side column from its left edge to the right edge of the screen, top to bottom).

- [ ] **Step 4: Record the coordinates**

Note these four values (physical pixels, accounting for DPI scale):
- `PANEL_X` — left edge of AI panel
- `PANEL_Y` — top of AI panel (below window titlebar)
- `PANEL_W` — width of AI panel
- `PANEL_H` — height of AI panel

These will be substituted into the ffmpeg commands in Tasks 4–6.

---

## Task 4: Record Video 1 — Plot Auditor

**Files:**
- Create: `novelist-site/public/demos/demo-plot-auditor.mp4`
- Create: `novelist-site/public/demos/demo-plot-auditor.webm`

- [ ] **Step 1: Create public/demos directory**

```bash
mkdir -p "/c/Users/ariep/novelist-site/public/demos"
```

- [ ] **Step 2: Open Novelist, navigate to The Harbor Secret**

Ensure AI panel is open and cleared of any previous messages.

- [ ] **Step 3: Start ffmpeg recording in background**

Replace `<X>` `<Y>` `<W>` `<H>` with values from Task 3:

```bash
ffmpeg -f gdigrab -framerate 30 \
  -offset_x <X> -offset_y <Y> -video_size <W>x<H> \
  -i desktop -vcodec libx264 -pix_fmt yuv420p \
  -t 15 "/c/Users/ariep/novelist-site/raw-plot-auditor.mp4"
```

Run this in a background terminal (it records for 15 seconds).

- [ ] **Step 4: Type and submit the question (while recording)**

In the AI panel, type:
```
Is there anything inconsistent about Elena's timeline in the first half?
```

Press Enter / click Send. Wait for the full AI response to appear.

- [ ] **Step 5: Stop ffmpeg after response is fully visible**

Let ffmpeg finish its 15-second recording, or press `q` to stop early once the response is complete.

- [ ] **Step 6: Verify the raw recording**

Check that `raw-plot-auditor.mp4` was created and contains the interaction. The AI response must mention at least 2 of: Elena, harbor, chapter number, father, inconsistency, Marisol.

If the response is generic: see retry strategy in spec Part 2 and re-record.

- [ ] **Step 7: Trim to the key moment and encode MP4**

```bash
cd "/c/Users/ariep/novelist-site"
ffmpeg -ss 0.3 -i raw-plot-auditor.mp4 -t 6 \
  -vcodec libx264 -crf 28 -pix_fmt yuv420p \
  public/demos/demo-plot-auditor.mp4
```

Adjust `-ss` (start offset in seconds) and `-t` (duration) so the clip starts just before Send is clicked and ends when the full response is visible.

- [ ] **Step 8: Convert to WebM**

```bash
ffmpeg -i public/demos/demo-plot-auditor.mp4 \
  -c:v libvpx-vp9 -crf 33 -b:v 0 \
  public/demos/demo-plot-auditor.webm
```

- [ ] **Step 9: Check file sizes**

```bash
ls -lh public/demos/demo-plot-auditor.*
```

Expected: MP4 ≤ 8 MB, WebM ≤ 5 MB. If larger, re-encode with higher CRF (increase by 4).

- [ ] **Step 10: Clean up raw file**

```bash
rm raw-plot-auditor.mp4
```

---

## Task 5: Record Video 2 — Character Developer

**Files:**
- Create: `novelist-site/public/demos/demo-character-dev.mp4`
- Create: `novelist-site/public/demos/demo-character-dev.webm`

- [ ] **Step 1: Clear AI panel chat history in Novelist**

In the Novelist AI panel, start a new conversation (clear history or refresh the app).

- [ ] **Step 2: Start ffmpeg recording in background**

```bash
ffmpeg -f gdigrab -framerate 30 \
  -offset_x <X> -offset_y <Y> -video_size <W>x<H> \
  -i desktop -vcodec libx264 -pix_fmt yuv420p \
  -t 15 "/c/Users/ariep/novelist-site/raw-character-dev.mp4"
```

- [ ] **Step 3: Type and submit the question**

```
Elena feels flat in Ch 4. She's just reacting to events. How do I make her more active?
```

Wait for full AI response. It should reference Elena's guilt about her father and suggest an active goal.

If the response is generic: retry as per spec.

- [ ] **Step 4: Trim and encode MP4**

```bash
cd "/c/Users/ariep/novelist-site"
ffmpeg -ss 0.3 -i raw-character-dev.mp4 -t 6 \
  -vcodec libx264 -crf 28 -pix_fmt yuv420p \
  public/demos/demo-character-dev.mp4
```

- [ ] **Step 5: Convert to WebM**

```bash
ffmpeg -i public/demos/demo-character-dev.mp4 \
  -c:v libvpx-vp9 -crf 33 -b:v 0 \
  public/demos/demo-character-dev.webm
```

- [ ] **Step 6: Check file sizes and clean up**

```bash
ls -lh public/demos/demo-character-dev.*
rm raw-character-dev.mp4
```

---

## Task 6: Record Video 3 — Scene Reviewer

**Files:**
- Create: `novelist-site/public/demos/demo-scene-reviewer.mp4`
- Create: `novelist-site/public/demos/demo-scene-reviewer.webm`

- [ ] **Step 1: Clear AI panel chat history**

- [ ] **Step 2: Start ffmpeg recording in background**

```bash
ffmpeg -f gdigrab -framerate 30 \
  -offset_x <X> -offset_y <Y> -video_size <W>x<H> \
  -i desktop -vcodec libx264 -pix_fmt yuv420p \
  -t 15 "/c/Users/ariep/novelist-site/raw-scene-reviewer.mp4"
```

- [ ] **Step 3: Type and submit the question**

```
Does the confrontation scene in Ch 6 feel earned?
```

Wait for full response. It should mention hesitation beat, Marcus, the trust dynamic.

- [ ] **Step 4: Trim and encode MP4**

```bash
cd "/c/Users/ariep/novelist-site"
ffmpeg -ss 0.3 -i raw-scene-reviewer.mp4 -t 6 \
  -vcodec libx264 -crf 28 -pix_fmt yuv420p \
  public/demos/demo-scene-reviewer.mp4
```

- [ ] **Step 5: Convert to WebM**

```bash
ffmpeg -i public/demos/demo-scene-reviewer.mp4 \
  -c:v libvpx-vp9 -crf 33 -b:v 0 \
  public/demos/demo-scene-reviewer.webm
```

- [ ] **Step 6: Check file sizes and clean up**

```bash
ls -lh public/demos/demo-scene-reviewer.*
rm raw-scene-reviewer.mp4
```

- [ ] **Step 7: Verify all 6 video files exist**

```bash
ls -lh "/c/Users/ariep/novelist-site/public/demos/"
```

Expected: 6 files — 3× `.mp4` and 3× `.webm`, all ≤ 8 MB.

---

## Task 7: Update AIShowcase component

**Files:**
- Modify: `novelist-site/components/AIShowcase.tsx`

- [ ] **Step 1: Add `videoSlug` to scenarios array and type**

Replace the top of `components/AIShowcase.tsx` (lines 1–23) with:

```tsx
const scenarios: {
  icon: string;
  role: string;
  description: string;
  user: string;
  ai: string;
  videoSlug: string;
}[] = [
  {
    icon: "🔍",
    role: "Plot Auditor",
    description: "Catch inconsistencies before your readers do.",
    user: "Is there anything inconsistent about Elena's timeline in the first half?",
    ai: "One gap: in ch 2 Elena says she hasn't been to the harbor in years, but in ch 5 there's a flashback placing her there 6 months ago. Also, her relationship with Marcus shifts from hostile to trusting without explanation between ch 4 and 5.",
    videoSlug: "demo-plot-auditor",
  },
  {
    icon: "👤",
    role: "Character Developer",
    description: "Turn flat characters into people your readers remember.",
    user: "Elena feels flat in ch 4. She's just reacting to events. How do I make her more active?",
    ai: "Her profile says she's driven by guilt over her father's death. Right now she's reactive because she's avoiding confrontation. Give her a small goal in ch 4 that connects to that guilt — even a minor one — and it'll create tension against the external plot.",
    videoSlug: "demo-character-dev",
  },
  {
    icon: "📝",
    role: "Scene Reviewer",
    description: "Make sure your key scenes land the way you intended.",
    user: "Does the confrontation scene in ch 6 feel earned?",
    ai: "The emotional beat lands, but it arrives too fast. You've built 5 chapters of tension — let the scene breathe. The line 'I never trusted you' hits harder if Marcus hesitates first. Consider adding 2–3 beats of silence before he speaks.",
    videoSlug: "demo-scene-reviewer",
  },
];
```

- [ ] **Step 2: Add `<video>` element between header and chat**

In the card JSX, between `{/* Header */}` block and `{/* Chat */}` block, insert:

```tsx
              {/* Demo video */}
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

The full updated card JSX should look like:

```tsx
<div
  key={s.role}
  className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-violet-500/30 transition-colors"
>
  {/* Header */}
  <div className="px-5 py-4 border-b border-white/6 flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center text-base flex-shrink-0">
      {s.icon}
    </div>
    <div>
      <div className="text-white font-semibold text-sm">{s.role}</div>
      <div className="text-gray-500 text-xs mt-0.5">{s.description}</div>
    </div>
  </div>

  {/* Demo video */}
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

  {/* Chat */}
  <div className="p-4 flex flex-col gap-3 flex-1">
    {/* User bubble */}
    <div className="self-end bg-violet-500/15 text-violet-200 text-xs rounded-xl rounded-br-sm px-3 py-2.5 max-w-[90%] leading-relaxed text-right">
      {s.user}
    </div>
    {/* AI bubble */}
    <div className="self-start bg-white/5 text-white/60 text-xs rounded-xl rounded-bl-sm px-3 py-2.5 max-w-[95%] leading-relaxed">
      {s.ai}
    </div>
  </div>
</div>
```

- [ ] **Step 3: Run TypeScript check**

```bash
cd "/c/Users/ariep/novelist-site"
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/AIShowcase.tsx
git commit -m "feat: add demo videos to AIShowcase cards"
```

---

## Task 8: Verify in browser + build

**Files:** none

- [ ] **Step 1: Start dev server**

```bash
cd "/c/Users/ariep/novelist-site"
npm run dev
```

- [ ] **Step 2: Open browser and navigate to AIShowcase section**

Open `http://localhost:3000` and scroll to the "See your creative team in action" section.

Verify:
- All 3 cards show a video playing above the chat bubbles
- Videos loop silently without controls
- Chat bubbles below each video are readable
- No layout shift when page loads

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no errors or warnings about missing video files.

- [ ] **Step 4: Commit video files**

```bash
cd "/c/Users/ariep/novelist-site"
git add public/demos/
git commit -m "feat: add AI showcase demo video files"
```

- [ ] **Step 5: Push to Vercel**

```bash
git push origin main
```

Vercel auto-deploys. Wait ~1 minute then check the live site.

---

## Success Criteria

- [ ] All 6 video files exist in `public/demos/` (3× WebM + 3× MP4)
- [ ] Each video is ≤ 5 MB (WebM) / ≤ 8 MB (MP4)
- [ ] All 3 videos autoplay, loop, and are muted in the browser
- [ ] Each AI response in the video mentions at least 2 story-specific details
- [ ] `npm run build` passes with no TypeScript errors
- [ ] Live Vercel deployment shows videos in AIShowcase
