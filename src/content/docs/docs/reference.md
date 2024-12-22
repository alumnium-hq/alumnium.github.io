---
title: Reference
description: Alumnium reference and notes
---

## Browser Support

Alumnium works by building an accessibility tree of the webpage. Unfortunately, there is no standard API in browsers to provide this tree. Due to this limitation, the current version of Alumnium only works in Chromium-based browsers such as Google Chrome, Microsoft Edge, Opera, and others.

## Flakiness

Alumnium provides some basic handling of flakiness in the tests, it will be improved over time:

1. retry upon an exception when **doing**;
2. retry upon an assertion error if the page contents are loading when **checking**.

These two mechanisms are enough for simple scenarions but will be improved over time.

## Environment Variables

The following environment variables can be used to control the behavior of Alumnium.

### `ALUMNIUM_DEBUG`

Set to `1` to enable debug logs and print them to stdout.

:::tip[Debug logs on GitHub Actions]
The following workflow step enables debug logging in Alumnium when they are enabled in [GitHub Actions][1].

```yaml title=".github/workflows/ci.yml"
- name: Sync debug logging with Alumnium
  run: echo ALUMNIUM_DEBUG=${{ runner.debug }} >> "$GITHUB_ENV"
```

:::

### `ALUMNIUM_MODEL`

Select AI provider and model to use.

| Value         | LLM                                    | Notes                                                                    |
| ------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| anthropic     | claude-3-haiku-20240307                | Anthropic API.                                                           |
| azure_openai  | gpt-4o-mini                            | Self-hosted Azure OpenAI API. Recommended model version is _2024-07-18_. |
| aws_anthropic | anthropic.claude-3-haiku-20240307-v1:0 | Serverless Amazon Bedrock API.                                           |
| aws_meta      | us.meta.llama3-2-90b-instruct-v1:0     | Serverless Amazon Bedrock API.                                           |
| google        | gemini-1.5-flash-002                   | Google AI Studio API.                                                    |
| openai        | gpt-4o-mini-2024-07-18                 | OpenAI API.                                                              |

### `ALUMNIUM_RPM_LIMIT`

Delay each request to the LLM to avoid exceeding the rate limit for requests.

For instance, if the limit is 10 requests per minute, Alumnium will delay each request for 6 seconds (60 seconds / 10 requests = 6 seconds/request) to ensure the system stays within the allowed usage.

[1]: https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/enabling-debug-logging
