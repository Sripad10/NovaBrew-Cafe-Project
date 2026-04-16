"use client";

import { useMemo, useState } from "react";
import { personalities, questions, type PersonalityKey } from "./quiz-data";

type ViewState = "intro" | "quiz" | "results";

const personalityOrder: PersonalityKey[] = personalities.map(
  (personality) => personality.key,
);

const initialScores = personalityOrder.reduce(
  (acc, key) => ({ ...acc, [key]: 0 }),
  {} as Record<PersonalityKey, number>,
);

function getPercentageBreakdown(scores: Record<PersonalityKey, number>) {
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);

  if (total === 0) {
    return personalityOrder.map((key) => ({ key, percentage: 25 }));
  }

  const raw = personalityOrder.map((key) => ({
    key,
    raw: (scores[key] / total) * 100,
  }));

  const rounded = raw.map((entry) => ({
    key: entry.key,
    percentage: Math.floor(entry.raw),
    remainder: entry.raw - Math.floor(entry.raw),
  }));

  const used = rounded.reduce((sum, entry) => sum + entry.percentage, 0);
  let remaining = 100 - used;

  rounded
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((entry) => {
      if (remaining > 0) {
        entry.percentage += 1;
        remaining -= 1;
      }
    });

  return rounded
    .sort(
      (a, b) =>
        personalityOrder.indexOf(a.key) - personalityOrder.indexOf(b.key),
    )
    .map(({ key, percentage }) => ({ key, percentage }));
}

