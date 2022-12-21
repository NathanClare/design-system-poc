# Design System - Proof of Concept

This is a Youwe internal project to test various techniques and tools for the integration of
a design system into a headless project.

This is a Next.js instance with Typescript, Tailwind and Storybook support.

## Installation

### 1. Install dependencies
Install: yarn install

### 2. Generate tokens
Generate tokens: npm transform-tokens

### 3. Lift off :rocket:
Run Storybook: yarn storybook
Begin developing: yarn dev

## Figma Tokens

Export tokens from a Figma file using the plug-in "Design Tokens". The generated Json file
should be copied to the [`tokens` folder](./tokens/).

Run `npm run transform-tokens` to generate the following three sets of CSS attributes, using
the [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/):

1. CSS variables
2. SCSS variables
3. Json

## Tailwind

The generated design tokens are imported into the [Tailwind config file](./tailwind.config.js)
to extend the standard Tailwind CSS classes.