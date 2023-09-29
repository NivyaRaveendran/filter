var filter=document.getElementById('filter');

//filter event
filter.addEventListener('keyup',filterItems);

//filter items
//convert text to lower case
var text=e.target.value.toLowerCase();
var items=itemList.getElementByTagname('li');
console.log(items);

//convert to array
Arraay.from(items).forEach(function(item)
{
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1)
    {
        item.style.display='block';
    } else
    {
        item.style.display='none';
    }
    console.log(itemName);
});

