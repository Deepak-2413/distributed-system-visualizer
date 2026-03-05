body{
font-family:Arial;
margin:0;
background:#f4f4f4;
}

header{
background:#222;
color:white;
text-align:center;
padding:30px;
}

#controls{
text-align:center;
padding:15px;
background:white;
}

#fail-controls{
text-align:center;
padding:10px;
background:white;
}

input{
padding:8px;
margin:5px;
width:150px;
}

button{
padding:8px 14px;
margin:5px;
cursor:pointer;
}

#nodes{
display:flex;
justify-content:center;
gap:30px;
margin:30px;
}

.node{
width:200px;
min-height:140px;
background:white;
border:2px solid #333;
border-radius:6px;
text-align:center;
padding:10px;
}

.node.failed{
background:#ffdede;
border-color:red;
}

#health{
background:white;
width:350px;
margin:20px auto;
padding:15px;
border-radius:6px;
}

#log{
background:white;
width:650px;
margin:20px auto;
padding:15px;
border-radius:6px;
}

#logBody{
font-family:monospace;
font-size:13px;
}

footer{
text-align:center;
padding:15px;
background:#222;
color:white;
margin-top:30px;
}