---
title: About
permalink: /about/

layout: page
---

<div class="flex flex-column lg:flex-row align-items-center">
	<div class="lg:text-justify lg:mr-12">
		<p>
			Write your biography here. Tell the world about yourself. Link to your favorite <a href="http://reddit.com" target="blank">subreddit</a>. You can put a picture in, too. The code is already in, just name your picture "prof_pic.jpg" and put it in the img folder. 
		<p>
		</p>
			Link to your social media connections, too. This theme is set up to use <a href="http://fortawesome.github.io/Font-Awesome/" target="blank">Font Awesome icons</a>, like the ones below. Add your facebook, twitter, linkedin, or just disable all of them. 
		</p>
	</div>

	{% include image.html class="w-3/4" name="prof_pic.jpg" %}
</div>

<hr/>

{% include socials.html text=true class="flex flex-column lg:flex-row justify-center text-center" link-class="mx-2" %}

<div class="mt-6 lg:mt-2"></div>

<p class="caption text-center">
	You can even add a little note about which of these is the best way to reach you.
</p>