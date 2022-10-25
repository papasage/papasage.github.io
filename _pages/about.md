---
title: About
permalink: /about/

layout: page
---

<div class="flex flex-column lg:flex-row align-items-center">
	<div class="lg:text-justify lg:mr-12">
		<p>
			Write your biography here. Tell the world about yourself. Link to your favorite <a href="http://reddit.com" target="blank">subreddit</a>. You can put a picture in, too. The code is already in, just name your picture "assets/media/prof_pic.png" and put it in the img folder. 
		<p>
		</p>
			Link to your social media connections, too. This theme is set up to use <a href="http://fortawesome.github.io/Font-Awesome/" target="blank">Font Awesome icons</a>, like the ones below. Update "_data/socials.yml" to adjust what socials are shown.
		</p>
	</div>

	{% include image.html class="w-3/4 border-radius-lg" name="prof_pic.png" %}
</div>

<hr/>

{% include socials.html class="flex flex-row justify-center text-center flex-wrap" link-class="mx-4" %}

<div class="mt-6 lg:mt-2"></div>

<p class="caption text-center">
	You can even add a little note about which of these is the best way to reach you.
</p>