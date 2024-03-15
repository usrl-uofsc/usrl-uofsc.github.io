document.write(citation)

//if doi available and prefix set
if(site !=="") {
    document.write("<a href=\""+site+"\" class=\"btn btn-primary btn-xs\" target=\"blank\"  >Website</a>")
    site=""
}


//if prepring available and prefix set
if(preprint !=="") {
    document.write("<a href=\"" + prefix+preprint + "\" class=\"btn btn-primary btn-xs\" download>Pre-Print</a>  ")
    preprint=""
}

// If bibtex available and prefix set
if(bib !=="") {
    document.write("<input type=button onClick=window.open(\"" + prefix+bib + "\",\"Ratting\",\"width=650,height=550,left=150,top=200,toolbar=0,status=0,\"); class=\"btn btn-primary btn-xs\" value=\"BibTeX\" />")
    bib=""
}

// If code available
if(code !=="") {
    document.write("<a href=\"" + code + "\" class=\"btn btn-primary btn-xs\" target=\"blank\" role=\"button\" >Code</a>  ")
    code=""
}
