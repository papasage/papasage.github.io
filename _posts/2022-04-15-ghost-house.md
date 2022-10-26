---
title: Ghost House
description: an example of a blog post with some code
meta: yee haw
---

{% include media.html video="trailer.mp4" caption="This is a caption!" %}

This theme implements a built-in Jekyll feature, the use of Pygments, for sytanx highlighting. It supports more than 100 languages. This example is in C++. All you have to do is wrap your code in a liquid tag: 

{% raw  %}
{% highlight csharp %}

code code code

{% endhighlight %}
{% endraw %}

Produces something like this: 

{% highlight csharp %}

using UnityEngine;

public class Foo : MonoBehaviour
{
    void Start()
    {
        print("Hello!");
    }
}

{% endhighlight %}