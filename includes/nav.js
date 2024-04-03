document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-row navbar-top">
    <div class="navbar-brand d-md-block">
      <a href="index.html"> <img id="usrl_logo" src="media/icons/usrl_logo.png" height="90" class="d-inline-block align-center" style="padding-right:2.5rem"/></a>
      <span class="align-center d-none d-md-inline">Unmanned Systems and Robotics Laboratory</span>
      <a href="https://www.sc.edu" target="_blank"> <img id="usc_logo" src="media/icons/usc_logo_centered_original.png" height="90" class="d-inline-block align-center" style="padding-left:2.5rem"/></a>
    </div>
    
    <button class="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light p-0 navbar-bottom">
    <div class="collapse navbar-collapse bg-light px-3" id="navbarContent">
      <ul class="navbar-nav mx-md-auto mx-0 w-50 align-items-start nav-fill">
        <li class="nav-item" >
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="research.html">Research</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="publications.html">Publications</a>
        </li>
        <li class="nav-item dropdown">
          <a href="people.html" class="nav-link dropdown-toggle" id="navbarDropdown" aria-haspopup="true"
            aria-expanded="false">
            People
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="people.html#faculty">Faculty</a>
            <a class="dropdown-item" href="people.html#phds">PhD Students</a>
            <a class="dropdown-item" href="people.html#masters">Masters Students</a>
            <a class="dropdown-item" href="people.html#ugrads">Undergraduate Students</a>
            <a class="dropdown-item" href="people.html#alumni">Alumni</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>

  </nav>
`)

$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('#navbarContent a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

});