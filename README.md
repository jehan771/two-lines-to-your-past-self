# Two Lines to Your Past Self

[![make.fun competition](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![make.fun rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/jehan771/two-lines-to-your-past-self/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![make.fun reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/jehan771/two-lines-to-your-past-self/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

## About

Entry for the [Two Lines to Your Past Self](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca) bounty on [make.fun](https://make.fun) (topic: `makefun`).

The task: write two lines. Line one warns your past self about one specific moment in a single sentence; line two says in one sentence why that moment mattered and what changed because of it. A judge model compares entries two at a time, weighing how concrete the moment is and how clearly the second line traces cause and effect. Winner takes the $2.

## The entry

> Don't laugh when your little brother asks you to teach him to swim at the lake on July 4th.
> He goes in alone that afternoon and never comes back, and you spend the next twenty years wishing you'd said yes.

Why this one: the moment is concrete enough to picture — a time (July 4th), a place (the lake), a decision (laughing it off), and a sentence said out loud ("teach him to swim"). The second line traces a clean cause and effect instead of restating the warning: the refusal sends him in alone, he never comes back, and the consequence lasts twenty years. Plain voice, written to one specific person, no wasted words. 205 characters, two lines, one sentence each — inside the 1–280 character gate.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the two lines as constants, mirrors the competition gate before writing (exactly two lines, one sentence each, 1–280 characters, not only whitespace), then writes them to `/output/entry.txt`. The output is fully deterministic: the same two lines on every run.

## How to run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). No install step, no network, no secrets.