export default function Home() {
  const [view, setView] = useState<ViewState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] =
    useState<Record<PersonalityKey, number>>(initialScores);

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const breakdown = useMemo(() => getPercentageBreakdown(scores), [scores]);

  const sortedResults = useMemo(() => {
    return breakdown
      .map((item) => ({
        ...item,
        personality: personalities.find((personality) => personality.key === item.key)!,
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }, [breakdown]);

  const primary = sortedResults[0];
  const secondary = sortedResults[1];

  const handleAnswer = (personality: PersonalityKey) => {
    const updatedScores = {
      ...scores,
      [personality]: scores[personality] + 1,
    };
    setScores(updatedScores);

    if (currentQuestion === questions.length - 1) {
      setView("results");
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setScores(initialScores);
    setCurrentQuestion(0);
    setView("intro");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#f7f4ef_0%,_#f1ece6_48%,_#e8e1d9_100%)] text-[#15110f]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-6 flex items-center justify-between rounded-full border border-black/6 bg-white/30 px-4 py-3 shadow-[0_6px_24px_rgba(34,24,19,0.04)] backdrop-blur md:px-6">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#7d6c62]">
              NovaBrew Coffee Co.
            </p>
            <h1 className="font-serif text-lg font-semibold text-[#16110f] md:text-xl">
              Coffee Taste Profile Quiz
            </h1>
          </div>
          <div className="hidden rounded-full border border-black/6 bg-[#f6f1ea] px-4 py-2 text-sm font-medium text-[#453a33] shadow-[0_6px_16px_rgba(34,24,19,0.03)] md:block">
            Black-cream editorial.
          </div>
        </header>

        {view === "intro" ? (
          <section className="grid flex-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="rounded-[1.4rem] border border-black/6 bg-[rgba(255,253,250,0.74)] p-8 shadow-[0_18px_44px_rgba(34,24,19,0.05)] backdrop-blur md:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.38em] text-[#84746a]">
                Designed for NovaBrew subscribers
              </p>
              <h2 className="max-w-3xl font-serif text-4xl leading-[0.95] text-[#171210] md:text-6xl">
                Find the coffee personality that actually feels like you.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#60534c] md:text-xl">
                This quiz blends premium visual storytelling with real preference signals so
                every subscriber gets a result that feels personal, memorable, and easy to act on.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {personalities.map((personality) => (
                  <div
                    key={personality.key}
                    className="rounded-[0.8rem] border border-black/6 bg-[rgba(255,255,255,0.78)] p-5 shadow-[0_8px_20px_rgba(34,24,19,0.025)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full border border-black/6 bg-[#f4efe8] text-base"
                      >
                        {personality.palette.emoji}
                      </span>
                      <div>
                        <p className="font-semibold text-[#2a1b15]">
                          {personality.name}
                        </p>
                        <p className="text-sm text-[#836355]">
                          {personality.recommendation.primary}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-[#67584f]">
                      {personality.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.4rem] border border-black/10 bg-[linear-gradient(180deg,#181413_0%,#100d0c_100%)] p-8 text-[#f5efe8] shadow-[0_24px_60px_rgba(19,16,15,0.16)] md:p-10">
              <div className="mb-6 inline-flex rounded-full border border-white/8 bg-white/3 px-4 py-2 text-sm font-medium text-[#cab9ad]">
                6 questions • percentage-based results
              </div>
              <h3 className="font-serif text-3xl md:text-4xl">
                A better match starts with better questions.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#d9c8bb]">
                Expect an editorial, emotionally intelligent experience: atmospheric prompts,
                subtle cues, and just enough grounded signal to make the match feel credible.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Monochrome restraint with a boutique hospitality sensibility",
                  "High-fashion pacing: calm, intentional, and visually exact",
                  "A result experience polished enough to feel bespoke",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[0.75rem] border border-white/6 bg-white/2 px-4 py-4 text-sm leading-6 text-[#e5d8cf]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setView("quiz")}
                className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-[#d8ccc0] bg-[linear-gradient(135deg,#f8f3ed,#ece5dc)] px-6 py-4 text-base font-semibold text-[#1d1714] shadow-[0_12px_24px_rgba(18,14,12,0.10)] transition hover:-translate-y-0.5"
              >
                Start the Taste Profile
              </button>
            </div>
          </section>
        ) : null}

        {view === "quiz" ? (
          <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
            <div className="rounded-[1.4rem] border border-black/6 bg-[rgba(255,253,250,0.78)] p-6 shadow-[0_18px_44px_rgba(34,24,19,0.05)] backdrop-blur md:p-8">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8e7c70]">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-[#171210] md:text-5xl">
                    {current.prompt}
                  </h2>
                </div>
                <div className="min-w-[180px]">
                  <div className="mb-2 flex justify-between text-sm font-medium text-[#756155]">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#e4ddd5]">
                    <div
                      className="h-1.5 rounded-full bg-[linear-gradient(90deg,#49403a,#bba89b)] transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {current.options.map((option) => (
                  <button
                    key={`${current.id}-${option.personality}-${option.text}`}
                    onClick={() => handleAnswer(option.personality)}
                    className="group rounded-[0.75rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(252,248,244,0.90))] p-5 text-left shadow-[0_8px_20px_rgba(34,24,19,0.025)] transition duration-200 hover:-translate-y-1 hover:border-[#99897e] hover:shadow-[0_14px_28px_rgba(34,24,19,0.06)] md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/6 bg-[#f3eee8] text-base shadow-[inset_0_0_0_1px_rgba(143,113,92,0.04)]">
                        {option.label}
                      </span>
                      <div>
                        <p className="text-lg font-semibold leading-7 text-[#1b1512]">
                          {option.text}
                        </p>
                        <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-[#8e786c]">
                          Choose this vibe
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {view === "results" && primary ? (
          <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="rounded-[1.4rem] border border-black/10 bg-[linear-gradient(180deg,#181413_0%,#100d0c_100%)] p-8 text-[#f5eee8] shadow-[0_24px_60px_rgba(19,16,15,0.16)] md:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#ccbbb0]">
                  Your NovaBrew taste profile
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/6 text-xl backdrop-blur">
                    {primary.personality.palette.emoji}
                  </span>
                  <div>
                    <h2 className="font-serif text-4xl leading-none md:text-6xl">
                      {primary.personality.name}
                    </h2>
                    <p className="mt-2 text-lg text-[#d8c8bb]">
                      {primary.percentage}% of your profile
                    </p>
                  </div>
                </div>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[#efe3d8]">
                  {primary.personality.resultSummary}
                </p>

                <div className="mt-8 rounded-[0.75rem] border border-white/6 bg-white/4 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d2c0b4]">
                    Your signature match
                  </p>
                  <p className="mt-3 font-serif text-3xl">
                    {primary.personality.recommendation.primary}
                  </p>
                  <p className="mt-1 text-lg text-[#e5d6cb]">
                    Also try {primary.personality.recommendation.secondary}
                  </p>
                  <p className="mt-4 leading-7 text-[#dfcfc2]">
                    {primary.personality.recommendation.note}
                  </p>
                </div>

                {secondary ? (
                  <div className="mt-6 rounded-[0.75rem] border border-white/6 bg-black/8 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#c9b7aa]">
                      Secondary tendency
                    </p>
                    <p className="mt-2 text-xl font-semibold">
                      {secondary.personality.name} • {secondary.percentage}%
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="rounded-[1.4rem] border border-black/6 bg-[rgba(255,253,250,0.78)] p-8 shadow-[0_18px_44px_rgba(34,24,19,0.05)] backdrop-blur md:p-10">
                <h3 className="font-serif text-3xl text-[#181311] md:text-4xl">
                  Your full percentage breakdown
                </h3>
                <p className="mt-3 text-base leading-7 text-[#64574f]">
                  This editorial view shows the full mix behind your palate, not just one rigid label.
                </p>

                <div className="mt-8 space-y-5">
                  {sortedResults.map((result) => (
                    <div key={result.key}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className="grid h-9 w-9 place-items-center rounded-full border border-black/6 bg-[#f4efe8] text-sm"
                          >
                            {result.personality.palette.emoji}
                          </span>
                          <span className="font-semibold text-[#2c1d18]">
                            {result.personality.shortLabel}
                          </span>
                        </div>
                          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c7467]">
                          {result.percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#e8e0d8]">
                        <div
                          className="h-1.5 rounded-full transition-all duration-700"
                          style={{
                            width: `${result.percentage}%`,
                            background: `linear-gradient(90deg, #4b3f39, #b9a79a)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[0.75rem] bg-[#f5eee7] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#877062]">
                    Why this works for NovaBrew
                  </p>
                  <p className="mt-3 leading-7 text-[#5f4d42]">
                    Your result is more than a label. It gives NovaBrew a memorable way to explain
                    your taste, personalize future recommendations, and make the subscription feel
                    like it actually knows you.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={resetQuiz}
                    className="rounded-full bg-[#171311] px-6 py-4 text-base font-semibold text-[#f5ece3] transition hover:-translate-y-0.5"
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => {
                      const shareText = `I got ${primary.personality.name} on the NovaBrew Coffee Taste Profile Quiz — ${primary.percentage}% me, with ${secondary?.personality.name ?? "a layered"} energy.`;
                      navigator.clipboard.writeText(shareText);
                    }}
                    className="rounded-full border border-[#d7ccc1] bg-white px-6 py-4 text-base font-semibold text-[#5c4d45] transition hover:-translate-y-0.5"
                  >
                    Copy Result Text
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
