---
title: Writing Test
description: How to write a test with Alumnium
---

Let's see how we can write a simple test that would open Google, search for "Selenium", ensure that search results are loaded, and mention the Selenium browser automation tool.

:::note
Alumnium can be used with any test runner you like. For the purpose of simplicity, this guide uses a built-in `unittest` module.
:::

### Setup Selenium

Start by creating a Python script file for your tests and instantiating a WebDriver instance:

```python title="google_test.py"
import unittest
from selenium.webdriver import Chrome


class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")

    def test_search(self):
        pass
```

Now run the test. You should see a Chrome browser window open and navigate to Google.

```bash title="Running test..."
$ python -m unittest google_test.py
.
----------------------------------------------------------------------
Ran 1 test in 3.809s

OK
```

### Setup Alumnium

Now let's add the code that would instantiate Alumnium using the WebDriver object:

```python title="google_test.py" ins={2, 9}
import unittest
from alumnium import Alumni
from selenium.webdriver import Chrome

class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")
        self.al = Alumni(self.driver)

    def test_search(self):
        pass
```

The test should still work fine, let's re-run it to make sure:

```bash title="Running test..."
$ python -m unittest google_test.py
.
----------------------------------------------------------------------
Ran 1 test in 3.044s

OK
```

:::note
If you are getting errors about missing API keys, make sure you [configured][1] Alumnium and try again!
::::



### Add Actions

Now let's add some actions that Alumnium should **do** on the page. Our test needs to search for Selenium, so let's use this exact command:

```python title="google_test.py" del={13} ins={14}
import unittest
from alumnium import Alumni
from selenium.webdriver import Chrome


class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")
        self.al = Alumni(self.driver)

    def test_search(self):
        pass
        self.al.do("search for Selenium")
```

Run the test, you should now see "Selenium" typed in the search box and the page with results loaded.

```bash title="Running test..."
$ python -m unittest google_test.py
.
----------------------------------------------------------------------
Ran 1 test in 4.133s

OK
```

### Add Verifications

The next step is to add some verifications that the Alumnium should **check** on the page. We are going to add 2 of them, one that checks that the page title contains the search keyword and one to see if the Selenium browser automation tool website is present in the results.

Common wisdom says to _never trust a test you haven’t seen fail_. Let's add the first verification and see it fail!

```python title="google_test.py" ins={14}
import unittest
from alumnium import Alumni
from selenium.webdriver import Chrome


class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")
        self.al = Alumni(self.driver)

    def test_search(self):
        self.al.do("search for Selenium")
        self.al.check("page title contains Alumnium word")
```

Now let's run our test:

```bash title="Running test..." wrap {14}
$ python -m unittest google_test.py
F
======================================================================
FAIL: test_search (google_test.TestGoogleSearch.test_search)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/Users/p0deje/Development/alumnium.github.io/google_test.py", line 14, in test_search
    self.al.check("page title contains Alumnium word")
  File "/opt/homebrew/Caskroom/miniconda/base/lib/python3.12/site-packages/alumnium/alumni.py", line 48, in check
    self.verifier_agent.invoke(statement, vision)
  File "/opt/homebrew/Caskroom/miniconda/base/lib/python3.12/site-packages/alumnium/agents/verifier_agent.py", line 69, in invoke
    assert verification.result, verification.explanation
           ^^^^^^^^^^^^^^^^^^^
AssertionError: The page title is 'Selenium - Google Search', which does not contain the word 'Alumnium'.

----------------------------------------------------------------------
Ran 1 test in 11.505s

FAILED (failures=1)
```

Our test failed as we expected and provided a meaningful explanation of what went wrong.

Let's fix the first check and add another one, expecting it to fail again:

```python title="google_test.py" del={14} ins={15-16}
import unittest
from alumnium import Alumni
from selenium.webdriver import Chrome


class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")
        self.al = Alumni(self.driver)

    def test_search(self):
        self.al.do("search for Selenium")
        self.al.check("page title contains Alumnium word")
        self.al.check("page title contains Selenium word")
        self.al.check("selenium.dev is not present in the search results")
```

Time to re-run the test:

```bash title="Running test..." wrap {14}
$ python -m unittest google_test.py
F
======================================================================
FAIL: test_search (google_test.TestGoogleSearch.test_search)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/Users/p0deje/Development/alumnium.github.io/google_test.py", line 15, in test_search
    self.al.check("selenium.dev is not present in the search results")
  File "/opt/homebrew/Caskroom/miniconda/base/lib/python3.12/site-packages/alumnium/alumni.py", line 48, in check
    self.verifier_agent.invoke(statement, vision)
  File "/opt/homebrew/Caskroom/miniconda/base/lib/python3.12/site-packages/alumnium/agents/verifier_agent.py", line 69, in invoke
    assert verification.result, verification.explanation
           ^^^^^^^^^^^^^^^^^^^
AssertionError: The ARIA tree contains a link with the name 'Selenium Selenium https://www.selenium.dev' indicating that 'selenium.dev' is present in the search results.

----------------------------------------------------------------------
Ran 1 test in 12.911s

FAILED (failures=1)
```

Ok, the test failed as we wanted it to, let's finally fix it:

```python title="google_test.py" del={15} ins={16}
import unittest
from alumnium import Alumni
from selenium.webdriver import Chrome


class TestGoogleSearch(unittest.TestCase):
    def setUp(self):
        self.driver = Chrome()
        self.driver.get("https://google.com")
        self.al = Alumni(self.driver)

    def test_search(self):
        self.al.do("search for Selenium")
        self.al.check("page title contains Selenium word")
        self.al.check("selenium.dev is not present in the search results")
        self.al.check("selenium.dev is present in the search results")
```

Now, re-run to make sure it passes:

```bash title="Running test"
$ python -m unittest google_test.py
.
----------------------------------------------------------------------
Ran 1 test in 19.420s

OK
```

Congratulations, we have completed our first test!




[1]: configuration
