array = document.getElementsByName('cssProperty');
for (let i = 0; i < array.length; i++)
{
  array[i].addEventListener('change', property);
}


function property(){
  value = this.value
  id = this.id

  style = document.getElementById("modify").style

  if (id == "background"){style.background = value}
  else if(id == "width"){style.width = value}
  else if(id == "height"){style.height = value}






}
