---
title: Finding Elements
description: Learn how to find elements using Alumnium and return native Appium, Playwright, or Selenium elements for direct manipulation.
---

Sometimes you need direct access to elements instead of using Alumnium's autonomous actions. The `find()` method locates elements using natural language descriptions and returns native driver elements that you can interact with directly.

```python
text_input = al.find("text input")
text_input.send_keys("Hello Alumnium!")

submit_button = al.find("submit button")
submit_button.click()
```

The returned element is a native driver element (Appium/Selenium `WebElement` or Playwright `Locator`), so you can use all standard methods from your testing framework.

Use `find()` when you need to:

- Access element properties or attributes
- Use framework-specific methods
- Work with test fixtures that expect native elements
- Get precise control over interactions

```python
# Getting element text
price = al.find("total price")
total = float(price.text.replace("$", ""))
assert total > 0

# Using framework-specific methods
button = al.find("dropdown menu")
assert button.is_displayed()
```

For simple interactions where you don't need the element reference, use `do()` instead.
