---
title: Configuration
description: Configure Alumnium with AI providers like OpenAI, Anthropic, Google, Meta, DeepSeek and Ollama. Learn how to set up API keys and environment variables for test automation.
---

Alumnium needs access to an AI model to work. The following models are supported:

| Provider                | Model                 |
| ----------------------- | --------------------- |
| [Anthropic][1]          | Claude 3 Haiku        |
| [Google][2]             | Gemini 2.0 Flash      |
| [OpenAI][3] _(default)_ | GPT-4o Mini           |
| [DeepSeek][12]          | DeepSeek V3           |
| [Meta][8]               | Llama 3.2 90B         |
| [Ollama][15]            | Mistral Small 3.1 24B |

These models were chosen because they provide the best balance between intelligence, performance, and cost. They all behave roughly the same in Alumnium tests.

:::tip[Trying out?]
Google provides [free-of-charge plan][7] in many regions, which is convenient for experimenting. Alumnium automatically retries the requests when hitting rate limits on the free plans.
:::

## Anthropic

To use Anthropic as an AI provider in Alumnium:

1. Get the [API key][4].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="anthropic"
export ANTHROPIC_API_KEY="sk-ant-..."
```

## Google

To use Google AI Studio as an AI provider in Alumnium:

1. Get the [API key][5].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="google"
export GOOGLE_API_KEY="..."
```

## OpenAI

To use OpenAI as an AI provider in Alumnium:

1. Get the [API key][6].
2. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="openai"
export OPENAI_API_KEY="sk-proj-..."
```

## DeepSeek

:::caution
DeepSeek support is experimental and doesn't work with vision checks. The current implementation works via the DeepSeek Platform, but we're looking forward to extending it with Ollama, llama.cpp, etc.
:::

To use DeepSeek as an AI provider in Alumnium:

1. Set up a [DeepSeek Platform][13] account.
2. Get the [API key][14].
3. Export the following environment variable before running tests:

```bash
export ALUMNIUM_MODEL="deepseek"
```

## Meta

:::caution
Llama support is experimental and doesn't work with vision checks. Its performance also highly depends on how you run it. The current implementation works via Amazon Bedrock, but we're looking forward to extending it with Ollama, llama.cpp, etc.
:::

To use Meta Llama as an AI provider in Alumnium:

1. Set up an [Amazon Bedrock][9] account.
2. Enable access to [Llama 3.2][10] models.
3. Get the [access key and secret][11].
4. Export the following environment variables before running tests:

```bash
export ALUMNIUM_MODEL="aws_meta"
export AWS_ACCESS_KEY="..."
export AWS_SECRET_KEY="..."
```

## Ollama

:::caution
Ollama support is experimental and performance depends on your hardware.
:::

To use Ollama for a fully local model inference:

1. Download and install [Ollama][15].
2. Download Mistrall Small 3.1 24B model:

```bash
ollama pull mistral-small3.1:24b
```

3. Export the following environment variable before running tests:

```bash
export ALUMNIUM_MODEL="ollama"
```

Read next to learn how to write tests!

[1]: https://www.anthropic.com
[2]: https://aistudio.google.com
[3]: https://openai.com
[4]: https://docs.anthropic.com/en/api/getting-started
[5]: https://aistudio.google.com/app/apikey
[6]: https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key
[7]: https://ai.google.dev/gemini-api/docs/billing
[8]: https://www.llama.com
[9]: https://aws.amazon.com/bedrock/
[10]: https://aws.amazon.com/bedrock/llama/
[11]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
[12]: https://www.deepseek.com
[13]: https://platform.deepseek.com
[14]: https://platform.deepseek.com/api_keys
[15]: https://ollama.com
