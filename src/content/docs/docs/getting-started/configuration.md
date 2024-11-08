---
title: Configuration
description: How to configure Alumnium
---

Alumnium needs access to an AI model to work. The following models are supported:

| Provider                 | Model            |
| ------------------------ | ---------------- |
| [Anthropic][1]           | Claude 3 Haiku   |
| [Google][2]              | Gemini 1.5 Flash |
| [OpenAI][3] _(default)_  | GPT-4o Mini      |

These models were chosen because they provide the best balance between intelligence, performance, and cost. They all behave roughly the same in Alumnium tests.

:::note
Google provides [free-of-charge plan][7] in many regions, which is convenient for experimenting with Alumnium.
:::

### Anthropic

To use Anthropic as an AI provider in Alumnium:

1. Get the [API key][4].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="anthropic"
export ANTHROPIC_API_KEY="sk-ant-..."
```

### Google

To use Google AI Studio as an AI provider in Alumnium:

1. Get the [API key][5].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="google"
export GOOGLE_API_KEY="..."
```

### OpenAI

To use OpenAI as an AI provider in Alumnium:

1. Get the [API key][6].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="openai"
export OPENAI_API_KEY="sk-proj-..."
```


Read next to learn how to write tests!


[1]: https://www.anthropic.com
[2]: https://aistudio.google.com
[3]: https://openai.com
[4]: https://docs.anthropic.com/en/api/getting-started
[5]: https://aistudio.google.com/app/apikey
[6]: https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key
[7]: https://ai.google.dev/gemini-api/docs/billing
