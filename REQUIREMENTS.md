# NovaBrew Coffee Taste Profile Quiz — Requirements

## Overview

A web-based personality quiz that matches coffee subscribers to their coffee personality and recommends specific NovaBrew coffees based on their result profile. The experience should feel premium and design-forward, while still playful and approachable enough to be shareable.

## Personality Types

### Bold Explorer
Confident, intense, and drawn to strong flavor. This personality likes presence, edge, and coffees that make a statement.

### Smooth Operator
Balanced, polished, and reliable. This personality values quality, ease, and a refined everyday experience that feels effortless.

### Cozy Classic
Comfort-first, warm, and familiar. This personality wants coffee that feels soothing, inviting, and easy to return to again and again.

### Wild Card
Curious, expressive, and open to the unexpected. This personality is energized by novelty, experimentation, and coffees with surprise or story.

## Coffee Pairings

- **Bold Explorer**: `Double Down`, `Midnight Summit`
  These coffees should feel bold, dark, intense, and high-impact.

- **Smooth Operator**: `Sunrise Blend`, `Sunday Paper`
  These coffees should feel balanced, approachable, polished, and easy to love.

- **Cozy Classic**: `Golden Hour`, `Velvet Fog`
  These coffees should feel soft, comforting, smooth, and emotionally warm.

- **Wild Card**: `Wildflower`, `Off the Map`
  These coffees should feel adventurous, distinctive, bright, and a little unexpected.

## Quiz Questions

### Question 1
**Pick the atmosphere that feels most like your perfect cup.**
- `🌋` Dim lights, sharp focus, and something intense enough to wake up the whole room. → Bold Explorer
- `☀️` Warm sunlight, smooth conversation, and a table everyone wants to sit at. → Smooth Operator
- `🛋️` A soft blanket, a slow morning, and absolutely nowhere to be. → Cozy Classic
- `🎨` A hidden café with one strange special you have to try. → Wild Card

### Question 2
**Choose the color palette that feels most like your taste.**
- `🖤` Espresso black, deep bronze, and burnt amber. → Bold Explorer
- `🤎` Honey beige, toasted almond, and soft gold. → Smooth Operator
- `🌫️` Cream, dusty rose, and warm oatmeal. → Cozy Classic
- `🦚` Plum, olive, and electric orange. → Wild Card

### Question 3
**Your ideal weekend starts with:**
- `⚡` A bold plan, a strong drink, and zero hesitation. → Bold Explorer
- `🧺` A relaxed brunch with people you actually like. → Smooth Operator
- `📚` Staying in, getting cozy, and easing into the day. → Cozy Classic
- `🗺️` Going somewhere new with no real agenda. → Wild Card

### Question 4
**Pick the kind of surprise you enjoy most.**
- `🔥` Something powerful that instantly grabs your attention. → Bold Explorer
- `🎁` Something thoughtful, polished, and easy to love. → Smooth Operator
- `🕯️` Something comforting that feels like it already knows you. → Cozy Classic
- `✨` Something unexpected that makes you say, "Wait, what is this?" → Wild Card

### Question 5
**Which setting feels most like your personal rhythm?**
- `🏙️` Fast-moving city energy at golden hour. → Bold Explorer
- `🌤️` A bright kitchen with music in the background. → Smooth Operator
- `🍂` A quiet window seat on a rainy afternoon. → Cozy Classic
- `🌌` A late-night spot you found by accident and now want to tell nobody about. → Wild Card

### Question 6
**When you try something new, what are you hoping for?**
- `💥` Intensity and impact. → Bold Explorer
- `👌` Balance and confidence. → Smooth Operator
- `💛` Comfort with just enough charm. → Cozy Classic
- `🚀` Discovery and a story worth telling. → Wild Card

## Quiz Logic

- Each answer maps to one personality type.
- Track a running score across all questions.
- At the end, show the percentage breakdown across all four personality types.
- Highlight the top personality as the primary result.
- Use the percentages to make the result feel nuanced and premium rather than rigid.

## Visual Style

The quiz should feel like a blend of premium luxury and playful warmth.

Design direction:
- Elevated overall presentation with rich colors, strong contrast, and polished finishing details
- Friendly, approachable energy rather than cold minimalism
- Rounded shapes or playful UI touches, but nothing childish
- A visually shareable result experience that still feels upscale and brand-consistent
- Design-forward enough to feel like a premium coffee brand, not a generic internet quiz

## Extra Features

- **Images on results:** Skip for the first version
- **Icons or emoji in answer options:** Yes
- **Result style:** Percentage-based personality breakdown

## Technical Notes

- Built with Next.js and Tailwind CSS
- Single-page app with smooth transitions between questions
- Mobile-responsive and easy to use on phones
- Results page should feel polished and shareable
