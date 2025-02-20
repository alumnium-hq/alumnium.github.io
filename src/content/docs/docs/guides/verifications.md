---
title: Checking Verifications
description: Learn how Alumnium verifies web pages with AI-powered checks. Ensure test accuracy with concrete verifications and vision support.
---

Alumnium can verify statements on the web page when you instruct it to **check** something. It analyzes the current state of the web page, optionally including its screenshot, and decides whether the verification successfully passes or fails.

For example, after performing a Google search for "Mercury element", you might want to check that search results contain a link to the Wikipedia:

```python
al.check("search results contain Wikipedia article")
```

If the search results don't contain a link to Wikipedia, Alumnium raises an assertion error and explains:

```bash wrap
AssertionError: The search results do not include Wikipedia article. The results shown in the ARIA tree include links to 'foobar2000', 'selenium.dev', and other related topics, but there is no mention of 'Wikipedia'.
```

## Specific Verifications

Similarly to [actions][1], Alumnium works better when the verifications are concrete.

For example, if you are writing a test for completing tasks in the To-Do application and you don't check the exact task's state, you might end up with contradictory verifications passing at the same time!

```python
al.check("task is completed")
al.check("task is not completed")
```

<video class="rounded-xl" alt="A screen recording of Alumnium false positive when 1 out of 2 tasks is completed" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="../../../src/assets/videos/check-specific-1.mp4" type="video/mp4" />
  <source src="../../../src/assets/videos/check-specific-1.webm" type="video/webm" />
</video>

To avoid false positives in the tests, write more concrete verifications:

```python
al.check("task 'buy milk' is completed")
al.check("task 'buy bread' is not completed")
```

<video class="rounded-xl" alt="A screen recording of Alumnium passing when 1 out of 2 tasks is completed" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="../../../src/assets/videos/check-specific-2.mp4" type="video/mp4" />
  <source src="../../../src/assets/videos/check-specific-2.webm" type="video/webm" />
</video>

## Vision

:::caution
Vision verifications are significantly more expensive and slower, so resort to them only when needed.
:::

:::note
Meta Llama 3.2 [does not support vision verifications][2] yet.
:::

:::note
A screenshot is taken for the visible part of the page.
:::

Occasionally, the web page state is not enough for Alumnium to perform the check. In this case, instruct it to take a screenshot of the page and include it in the verification decision. This is useful when you need to check the visual representation of elements or their spatial relationships.

For example, in your test for the To-Do application, you might need a check that a completed task is shown with a strikethrough style.

```python
al.check("'buy milk' title font style is strikethrough")
```

Without a screenshot, this assertion can fail because there is no indication of font style in the web page itself:

```bash wrap
AssertionError: The ARIA tree does not provide any information regarding the font style of the 'buy milk' task, including whether it is strikethrough or not.
```

To make the check more reliable, add a screenshot to it:

```python
al.check("'buy milk' title font style is strikethrough", vision=True)
```

<video class="rounded-xl" alt="A screen recording of Alumnium failing to determe font style of completed task" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="../../../src/assets/videos/check-vision.mp4" type="video/mp4" />
  <source src="../../../src/assets/videos/check-vision.webm" type="video/webm" />
</video>

## Flakiness

Alumnium automatically waits for the following conditions before attempting to check any verification:

1. The HTML document is loaded and ready.
2. Resources on the page are loaded.
3. Document mutations are finished.
4. XHR/fetch requests are finished.

[1]: /docs/guides/actions#specific-instructions
[2]: https://github.com/boto/boto3/issues/4374
