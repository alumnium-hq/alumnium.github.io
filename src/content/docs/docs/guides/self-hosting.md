---
title: Self-hosting LLMs
description: Learn how to use self-hosted LLMs with Alumnium for AI-powered test automation.
---

Using third-party AI providers such as Anthropic, Google AI Studio, and OpenAI is the easiest way to use Aluminium. However, you might prefer using self-hosted LLMs for security, privacy, or cost reasons.

Alumnium provides several options for using self-hosted LLMs:

1. Serverless models on [Amazon Bedrock][1].
2. OpenAI service on [Azure][4].
3. Local model inference with [Ollama][6].

## Amazon Bedrock

Alumnium supports the following models on Amazon Bedrock:

- [Claude 3 Haiku][2]
- [Llama 3.2][3]

Please follow the respective documentation on how to enable access to these models on Bedrock. Once enabled, configure Alumnium to use it by exporting the following environment variables:

```bash
export ALUMNIUM_MODEL="aws_anthropic" # for Claude
export ALUMNIUM_MODEL="aws_meta"      # for Llama

export AWS_ACCESS_KEY="..."
export AWS_SECRET_KEY="..."
export AWS_REGION_NAME="us-west-1"  # default: us-east-1
```

## Azure

Alumnium supports [GPT-4o Mini][5] model on Azure OpenAI service.

Please follow the respective documentation on how to deploy the model to Azure. Once deployed, configure Alumnium to use it by exporting the following environment variables:

```bash
export ALUMNIUM_MODEL="azure_openai"
export AZURE_OPENAI_API_KEY="..."
# Change as needed
export AZURE_OPENAI_API_VERSION="2024-08-01-preview"
export AZURE_OPENAI_ENDPOINT="https://my-model.openai.azure.com"
```

## Ollama

Ollama provides a fully local model inference. You can use it to power test execution on your own machine or deploy it to a server and access via API.

Please follow the respective documentation on how to deploy Ollama to the cloud. Once deployed, download necessary model and configure Alumnium to use it:

```bash
ollama pull mistral-small3.1:24b
export ALUMNIUM_MODEL="ollama"
```

[1]: https://aws.amazon.com/bedrock
[2]: https://aws.amazon.com/bedrock/claude/
[3]: https://aws.amazon.com/bedrock/llama/
[4]: https://azure.microsoft.com/en-us/products/ai-services/openai-service
[5]: https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions
[6]: https://ollama.com
