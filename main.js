function desc_switch(elt){
  var elt_desc = document.getElementById(elt.id + "1")
  var current_nav = document.getElementsByClassName("nav current")
  var current_desc = document.getElementsByClassName("description current")
  current_nav[0].className = "nav"
  current_desc[0].className = "description"
  elt.className = "nav current"
  elt_desc.className = "description current"
  console.log("hello", elt_desc, current_nav, current_desc)
}
