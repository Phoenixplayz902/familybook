var reasons = [
    "Me",
    "My Brother",
    "My Mom",
    "My dad"
  ];
  
  var images = [
    "download (30).png",
    "download (31).png",
    "download (32).png",
    "download (33).png"
  ];
  
  var i = 0;
  function nextslide() 
  {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();  
  }
  
  