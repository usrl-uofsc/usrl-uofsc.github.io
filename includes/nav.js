document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-light flex-row navbar-top">
    <div class="navbar-brand d-md-block">
      <img src="media/icons/USRL.png" height="100" class="d-inline-block align-center" />
      <span class="align-center d-none d-md-inline">Unmanned Systems and Robotics Lab</span>

    </div>
    <span class="mx-lg-auto mr-auto"></span>

    <div class="navbar-brand d-none d-lg-block">
      <img src="media/icons/grid_uofsc_primary.svg" height="100" class="d-inline-block align-center" />
    </div>
    <button class="navbar-toggler ml-lg-0" type="button" data-toggle="collapse" data-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <nav class="navbar navbar-expand-lg navbar-light p-0 navbar-bottom">
    <div class="collapse navbar-collapse bg-light px-3" id="navbarContent">
      <ul class="navbar-nav mx-md-auto mx-0 w-50 align-items-start nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Home</a>
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