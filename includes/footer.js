document.write(`
  <footer class="page-footer font-small garnet pt-4">
    <img src="media/icons/usc_logo_centered.png" height="125" class="center" style="padding-bottom:1rem" alt="CEC_USC_logo">
    <div class="footer-copyright text-center py-3 black">&copy <script>document.write(new Date().getFullYear());</script> USRL Team, University
      of South Carolina. <div class="date"> </div> </div>

  </footer>
`)

const desiredRepo = "usrl-uofsc.github.io";
const dateTagClass = ".date";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    let repos = JSON.parse(this.responseText);

    repos.forEach((repo)=>{
      if (repo.name == desiredRepo)
      {
        var lastUpdated = new Date(repo.updated_at);
        var day = lastUpdated.getUTCDate();
        var month = lastUpdated.getUTCMonth() + 1;
        var year = lastUpdated.getUTCFullYear();
        $(dateTagClass).text(`Last updated: ${month}-${day}-${year}`);
      }
    });
  }
};
xhttp.open("GET", "https://api.github.com/users/usrl-uofsc/repos", true);
xhttp.send();