+++
title = "Academic Paper Zola Theme"
[extra]
authors = [
    {name = "Alexander Terenin", url = "https://avt.im/"},
]
venue = {name = "GitHub", url = "https://github.com/aterenin/academic-paper"}
buttons = [
    {name = "Paper", url = "https://aterenin.github.io/academic-paper"},
    {name = "PDF", url = "https://aterenin.github.io/academic-paper"},
    {name = "Code", url = "https://github.com/aterenin/academic-paper"},
    {name = "Poster", url = "https://aterenin.github.io/academic-paper"},
    {name = "Video", url = "https://aterenin.github.io/academic-paper"},
]
katex = true
large_card = false
favicon = false
+++

Welcome to the [Academic Paper](https://github.com/aterenin/academic-paper) Zola theme!
This theme is designed for hosting a blog-post-style website to facilitate scientific communication of your academic paper.

# Features

[Academic Paper](https://github.com/aterenin/academic-paper) is designed to be reasonably feature-complete. In particular, it supports:

* A header with title, author, publication venue, year, and optional buttons for the paper, PDF download link, code, poster, and video.
* Syntax highlighting via Zola, with a minimal CSS-based color theme.
* Math rendering via KaTeX, compatible with both client-side and server-side rendering when configured appropriately.
* Figures via a `figure(alt='Image alt text',src='path/to/image.png')` Zola shortcode, with support for optional captions, subfigures with optional subcaptions, implemented in responsive manner via flexbox.
* Markdown footnotes via Zola.
* Twitter Summary Card, OpenGraph, and JSON-LD metadata, to ensure the web pages produced are search-engine-friendly, and provide social media websites with a banner image link they can display when the website is shared on social media, with an implementation very similar to [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag).

Let's demonstrate some of these: writing
```tex
$$
\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(\frac{(x-\mu)^2}{-2\sigma^2}\right) \mathrm{d} x = 1.
$$
```
in the Markdown file produces the output
```
$$
\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(\frac{(x-\mu)^2}{-2\sigma^2}\right) \mathrm{d} x = 1.
$$
```
This theme also supports footnotes, and will style the heading that immediately precedes them.[^author]

# Design and maintainability

[Academic Paper](https://github.com/aterenin/academic-paper) is [designed to last](https://jeffhuang.com/designed_to_last/), meaning that it follows a number of best practices to ensure the websites it produces continue to work correctly in the indefinite future with minimal to no maintenance.
In particular, this theme uses no JavaScript or CSS dependencies, except optionally KaTeX for math.
Zola, with its Rust-based code, focus on simplicity, and one-binary design, is the clear static site generator of choice for such a theme.

# References

[^author]: This theme is designed and built by Alexander Terenin.