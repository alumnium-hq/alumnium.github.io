---
title: Reference
description: Alumnium reference and notes
---

## Browser Support

Alumnium works by building an accessibility tree of the webpage. Unfortunately, there is no standard API in browsers to provide this tree. Due to this limitation, the current version of Alumnium only works in Chromium-based browsers such as Google Chrome, Microsoft Edge, Opera, and others.

Playwright driver supports both *headful* and *headless* modes, while Selenium driver only supports the *headful* mode.

## Mobile Support

Alumnium currently supports Appium with XCUITest driver for iOS automation and UiAutomator2 driver for Android automation.

## Environment Variables

The following environment variables can be used to control the behavior of Alumnium.

### `ALUMNIUM_CACHE`

Sets the cache provider used by Alumnium. Supported values are:

- `filesystem` (default)
- `sqlite`
- `none` or `false`

### `ALUMNIUM_LOG_LEVEL`

Sets the level used by Alumnium logger. Supported values are:

- `debug`
- `info`
- `warning` (default)
- `error`
- `critical`

### `ALUMNIUM_LOG_PATH`

Sets the output location used by Alumnium logger. Supported values are:

- a path to a file (e.g. `alumnium.log`);
- `stdout` to print logs to the standard output.

:::tip[Debug logs on GitHub Actions]
The following workflow step enables debug logging in Alumnium when they are enabled in [GitHub Actions][1].

```yaml title=".github/workflows/ci.yml"
- name: Enable debug logging in Alumnium
  if: runner.debug == '1'
  run: |
    echo ALUMNIUM_LOG_LEVEL=debug >> "$GITHUB_ENV"
    echo ALUMNIUM_LOG_PATH=alumnium.log >> "$GITHUB_ENV"
```
:::

### `ALUMNIUM_MODEL`

Select AI provider and model to use.

| Value         | LLM                                             | Notes                                                                    |
| ------------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| anthropic     | claude-haiku-4-5-20251001                       | Anthropic API.                                                           |
| azure_openai  | gpt-4o-mini                                     | Self-hosted Azure OpenAI API. Recommended model version is _2024-07-18_. |
| aws_anthropic | global.anthropic.claude-haiku-4-5-20251001-v1:0 | Serverless Amazon Bedrock API.                                           |
| aws_meta      | us.meta.llama4-maverick-17b-instruct-v1:0       | Serverless Amazon Bedrock API.                                           |
| deepseek      | deepseek-chat                                   | DeepSeek Platform.                                                       |
| github        | gpt-4o-mini                                     | GitHub Models API.                                                       |
| google        | gemini-2.0-flash-001                            | Google AI Studio API.                                                    |
| mistralai     | mistral-medium-2505                             | Mistral AI Studio API.                                                   |
| ollama        | mistral-small3.1:24b                            | Local model inference with Ollama.                                       |
| openai        | gpt-4o-mini-2024-07-18                          | OpenAI API.                                                              |
| xai           | grok-4-fast-non-reasoning                       | xAI API.                                                                 |

You can also override the LLM for each provider by passing it after `/`.

```sh title="Custom OpenAI model"
export ALUMNIUM_MODEL="openai/gpt-5"
```

### `ALUMNIUM_OLLAMA_URL`

Sets the URL for Ollama models if you host them externally on a server.

[1]: https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/enabling-debug-logging
[2]: https://github.com/alumnium-hq/alumnium/issues/112
