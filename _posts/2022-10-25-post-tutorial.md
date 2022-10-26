---
title: How to Create a Post
description: A basic walkthrough of how to write your own post!
meta: yee haw
---

This Jekyll theme splits webpages into posts and pages. For our purposes, posts are projects and pages are everything else. A post requires a title and thumbnail, and optionally a description and/or a meta. An example can be seen in this file's source code or below.


```YML
---
title: Example Title
description: a longer description of the post. This is used for SEO and shown with the thumbnail in your portfolio and archive.
meta: a short line displayed under the post's title, on the post itself.
---
```

## Thumbnail

The post thumbnail must be in "/assets/posts/year/title/thumbnail.png". For example this post's thumbnail is here "/assets/posts/2022/post-tutorial/thumbnail.png".

---

# Preview Build

Navigate the root of the project (ex: "A:/GitHub/-folio-them").

If this is your first time creating a test build, we will need to install the gem dependencies using

```CMD
bundle install
```

Then, the below may be run to create a test build (that will update as you change files).

```CMD
bundle exec jekyll serve
```

The build may then be preview here: [localhost:4000](localhost:4000).

The build process may be stopped by pressing `ctrl + c`, `y`, `enter`, twice. Or by closing the command prompt or terminal this process was started with.

---

# Images and Videos

Images and videos may be included in posts using {% raw %}`{% include media.html %}`{% endraw %}. See below for an example.

{% raw %}
```Liquid
{% include media.html img="random-image.png" class="w-3/5" caption="This is a caption!" %}
```
{% endraw %}

<style>
    th
    {
        min-width: 8rem;
    }
</style>

| attribute   | description                                                     | example                       |
| :---------- | :-------------------------------------------------------------- | :---------------------------- |
| `img`       | the file name of an image                                       | thumbnail.png                 |
| `video`     | the file name of a video                                        | trailer.mp4                   |
| `caption`   | plain text (or html) caption                                    | "lorem ipsum"                 |
| `path`      | path to the img/video's folder (overrides automatic detetction) | /assets/media/placeholder.png |
| `class`     | css class(es) for the surrounding `<figure>`                    | "flex flex-row"               |
| `style`     | element specific style(s) for the surrounding `<figure>`        | "width: 2rem;"                |
| `img-class` | css class(es) for the child `<img>`                             | "border-radius-lg"            |

<br/>

When writing a post, the images/videos should be in "/assets/posts/year/title/".  
When writing a page, the images/videos should be in "/assets/media/".