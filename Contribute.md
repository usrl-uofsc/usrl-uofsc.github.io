# Contributing

## Publications
Publications require edits in the ```publications.html``` page, ```publications/``` folder, and ```style.css/publications.css```. 
### Add to the list
To add a conference, for example, create a new li element in the conferences ol. For example, if the current top looks like this:
```
<li>
    <script src="publications/conferences/18.js"></script>
    <script>generate_html();</script>
</li>
```
Add another entry above it so it looks like this:
```
<li>
    <script src="publications/conferences/19.js"></script>
    <script>generate_html();</script>
</li>
<li>
    <script src="publications/conferences/18.js"></script>
    <script>generate_html();</script>
</li>
```
***Be sure to increment the number.***

### Add the entry
Now in the publications/conferences folder, create a copy of the previos js file. For example, copy 18.js to 19.js. Now edit the new file with the publications information. ```publications/journals/8.js``` provides a great full example of this.

### Increment counter
Finally, you need to increase the counter in the css so the list displays correctly. Go to  ```style/publication.css```. Find ```    counter-reset: item X;``` under the ```ol#conferences``` tag. If you are adding a conference, find the ```ol#conferences``` tag. Increment whatever that X is to the number of the js file + 1. For example if you added 19.js, set X to 20.


