---
title: Getting Data
description: Learn how Alumnium retrieves data from applications with AI. Ensure test accuracy by checking the data directly.
---

Alumnium can retrieve data from an application when you instruct it to **get** something. It analyzes the current information on the mobile or web application, optionally including a screenshot, and extracts the appropriate data.

For example, after creating and completing tasks in the To-Do application, you might want to get the number of pending tasks:

```python
al.get("number of pending tasks")
```

Alumnium checks how many tasks are present on the page, which of them are pending, and then provides a count.

<video class="rounded-xl" alt="A screen recording of Alumnium getting number of pending tasks" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="/videos/get-int.mp4" type="video/mp4" />
  <source src="/videos/get-int.webm" type="video/webm" />
</video>

You can then use the number to perform assertions within your test.

```python
assert al.get("number of pending tasks") == 2
```

## Specific Data

Similarly to [actions][1] and [verifications][2], Alumnium works better when the extract data requests are concrete.

For example, you might want to separate the retrieval of titles for pending tasks from the retrieval of titles for completed tasks.

```python
assert al.get("titles of tasks") == ["buy milk", "buy bread", "buy honey", "buy water"]
assert al.get("titles of complete tasks") == ["buy milk", "buy bread"]
assert al.get("titles of pending tasks") == ["buy honey", "buy water"]
```

<video class="rounded-xl" alt="A screen recording of Alumnium getting number of pending tasks" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="/videos/get-list.mp4" type="video/mp4" />
  <source src="/videos/get-list.webm" type="video/webm" />
</video>

## Typecasting

Alumnium attempts to cast the data to an appropriate type. The currently supported types are integer, float, boolean, string, and lists of these types.

If the data is not present on the page, Alumnium returns `None`:

<video class="rounded-xl" alt="A screen recording of Alumnium returning null for data not present on the page" controls controlslist="nofullscreen" disablepictureinpicture muted playsinline width="100%" height="auto">
  <source src="/videos/get-none.mp4" type="video/mp4" />
  <source src="/videos/get-none.webm" type="video/webm" />
</video>

## Vision

Retrieving data from screenshots works similarly to [verifications][3]. In this case, the accessibility tree is completely ignored and therefore does not influence the results.

```python
al.get("number of pending tasks", vision=True)
```

## Flakiness

Alumnium automatically waits for the following conditions before attempting to extract any data:

1. The HTML document is loaded and ready.
2. Resources on the page are loaded.
3. Document mutations are finished.
4. XHR/fetch requests are finished.

[1]: /docs/guides/actions#specific-instructions
[2]: /docs/guides/verifications#specific-verifications
[3]: /docs/guides/verifications#vision
