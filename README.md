#Bitlr

A simple, lightweight jQuery plugin used to shorten a link using Bit.ly.

<a href="http://michael-lynch.github.io/bitlr/" target="_blank">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
<script src="/js/plugins/bitlr.js"></script>
```
    
Initialize the plugin and pass the function your api key, the link you want to shorten and the success callback function. 

```js
$.bitlr({
	apiKey: 'XXXXXXXXXXXXXXXXXXXXX',
	link: 'http://google.com',
	success: function(newLink) {
	    console.log(newLink);
	}
});
```	

####Required Properties

<ol>

<li>
apiKey: string
<br />A string that defines your api key provided by Bit.ly.
</li>

<li>link: string
<br />A string that defines the link you'd like to shorten. 
</li>

<li>success: function(newLink)
<br />A callback function that is triggered after the request is sucessful. The callback returns the new shortened link.
</li>
</ol>
	
####Optional Properties

<ol>

<li>anchor: bollean
<br />A boolean value that indicates whether or not the shortened link should be returned as an anchor (default: false).
</li>

<li>error: function()
<br />A callback function that is triggered after the request if the request is not sucessful.
</li>

</ol>

#####Example:

```js
$(function() {
	
	$.bitlr({
		apiKey: 'XXXXXXXXXXXXXXXXXXXXX',
		link: 'http://google.com',
		success: function(newLink) {
    		console.log(newLink);
		},
		error: function() {
			console.log('There was an error.');
		}
	});
		
});
```			